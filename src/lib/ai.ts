import Groq from 'groq-sdk';
import { events } from '../data/events';
import { execom2026 } from '../data/execom2026';

const fmtMember = (m: { name: string; position: string; linkedin?: string }) =>
  `- **${m.name}**: ${m.position}${m.linkedin && m.linkedin !== '#' ? ` ([LinkedIn](${m.linkedin}))` : ''}`;

const fmtExecom = (data: typeof execom2026) =>
  Object.entries(data)
    .map(([section, groups]) =>
      Object.entries(groups)
        .map(([name, members]) => `#### ${name} (${section})\n${members.map(fmtMember).join('\n')}`)
        .join('\n\n')
    )
    .join('\n\n');

const execom2026Summary = fmtExecom(execom2026);

const systemInstructionText = `You are the IEEE MSIT Website Assistant.

ABOUT IEEE MSIT: A student branch of IEEE at Maharaja Surajmal Institute of Technology, New Delhi. Organizes workshops, seminars, competitions, and projects for technical growth.

KEY FACTS:
- Website: https://ieeemsit-ochre.vercel.app
- Faculty Advisor: anupama@msit.in
- Awards: IEEE Region 10 Special Recognition Award 2023, Gold in Darrel Chong Award 2023-24

EXECOM 2026:
${execom2026Summary}

RULES:
1. Answer ONLY from the data above. If not found, say: "I'm not aware of that yet, but I'll try to increase my knowledge from the available data!"
2. Never guess dates, members, or facts.
3. Current date: June 25, 2026.
4. For questions about the Chairperson 2026, the answer is Mehak Singh.`;

export interface Message {
  role: 'user' | 'model';
  parts: { text: string }[];
}

let groqClient: Groq | null = null;

function getGroqClient(): Groq {
  if (!groqClient) {
    const apiKey = import.meta.env.VITE_GROQ_API_KEY;
    if (!apiKey) {
      throw new Error('API_KEY_MISSING');
    }
    groqClient = new Groq({ apiKey, dangerouslyAllowBrowser: true });
  }
  return groqClient;
}

const debug = import.meta.env.DEV ? console.log.bind(console, '[AI]') : () => {};

export async function askAI(chatHistory: Message[]): Promise<string> {
  const lastUserMessage = chatHistory[chatHistory.length - 1];
  const query = lastUserMessage?.parts[0]?.text || '';
  const queryLower = query.toLowerCase();

  const fmtEvent = (e: (typeof events)[0], extra?: string) =>
    `- **${e.title}** (${e.type})\n  * Date: ${e.startDate}\n  * Venue: ${e.venue}\n  * Organised by: ${e.organisedBy || 'IEEE MSIT'}${extra || ''}`;

  if (
    queryLower.includes('event') ||
    queryLower.includes('workshop') ||
    queryLower.includes('hackathon') ||
    queryLower.includes('seminar') ||
    queryLower.includes('webinar')
  ) {
    if (
      queryLower.includes('upcoming') ||
      queryLower.includes('future') ||
      queryLower.includes('next') ||
      queryLower.includes('coming')
    ) {
      const upcoming = events.filter((e) => {
        if (!e.startDate) return false;
        const dateStr = e.startDate.replace(/(\d+)(st|nd|rd|th)/, '$1');
        const eventDate = new Date(dateStr);
        return !isNaN(eventDate.getTime()) && eventDate >= new Date('2026-06-25');
      });

      if (!upcoming.length)
        return 'There are currently no upcoming events listed on the IEEE MSIT website.';

      return (
        'Here are the upcoming events listed on the website:\n\n' +
        upcoming.map((e) => fmtEvent(e)).join('\n\n')
      );
    }

    return (
      'Here are the events listed on the IEEE MSIT website:\n\n' +
      events.map((e) => fmtEvent(e, `\n  * Status: ${e.status || 'completed'}`)).join('\n\n')
    );
  }

  let client: Groq;
  try {
    client = getGroqClient();
  } catch {
    throw new Error('API_KEY_MISSING');
  }

  const groqMessages: { role: 'system' | 'user' | 'assistant'; content: string }[] = [
    { role: 'system', content: systemInstructionText },
    ...chatHistory.map((msg) => ({
      role: (msg.role === 'model' ? 'assistant' : 'user') as 'user' | 'assistant',
      content: msg.parts[0].text,
    })),
  ];

  const models = ['llama-3.3-70b-versatile', 'mixtral-8x7b-32768'];
  let lastError: unknown;
  let completion: Awaited<ReturnType<typeof client.chat.completions.create>>;

  for (const model of models) {
    try {
      completion = await client.chat.completions.create({
        model,
        messages: groqMessages,
        temperature: 0.1,
        max_tokens: 2048,
      });
      lastError = null;
      break;
    } catch (err: unknown) {
      lastError = err;
      debug(`Model ${model} failed:`, err instanceof Error ? err.message : err);
      if (!(err instanceof Error && err.message.includes('rate_limit'))) break;
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  if (lastError) throw new Error('API_RESPONSE_ERROR');

  const content = completion!.choices?.[0]?.message?.content;

  if (!content?.trim()) {
    debug('Response was valid but lacked content:', completion);
    throw new Error('EMPTY_RESPONSE');
  }

  let generatedText = content.trim();

  const finishReason = completion!.choices?.[0]?.finish_reason;
  if (finishReason && finishReason !== 'stop') {
    const codeBlockCount = (generatedText.match(/```/g) || []).length;
    if (codeBlockCount % 2 !== 0) generatedText += '\n```';
    const boldCount = (generatedText.match(/\*\*/g) || []).length;
    if (boldCount % 2 !== 0) generatedText += '**';

    generatedText += generatedText.match(/[.!?]$/)
      ? ' [Response truncated]'
      : '... [Response truncated]';
  }

  return generatedText;
}
