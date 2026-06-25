import { chapters, hackathons, achievements } from '../data/data';
import { events } from '../data/events';
import { execom2026 } from '../data/execom2026';
import { execom2025 } from '../data/execom2025';
import { execom2024 } from '../data/execom2024';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon?: string;
}

interface ExecomMember {
  name: string;
  position: string;
  linkedin?: string;
}

interface ExecomData {
  chapters: Record<string, ExecomMember[]>;
  committees: Record<string, ExecomMember[]>;
}

// Generate the knowledge base from existing data files
const chaptersKnowledge = chapters
  .map(
    (c) => `### ${c.name} (${c.shortName})
- Motto: ${c.motto}
- Description: ${c.description}
- Link: ${c.path}`
  )
  .join('\n\n');

const hackathonsKnowledge = `### Past Hackathons
${hackathons.past.map((h) => `- **${h.name}**: ${h.tagline} on ${h.date}. Held at ${h.location}. Organized by ${h.organizer}. Prizes: ${h.prize}. Winners: ${h.winners.map((w) => `${w.place}: Team ${w.team} (${w.project}, Prize: ${w.prize})`).join(', ')}`).join('\n')}

### Upcoming Hackathons
${hackathons.upcoming.map((h) => `- **${h.name}**: ${h.tagline} on ${h.date}. Organized by ${h.organizer}. Expected participants: ${h.participants}.`).join('\n')}`;

const achievementsKnowledge = Object.entries(achievements)
  .map(
    ([year, list]) => `### Year ${year} Achievements
${(list as Achievement[]).map((a) => `- **${a.title}** (${a.subtitle}): ${a.description}`).join('\n')}`
  )
  .join('\n\n');

const eventsKnowledge = events
  .map(
    (e) => `- **${e.title}** (${e.type} organised by ${e.organisedBy})
  - Date: ${e.startDate} to ${e.endDate}
  - Venue: ${e.venue}
  - Registration: ${e.registrationType || 'Contact organizers'}
  - Details: ${e.description}
  - Status: ${e.status}`
  )
  .join('\n\n');

const formatExecom = (year: number, data: ExecomData) => {
  const chaptersText = Object.entries(data.chapters)
    .map(([chapterName, members]) => {
      return `#### ${chapterName}
${members.map((m) => `- **${m.name}**: ${m.position} ${m.linkedin && m.linkedin !== '#' ? `([LinkedIn](${m.linkedin}))` : ''}`).join('\n')}`;
    })
    .join('\n\n');

  const committeesText = Object.entries(data.committees)
    .map(([committeeName, members]) => {
      return `#### ${committeeName}
${members.map((m) => `- **${m.name}**: ${m.position} ${m.linkedin && m.linkedin !== '#' ? `([LinkedIn](${m.linkedin}))` : ''}`).join('\n')}`;
    })
    .join('\n\n');

  return `### Execom Year ${year}
  
**Chapters and Board:**
${chaptersText}
  
**Committees:**
${committeesText}`;
};

const execom2026Knowledge = formatExecom(2026, execom2026 as ExecomData);
const execom2025Knowledge = formatExecom(2025, execom2025 as ExecomData);
const execom2024Knowledge = formatExecom(2024, execom2024 as ExecomData);

const knowledgeBase = `
## Chapters
${chaptersKnowledge}

## Hackathons
${hackathonsKnowledge}

## Achievements
${achievementsKnowledge}

## Recent Events
${eventsKnowledge}

## Executive Committee (Execom) / Leadership Teams (2024 - 2026)
${execom2026Knowledge}

${execom2025Knowledge}

${execom2024Knowledge}
`;

const systemInstructionText = `You are the IEEE MSIT Website Assistant. Answer questions strictly and ONLY using the provided website content. If the answer is not explicitly present in the data below, you must respond EXACTLY with: "I couldn't find that information on the IEEE MSIT website."

CRITICAL RULES:
1. Never guess, assume, or create any dates, events, team members, contact links, or facts.
2. Never output generic fallback statements like "Check our Instagram for updates", "Visit our website for more details", "We are planning exciting events", or similar.
3. The current date is June 25, 2026. Since all events and hackathons listed in the local data are in the past (occurring before June 2026), if the user asks about upcoming events, you must respond EXACTLY with: "There are currently no upcoming events listed on the IEEE MSIT website."
4. Answer questions about Execom members (like "Who is the Chairperson?") strictly using the Execom Year 2026/2025/2024 lists provided. For example, for Year 2026, the Chairperson is Mehak Singh.

---
## IEEE MSIT Overview
IEEE MSIT is a vibrant student branch of the global IEEE organization, dedicated to advancing technology for humanity. Based at Maharaja Surajmal Institute of Technology in New Delhi, our mission is to provide students with opportunities for technical skill development, leadership training, and professional networking through workshops, seminars, competitions, and collaborative projects.

---
## Achievements and Awards
- IEEE Region 10 Special Recognition Award 2023  
- Gold in Darrel Chong Award 2023-24  
- 1st Prize in IEEE Day Photo Contest (STEM category)  

---
## Contact Information
- Official Website: https://ieeemsit.vercel.app  
- Faculty Advisor Email: anupama@msit.in  
- Social Media: @ieeemsit  

---
## Additional Website Content & Data
${knowledgeBase}

---
End of Context.
Now answer the user question or maintain the chat conversation based on this context.`;

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

interface GeminiCandidate {
  content?: {
    parts?: { text: string }[];
  };
}

interface GeminiResponse {
  candidates?: GeminiCandidate[];
  error?: {
    code?: number;
    message?: string;
    status?: string;
  };
}

export async function askGemini(chatHistory: Message[]): Promise<string> {
  const isDev = import.meta.env.DEV;
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GEMINIAPIKEY;
  const lastUserMessage = chatHistory[chatHistory.length - 1];
  const query = lastUserMessage?.parts[0]?.text || '';
  const queryLower = query.toLowerCase();

  // Route event, workshop, and hackathon queries directly to local data
  if (
    queryLower.includes('event') ||
    queryLower.includes('workshop') ||
    queryLower.includes('hackathon') ||
    queryLower.includes('seminar') ||
    queryLower.includes('webinar')
  ) {
    if (isDev) {
      console.log('Matched file: src/data/events.ts');
      console.log(`Number of records found: ${events.length}`);
      console.log('Returned data source: Local events.ts database');
    }

    if (
      queryLower.includes('upcoming') ||
      queryLower.includes('future') ||
      queryLower.includes('next') ||
      queryLower.includes('coming')
    ) {
      const currentDate = new Date('2026-06-25');
      const upcoming = events.filter((e) => {
        if (!e.startDate) return false;
        const dateStr = e.startDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
        const eventDate = new Date(dateStr);
        return !isNaN(eventDate.getTime()) && eventDate >= currentDate;
      });

      if (upcoming.length === 0) {
        return "There are currently no upcoming events listed on the IEEE MSIT website.";
      }

      return (
        "Here are the upcoming events listed on the website:\n\n" +
        upcoming
          .map(
            (e) =>
              `- **${e.title}** (${e.type})\n  * Date: ${e.startDate}\n  * Venue: ${e.venue}\n  * Organised by: ${e.organisedBy || 'IEEE MSIT'}`
          )
          .join('\n\n')
      );
    } else {
      return (
        "Here are the events listed on the IEEE MSIT website:\n\n" +
        events
          .map(
            (e) =>
              `- **${e.title}** (${e.type})\n  * Date: ${e.startDate}\n  * Venue: ${e.venue}\n  * Organised by: ${e.organisedBy || 'IEEE MSIT'}\n  * Status: ${e.status || 'completed'}`
          )
          .join('\n\n')
      );
    }
  }

  if (!apiKey) {
    if (isDev) {
      console.error('VITE_GEMINI_API_KEY is not defined in the environment.');
    }
    throw new Error('API_KEY_MISSING');
  }

  const endpointPrimary = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const endpointFallback = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  // Prepend knowledge base instructions to the first message in the stream
  const apiContents = chatHistory.map((msg, index) => {
    if (index === 0 && msg.role === 'user') {
      return {
        role: 'user',
        parts: [
          {
            text: `${systemInstructionText}\n\nUser Question:\n${msg.parts[0].text}`,
          },
        ],
      };
    }
    return msg;
  });

  const fetchParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: apiContents,
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 2048,
      },
    }),
  };

  let response: Response;
  let responseText = '';

  try {
    response = await fetch(endpointPrimary, fetchParams);

    // If primary returns transient errors (429, 500, 502, 503, 504), retry with the fallback model
    if (
      response.status === 429 ||
      response.status === 500 ||
      response.status === 502 ||
      response.status === 503 ||
      response.status === 504
    ) {
      if (isDev) {
        console.warn(`Primary model failed with status ${response.status}. Retrying with fallback model...`);
      }
      response = await fetch(endpointFallback, fetchParams);
    }
  } catch (err: unknown) {
    if (isDev) {
      console.error('Network request failed for primary model. Trying fallback...', err);
    }
    try {
      response = await fetch(endpointFallback, fetchParams);
    } catch (fallbackErr: unknown) {
      if (isDev) {
        console.error('Fallback model also encountered a network error:', fallbackErr);
      }
      throw new Error('NETWORK_ERROR');
    }
  }

  if (!response.ok) {
    if (isDev) {
      try {
        responseText = await response.text();
        console.error(`Gemini API returned HTTP status ${response.status}:`, responseText);
      } catch {
        console.error(`Gemini API returned HTTP status ${response.status}`);
      }
    }
    throw new Error('API_RESPONSE_ERROR');
  }

  let data: GeminiResponse;
  try {
    data = await response.json() as GeminiResponse;
  } catch (jsonErr: unknown) {
    if (isDev) {
      console.error('Failed to parse Gemini API JSON response:', jsonErr);
    }
    throw new Error('JSON_PARSE_ERROR');
  }

  if (isDev) {
    console.log('Raw Gemini response payload:', data);
  }

  if (data.error) {
    if (isDev) {
      console.error('Gemini API returned structured error:', data.error);
    }
    throw new Error('API_RESPONSE_ERROR');
  }

  const candidate = data.candidates?.[0];
  const parts = candidate?.content?.parts;
  
  if (!parts || parts.length === 0) {
    if (isDev) {
      console.error('Response structure was valid but lacked content parts:', data);
    }
    throw new Error('EMPTY_RESPONSE');
  }

  // Combine all text parts from the response
  let generatedText = parts
    .map((p) => p.text || '')
    .join('')
    .trim();

  if (!generatedText) {
    throw new Error('EMPTY_RESPONSE');
  }

  // Fallback handling for partial/truncated responses
  const finishReason = candidate?.finishReason;
  if (finishReason && finishReason !== 'STOP') {
    if (isDev) {
      console.warn(`Gemini response indicates partial execution. FinishReason: ${finishReason}`);
    }
    
    // Ensure markdown tags are correctly paired/closed
    const codeBlockCount = (generatedText.match(/```/g) || []).length;
    if (codeBlockCount % 2 !== 0) {
      generatedText += '\n```';
    }
    const boldCount = (generatedText.match(/\*\*/g) || []).length;
    if (boldCount % 2 !== 0) {
      generatedText += '**';
    }

    if (!generatedText.endsWith('.') && !generatedText.endsWith('!') && !generatedText.endsWith('?')) {
      generatedText += '... [Response truncated]';
    } else {
      generatedText += ' [Response truncated]';
    }
  }

  if (isDev) {
    console.log(`Verified Gemini response length: ${generatedText.length} characters`);
  }

  return generatedText;
}
