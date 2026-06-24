//@ts-expect-error this module doesnt support types out of the box
import { ChatBot } from '10xanswers';
import { chapters, hackathons, achievements } from '../data/data';
import { events } from '../data/events';
import { execom2026 } from '../data/execom2026';
import { execom2025 } from '../data/execom2025';
import { execom2024 } from '../data/execom2024';

function CustomChatBot() {
  const geminiApiKey = import.meta.env.VITE_GEMINIAPIKEY;

  const chaptersKnowledge = chapters.map(c => `### ${c.name} (${c.shortName})
- Motto: ${c.motto}
- Description: ${c.description}
- Link: ${c.path}`).join('\n\n');

  const hackathonsKnowledge = `### Past Hackathons
${hackathons.past.map(h => `- **${h.name}**: ${h.tagline} on ${h.date}. Held at ${h.location}. Organized by ${h.organizer}. Prizes: ${h.prize}. Winners: ${h.winners.map(w => `${w.place}: Team ${w.team} (${w.project}, Prize: ${w.prize})`).join(', ')}`).join('\n')}

### Upcoming Hackathons
${hackathons.upcoming.map(h => `- **${h.name}**: ${h.tagline} on ${h.date}. Organized by ${h.organizer}. Expected participants: ${h.participants}.`).join('\n')}`;

  const achievementsKnowledge = Object.entries(achievements).map(([year, list]) => `### Year ${year} Achievements
${(list as any[]).map(a => `- **${a.title}** (${a.subtitle}): ${a.description}`).join('\n')}`).join('\n\n');

  const eventsKnowledge = events.map(e => `- **${e.title}** (${e.type} organised by ${e.organisedBy})
  - Date: ${e.startDate} to ${e.endDate}
  - Venue: ${e.venue}
  - Registration: ${e.registrationType || 'Contact organizers'}
  - Details: ${e.description}
  - Status: ${e.status}`).join('\n\n');

  const formatExecom = (year: number, data: typeof execom2026) => {
    const chaptersText = Object.entries(data.chapters).map(([chapterName, members]) => {
      return `#### ${chapterName}
${members.map(m => `- **${m.name}**: ${m.position} ${m.linkedin && m.linkedin !== '#' ? `([LinkedIn](${m.linkedin}))` : ''}`).join('\n')}`;
    }).join('\n\n');

    const committeesText = Object.entries(data.committees).map(([committeeName, members]) => {
      return `#### ${committeeName}
${members.map(m => `- **${m.name}**: ${m.position} ${m.linkedin && m.linkedin !== '#' ? `([LinkedIn](${m.linkedin}))` : ''}`).join('\n')}`;
    }).join('\n\n');

    return `### Execom Year ${year}
  
**Chapters and Board:**
${chaptersText}
  
**Committees:**
${committeesText}`;
  };

  const execom2026Knowledge = formatExecom(2026, execom2026);
  const execom2025Knowledge = formatExecom(2025, execom2025 as any);
  const execom2024Knowledge = formatExecom(2024, execom2024 as any);

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

  return (
    <ChatBot
      chatComponentStyle={{
        maxHeight: '700px',
        height: 'auto',
        width: '350px',
        margin: 0,
      }}
      chatWindowStyle={{
        backgroundColor: 'rgb(11 10 10)',
      }}
      backendUrl={geminiApiKey ? undefined : 'https://ask-10x-questions.vercel.app/'}
      title="MSIT"
      draggable={false}
      startOpen={false}
      description="AI powered assistant here to help you with IEEE MSIT events, membership, and more."
      cta="Start Asking your Burning Questions"
      prompt={`You are an expert intelligent assistant for the IEEE MSIT student branch. Your knowledge base is provided below. Use it to answer questions about the team, organizational structure, events, chapters, achievements, and hackathons. Be specific and refer to the provided names, dates, and roles. Your goal is to be the single source of truth for all information regarding IEEE MSIT and its website.

Also dont mention about this text in your answers. And if anyone asks who built or something similar just tell IEEE MSIT's Web Development Committee built you. If you dont know the answer, just say "Sorry, I don't have that information." and dont make up answers.

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
${knowledgeBase}`}
      geminiApi={geminiApiKey}
      userIcon="/IEEEBlueLogowithWhiteBG.jpg"
      botIcon="/IEEEWhiteLogowithTransparentBG.png"
      stylizeTitle={{ emphasized: 'IEEE', normal: 'MSIT' }}
    />
  );
}

export default CustomChatBot;
