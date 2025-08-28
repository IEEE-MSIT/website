import {
  Event,
  EventType,
  EventCategory,
  EventStatus,
  RegistrationType,
  EventMode,
  DifficultyLevel,
} from '../types';

export interface ExtractableEventData {
  title?: string;
  subtitle?: string;
  description?: string;
  shortDescription?: string;

  type?: string;
  category?: string;
  status?: string;
  difficulty?: string;

  startDate?: string;
  endDate?: string;
  date?: string;
  time?: string;
  duration?: string;
  timezone?: string;

  venue?: string;
  address?: string;
  city?: string;
  state?: string;
  location?: string;
  mode?: string;
  platform?: string;

  registrationType?: string;
  registrationFee?: string;
  registrationDeadline?: string;
  registrationLink?: string;
  maxParticipants?: string | number;
  eligibility?: string[];
  requirements?: string[];

  actionLinks?: {
    register?: string;
    website?: string;
    social?: { [platform: string]: string };
    contact?: {
      email?: string;
      phone?: string;
      whatsapp?: string;
    };
    download?: string;
    calendar?: string;
    livestream?: string;
    zoom?: {
      link?: string;
      meetingId?: string;
      password?: string;
    };
  };

  speakers?: string[];
  mentors?: string[];
  organizers?: string[];
  sponsors?: string[];
  topics?: string[];
  technologies?: string[];
  agenda?: string[];

  prizes?: string[];
  themes?: string[];
  judgingCriteria?: string[];
  rules?: string[];

  additionalInfo?: string[];
  extractedText?: string;
  qrCodes?: string[];
  hashtags?: string[];

  aiMetadata?: {
    confidence: number;
    extractedFields: string[];
    uncertainFields: string[];
    needsReview: boolean;
    imageQuality?: 'low' | 'medium' | 'high';
    textClarity?: 'poor' | 'good' | 'excellent';
  };
}

export const mapEventType = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  const typeMap: { [key: string]: string } = {
    workshop: EventType.WORKSHOP,
    hackathon: EventType.HACKATHON,
    hack: EventType.HACKATHON,
    'coding competition': EventType.HACKATHON,
    seminar: EventType.SEMINAR,
    conference: EventType.CONFERENCE,
    competition: EventType.COMPETITION,
    contest: EventType.COMPETITION,
    networking: EventType.NETWORKING,
    'tech talk': EventType.TECH_TALK,
    talk: EventType.TECH_TALK,
    webinar: EventType.WEBINAR,
    'online workshop': EventType.WEBINAR,
    'career fair': EventType.CAREER_FAIR,
    'job fair': EventType.CAREER_FAIR,
    'project showcase': EventType.PROJECT_SHOWCASE,
    'demo day': EventType.PROJECT_SHOWCASE,
    'study group': EventType.STUDY_GROUP,
    meetup: EventType.MEETUP,
    social: EventType.SOCIAL,
    party: EventType.SOCIAL,
    bootcamp: EventType.BOOTCAMP,
    'panel discussion': EventType.PANEL_DISCUSSION,
    panel: EventType.PANEL_DISCUSSION,
  };

  return typeMap[normalized] || input;
};

export const mapEventCategory = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  // Common mappings - AI can use these or create custom categories
  const categoryMap: { [key: string]: string } = {
    ai: EventCategory.ARTIFICIAL_INTELLIGENCE,
    'artificial intelligence': EventCategory.ARTIFICIAL_INTELLIGENCE,
    'machine learning': EventCategory.MACHINE_LEARNING,
    ml: EventCategory.MACHINE_LEARNING,
    'deep learning': EventCategory.MACHINE_LEARNING,
    'web development': EventCategory.WEB_DEVELOPMENT,
    'web dev': EventCategory.WEB_DEVELOPMENT,
    frontend: EventCategory.WEB_DEVELOPMENT,
    backend: EventCategory.WEB_DEVELOPMENT,
    fullstack: EventCategory.WEB_DEVELOPMENT,
    'mobile development': EventCategory.MOBILE_DEVELOPMENT,
    'mobile dev': EventCategory.MOBILE_DEVELOPMENT,
    android: EventCategory.MOBILE_DEVELOPMENT,
    ios: EventCategory.MOBILE_DEVELOPMENT,
    flutter: EventCategory.MOBILE_DEVELOPMENT,
    'react native': EventCategory.MOBILE_DEVELOPMENT,
    'data science': EventCategory.DATA_SCIENCE,
    'data analysis': EventCategory.DATA_SCIENCE,
    analytics: EventCategory.DATA_SCIENCE,
    cybersecurity: EventCategory.CYBERSECURITY,
    security: EventCategory.CYBERSECURITY,
    'ethical hacking': EventCategory.CYBERSECURITY,
    blockchain: EventCategory.BLOCKCHAIN,
    crypto: EventCategory.BLOCKCHAIN,
    web3: EventCategory.BLOCKCHAIN,
    iot: EventCategory.IOT,
    'internet of things': EventCategory.IOT,
    robotics: EventCategory.ROBOTICS,
    cloud: EventCategory.CLOUD_COMPUTING,
    'cloud computing': EventCategory.CLOUD_COMPUTING,
    aws: EventCategory.CLOUD_COMPUTING,
    azure: EventCategory.CLOUD_COMPUTING,
    devops: EventCategory.DEVOPS,
    'ui/ux': EventCategory.UI_UX,
    design: EventCategory.UI_UX,
    'user experience': EventCategory.UI_UX,
    'game development': EventCategory.GAME_DEVELOPMENT,
    gaming: EventCategory.GAME_DEVELOPMENT,
    unity: EventCategory.GAME_DEVELOPMENT,
    entrepreneurship: EventCategory.ENTREPRENEURSHIP,
    startup: EventCategory.ENTREPRENEURSHIP,
    business: EventCategory.ENTREPRENEURSHIP,
    career: EventCategory.CAREER_DEVELOPMENT,
    interview: EventCategory.CAREER_DEVELOPMENT,
    resume: EventCategory.CAREER_DEVELOPMENT,
    research: EventCategory.RESEARCH,
    academic: EventCategory.RESEARCH,
    hardware: EventCategory.HARDWARE,
    embedded: EventCategory.HARDWARE,
    'software engineering': EventCategory.SOFTWARE_ENGINEERING,
    programming: EventCategory.SOFTWARE_ENGINEERING,
    'quantum computing': EventCategory.QUANTUM_COMPUTING,
    quantum: EventCategory.QUANTUM_COMPUTING,
    ar: EventCategory.AUGMENTED_REALITY,
    'augmented reality': EventCategory.AUGMENTED_REALITY,
    vr: EventCategory.VIRTUAL_REALITY,
    'virtual reality': EventCategory.VIRTUAL_REALITY,
    sustainability: EventCategory.SUSTAINABILITY,
    'green tech': EventCategory.SUSTAINABILITY,
    environment: EventCategory.SUSTAINABILITY,
  };

  // Return mapped value or original input (allowing AI flexibility)
  return categoryMap[normalized] || input;
};

export const mapEventStatus = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  // Common mappings - AI can use these or create custom statuses
  const statusMap: { [key: string]: string } = {
    upcoming: EventStatus.UPCOMING,
    'coming soon': EventStatus.UPCOMING,
    future: EventStatus.UPCOMING,
    'registration open': EventStatus.UPCOMING,
    ongoing: EventStatus.ONGOING,
    live: EventStatus.ONGOING,
    'happening now': EventStatus.ONGOING,
    'in progress': EventStatus.ONGOING,
    completed: EventStatus.COMPLETED,
    finished: EventStatus.COMPLETED,
    ended: EventStatus.COMPLETED,
    past: EventStatus.COMPLETED,
    cancelled: EventStatus.CANCELLED,
    canceled: EventStatus.CANCELLED,
    postponed: EventStatus.POSTPONED,
    delayed: EventStatus.POSTPONED,
    rescheduled: EventStatus.POSTPONED,
  };

  // Return mapped value or original input (allowing AI flexibility)
  return statusMap[normalized] || input;
};

export const mapRegistrationType = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  // Common mappings - AI can use these or create custom types
  if (
    normalized.includes('free') ||
    normalized.includes('no cost') ||
    normalized.includes('complimentary')
  ) {
    return RegistrationType.FREE;
  }
  if (
    normalized.includes('paid') ||
    normalized.includes('fee') ||
    normalized.includes('₹') ||
    normalized.includes('$')
  ) {
    return RegistrationType.PAID;
  }
  if (normalized.includes('member') || normalized.includes('ieee only')) {
    return RegistrationType.MEMBERS_ONLY;
  }
  if (normalized.includes('invite') || normalized.includes('invitation')) {
    return RegistrationType.INVITE_ONLY;
  }
  if (normalized.includes('donation') || normalized.includes('pay what you can')) {
    return RegistrationType.DONATION_BASED;
  }
  if (normalized.includes('scholarship') || normalized.includes('financial aid')) {
    return RegistrationType.SCHOLARSHIP_AVAILABLE;
  }

  // Return original input if no common pattern matches (allowing AI flexibility)
  return input;
};

export const mapEventMode = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  // Common mappings - AI can use these or create custom modes
  if (
    normalized.includes('online') ||
    normalized.includes('virtual') ||
    normalized.includes('remote')
  ) {
    return EventMode.ONLINE;
  }
  if (
    normalized.includes('offline') ||
    normalized.includes('in-person') ||
    normalized.includes('physical')
  ) {
    return EventMode.OFFLINE;
  }
  if (normalized.includes('hybrid') || normalized.includes('both')) {
    return EventMode.HYBRID;
  }
  if (normalized.includes('self-paced') || normalized.includes('asynchronous')) {
    return EventMode.SELF_PACED;
  }
  if (normalized.includes('recorded') || normalized.includes('on-demand')) {
    return EventMode.RECORDED;
  }

  // Return original input if no common pattern matches (allowing AI flexibility)
  return input;
};

export const mapDifficultyLevel = (input: string): string => {
  const normalized = input.toLowerCase().trim();

  // Common mappings - AI can use these or create custom levels
  if (
    normalized.includes('beginner') ||
    normalized.includes('basic') ||
    normalized.includes('intro')
  ) {
    return DifficultyLevel.BEGINNER;
  }
  if (normalized.includes('intermediate') || normalized.includes('medium')) {
    return DifficultyLevel.INTERMEDIATE;
  }
  if (
    normalized.includes('advanced') ||
    normalized.includes('expert') ||
    normalized.includes('professional')
  ) {
    return DifficultyLevel.ADVANCED;
  }
  if (normalized.includes('all levels') || normalized.includes('everyone')) {
    return DifficultyLevel.ALL_LEVELS;
  }
  if (normalized.includes('expert') || normalized.includes('master')) {
    return DifficultyLevel.EXPERT;
  }

  // Return original input if no common pattern matches (allowing AI flexibility)
  return input;
};

/**
 * Parse date strings in various formats to ISO format
 */
export const parseEventDate = (dateStr: string, timeStr?: string): string => {
  try {
    // Common date formats to handle
    const dateFormats = [
      /(\d{1,2})\/(\d{1,2})\/(\d{4})/, // MM/DD/YYYY or DD/MM/YYYY
      /(\d{1,2})-(\d{1,2})-(\d{4})/, // MM-DD-YYYY or DD-MM-YYYY
      /(\d{4})-(\d{1,2})-(\d{1,2})/, // YYYY-MM-DD
      /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i, // DD Month YYYY
      /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{1,2}),?\s+(\d{4})/i, // Month DD, YYYY
    ];

    let parsedDate = new Date(dateStr);

    if (isNaN(parsedDate.getTime())) {
      // Try to parse manually if direct parsing fails
      for (const format of dateFormats) {
        const match = dateStr.match(format);
        if (match) {
          // Handle different format matches
          parsedDate = new Date(dateStr); // Simplified for now
          break;
        }
      }
    }

    // Add time if provided
    if (timeStr && !isNaN(parsedDate.getTime())) {
      const timeMatch = timeStr.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
      if (timeMatch) {
        let hours = parseInt(timeMatch[1]);
        const minutes = parseInt(timeMatch[2]);
        const ampm = timeMatch[3]?.toUpperCase();

        if (ampm === 'PM' && hours !== 12) hours += 12;
        if (ampm === 'AM' && hours === 12) hours = 0;

        parsedDate.setHours(hours, minutes, 0, 0);
      }
    }

    return parsedDate.toISOString();
  } catch (error) {
    console.error('Error parsing date:', error);
    return new Date().toISOString(); // Fallback to current date
  }
};

/**
 * Extract and parse prize information
 */
export const parsePrizes = (
  prizeText: string[]
): { position: string; title: string; amount?: string }[] => {
  const prizes: { position: string; title: string; amount?: string }[] = [];

  prizeText.forEach((text) => {
    const normalized = text.toLowerCase();

    // Common prize patterns
    if (normalized.includes('1st') || normalized.includes('first')) {
      prizes.push({ position: '1st', title: 'First Prize', amount: extractAmount(text) });
    } else if (normalized.includes('2nd') || normalized.includes('second')) {
      prizes.push({ position: '2nd', title: 'Second Prize', amount: extractAmount(text) });
    } else if (normalized.includes('3rd') || normalized.includes('third')) {
      prizes.push({ position: '3rd', title: 'Third Prize', amount: extractAmount(text) });
    } else if (normalized.includes('winner')) {
      prizes.push({ position: 'Winner', title: 'Prize', amount: extractAmount(text) });
    }
  });

  return prizes;
};

const extractAmount = (text: string): string | undefined => {
  const amountMatch = text.match(/(₹|Rs\.?|INR|\$)\s*([0-9,]+)/);
  return amountMatch ? amountMatch[0] : undefined;
};

export const convertExtractedToEvent = (extracted: ExtractableEventData): Partial<Event> => {
  const eventId = `event-${Date.now()}`;

  return {
    id: eventId,
    title: extracted.title || 'Untitled Event',
    subtitle: extracted.subtitle,
    description: extracted.description || 'No description available',
    shortDescription: extracted.shortDescription || extracted.description?.substring(0, 100),

    type: extracted.type ? mapEventType(extracted.type) : EventType.WORKSHOP,
    category: extracted.category ? mapEventCategory(extracted.category) : EventCategory.GENERAL,
    status: extracted.status ? mapEventStatus(extracted.status) : EventStatus.UPCOMING,
    difficulty: extracted.difficulty ? mapDifficultyLevel(extracted.difficulty) : undefined,

    startDate: extracted.startDate
      ? parseEventDate(extracted.startDate, extracted.time)
      : extracted.date
        ? parseEventDate(extracted.date, extracted.time)
        : new Date().toISOString(),
    endDate: extracted.endDate
      ? parseEventDate(extracted.endDate)
      : extracted.startDate
        ? parseEventDate(extracted.startDate, extracted.time)
        : new Date().toISOString(),
    timezone: extracted.timezone || 'Asia/Kolkata',

    location: {
      mode: extracted.mode
        ? mapEventMode(extracted.mode)
        : extracted.platform
          ? EventMode.ONLINE
          : EventMode.OFFLINE,
      venue:
        extracted.venue || extracted.address
          ? {
              name: extracted.venue || 'Venue TBD',
              address: extracted.address || '',
              city: extracted.city || '',
              state: extracted.state || '',
              country: 'India',
            }
          : undefined,
      onlineDetails:
        extracted.platform || extracted.actionLinks?.zoom
          ? {
              platform: extracted.platform || 'Online Platform',
              link: extracted.actionLinks?.zoom?.link || extracted.actionLinks?.livestream,
              meetingId: extracted.actionLinks?.zoom?.meetingId,
              password: extracted.actionLinks?.zoom?.password,
            }
          : undefined,
    },

    organizers: extracted.organizers?.map((org, index) => ({
      id: `org-${index}`,
      name: org,
      role: 'Organizer',
      organization: org,
      email: extracted.actionLinks?.contact?.email,
    })) || [
      {
        id: 'default-org',
        name: 'IEEE MSIT',
        role: 'Host',
        organization: 'IEEE MSIT',
        email: extracted.actionLinks?.contact?.email,
      },
    ],

    registration: {
      type: extracted.registrationType
        ? mapRegistrationType(extracted.registrationType)
        : RegistrationType.FREE,
      fee: extracted.registrationFee,
      deadline: extracted.registrationDeadline
        ? parseEventDate(extracted.registrationDeadline)
        : new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // Default: 1 week from now
      registrationLink: extracted.registrationLink || extracted.actionLinks?.register,
      maxParticipants:
        typeof extracted.maxParticipants === 'string'
          ? parseInt(extracted.maxParticipants)
          : extracted.maxParticipants,
      requirements: extracted.requirements,
      eligibility: extracted.eligibility,
    },

    technologies: extracted.technologies,
    agenda: extracted.agenda,
    prizes: extracted.prizes ? parsePrizes(extracted.prizes) : undefined,
    themes: extracted.themes,

    media: {
      coverImage: '/events/default-cover.jpg',
    },

    tags: [
      ...(extracted.topics || []),
      ...(extracted.technologies || []),
      ...(extracted.hashtags || []),
      extracted.type || 'event',
    ].filter(Boolean),

    socialLinks: extracted.actionLinks?.social
      ? {
          website: extracted.actionLinks.website,
          ...extracted.actionLinks.social,
        }
      : extracted.actionLinks?.website
        ? {
            website: extracted.actionLinks.website,
          }
        : undefined,

    cta: {
      primary: {
        text:
          extracted.registrationLink || extracted.actionLinks?.register
            ? extracted.registrationType === 'free'
              ? 'Register Free'
              : 'Register Now'
            : 'Learn More',
        action:
          extracted.registrationLink || extracted.actionLinks?.register ? 'register' : 'learn_more',
        link: extracted.registrationLink || extracted.actionLinks?.register || `#event-${eventId}`,
        externalLink: !!(extracted.registrationLink || extracted.actionLinks?.register),
        extractedData: {
          registrationLink: extracted.registrationLink || extracted.actionLinks?.register,
          formLink: extracted.registrationLink || extracted.actionLinks?.register,
          websiteLink: extracted.actionLinks?.website,
          contactInfo: extracted.actionLinks?.contact,
          meetingDetails: extracted.actionLinks?.zoom
            ? {
                platform: extracted.platform || 'Zoom',
                link: extracted.actionLinks.zoom.link,
                meetingId: extracted.actionLinks.zoom.meetingId,
                password: extracted.actionLinks.zoom.password,
              }
            : undefined,
          liveStreamLink: extracted.actionLinks?.livestream,
        },
      },
      secondary: {
        text: 'Add to Calendar',
        action: 'calendar',
        extractedData: {
          calendarData: {
            title: extracted.title || 'Event',
            startDate: extracted.startDate || extracted.date || new Date().toISOString(),
            endDate:
              extracted.endDate ||
              extracted.startDate ||
              extracted.date ||
              new Date().toISOString(),
            location: extracted.venue || extracted.address || extracted.platform || 'TBD',
            description: extracted.description || 'Event details',
          },
        },
      },
    },

    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: 'llm-parser',

    sourceImage: undefined,
    parsedData: {
      confidence: extracted.aiMetadata?.confidence || 0.8,
      extractedFields:
        extracted.aiMetadata?.extractedFields ||
        Object.keys(extracted).filter(
          (key) => extracted[key as keyof ExtractableEventData] !== undefined
        ),
      needsReview: extracted.aiMetadata?.needsReview ?? true,
    },
  };
};

export const validateEventData = (event: Partial<Event>): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!event.title || event.title.trim().length === 0) {
    errors.push('Title is required');
  }

  if (!event.description || event.description.trim().length === 0) {
    errors.push('Description is required');
  }

  if (!event.startDate) {
    errors.push('Start date is required');
  }

  if (!event.type) {
    errors.push('Event type is required');
  }

  if (!event.location) {
    errors.push('Location information is required');
  }

  if (!event.organizers || event.organizers.length === 0) {
    errors.push('At least one organizer is required');
  }

  if (!event.registration) {
    errors.push('Registration information is required');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
};

export const LLM_EXTRACTION_PROMPT = `
You are an expert at extracting event information from images, flyers, and promotional materials. 

IMPORTANT: You are NOT limited to predefined categories or types. Feel free to create custom event types, categories, and statuses that best describe what you see in the image.

Please analyze the provided image and extract the following information:

## REQUIRED INFORMATION:
- **title**: Event name/title
- **description**: Event description or summary
- **type**: Event type (workshop, hackathon, seminar, conference, bootcamp, tech-meetup, coding-marathon, etc.)
- **date/startDate/endDate**: Date and time information
- **location/venue**: Location details

## CLASSIFICATION (Use any values that fit):
- **category**: Event domain (ai, web-dev, cybersecurity, quantum-computing, sustainability-tech, etc.)
- **status**: Current status (upcoming, registration-open, sold-out, live, completed, etc.)
- **difficulty**: Skill level (optional - only if clearly mentioned)

## AUTO-EXTRACT ALL LINKS AND CONTACT INFO:
- **registrationLink**: Any registration/signup links, QR codes, or form URLs
- **actionLinks**: Object containing:
  - register: Registration/signup links
  - website: Event website or landing page
  - social: Social media links (Instagram, LinkedIn, Twitter, etc.)
  - contact: Email, phone, WhatsApp numbers
  - livestream: Live stream or meeting links
  - zoom: Zoom meeting details (link, ID, password)
  - download: Download links for resources

## OPTIONAL INFORMATION:
- **registrationType**: free, paid, members-only, donation-based, etc.
- **registrationFee**: If paid, extract the amount
- **speakers**: Speaker names and details
- **sponsors**: Sponsoring organizations
- **prizes**: Prize information (extract amounts and categories)
- **technologies**: Tech stack or tools mentioned
- **agenda**: Schedule or agenda items
- **hashtags**: Social media hashtags
- **qrCodes**: Any QR code data or links

## OUTPUT FORMAT:
Return the information in JSON format matching the ExtractableEventData interface.

Example output:
\`\`\`json
{
  "title": "IEEE TechVerse Hackathon 2024",
  "type": "hackathon",
  "category": "artificial-intelligence",
  "status": "registration-open",
  "startDate": "March 15, 2024",
  "endDate": "March 17, 2024",
  "venue": "MSIT Campus",
  "registrationType": "free",
  "actionLinks": {
    "register": "https://forms.gle/abcd1234",
    "website": "https://ieeemsit.com/hackathon",
    "social": {
      "instagram": "@ieeemsit",
      "linkedin": "IEEE MSIT"
    },
    "contact": {
      "email": "ieee@msit.edu.in",
      "whatsapp": "+91 9876543210"
    }
  },
  "prizes": ["₹1 Lakh Grand Prize", "₹50K Runner-up"],
  "hashtags": ["#IEEEHackathon", "#TechVerse2024"],
  "aiMetadata": {
    "confidence": 0.95,
    "extractedFields": ["title", "type", "prizes", "actionLinks"],
    "needsReview": false,
    "imageQuality": "high"
  }
}
\`\`\`

## IMPORTANT GUIDELINES:
1. **Be Creative**: Don't limit yourself to predefined enums - create custom types/categories
2. **Extract ALL Links**: Look for QR codes, URLs, social handles, contact info
3. **Auto-detect Actions**: Determine what the main CTA should be based on the content
4. **Confidence Scoring**: Rate your confidence level (0-1) for each extraction
5. **Flag Uncertainties**: Mark fields you're unsure about in uncertainFields
6. **Image Quality**: Note if image quality affects extraction accuracy

Focus on accuracy and completeness - extract everything visible and useful for event management.
`;

export default {
  mapEventType,
  mapEventCategory,
  mapEventStatus,
  mapRegistrationType,
  mapEventMode,
  mapDifficultyLevel,
  parseEventDate,
  parsePrizes,
  convertExtractedToEvent,
  validateEventData,
  LLM_EXTRACTION_PROMPT,
};
