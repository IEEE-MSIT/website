export const EventStatus = {
  UPCOMING: 'upcoming',
  ONGOING: 'ongoing',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
  POSTPONED: 'postponed',
} as const;

export type EventStatusType = (typeof EventStatus)[keyof typeof EventStatus] | string;

export const EventType = {
  WORKSHOP: 'workshop',
  HACKATHON: 'hackathon',
  SEMINAR: 'seminar',
  CONFERENCE: 'conference',
  COMPETITION: 'competition',
  NETWORKING: 'networking',
  TECH_TALK: 'tech_talk',
  WEBINAR: 'webinar',
  CAREER_FAIR: 'career_fair',
  PROJECT_SHOWCASE: 'project_showcase',
  STUDY_GROUP: 'study_group',
  SOCIAL: 'social',
  BOOTCAMP: 'bootcamp',
  MEETUP: 'meetup',
  PANEL_DISCUSSION: 'panel_discussion',
  DEMO_DAY: 'demo_day',
} as const;

export type EventTypeType = (typeof EventType)[keyof typeof EventType] | string;

export const EventCategory = {
  ARTIFICIAL_INTELLIGENCE: 'ai',
  MACHINE_LEARNING: 'ml',
  WEB_DEVELOPMENT: 'web_dev',
  MOBILE_DEVELOPMENT: 'mobile_dev',
  DATA_SCIENCE: 'data_science',
  CYBERSECURITY: 'cybersecurity',
  BLOCKCHAIN: 'blockchain',
  IOT: 'iot',
  ROBOTICS: 'robotics',
  CLOUD_COMPUTING: 'cloud',
  DEVOPS: 'devops',
  UI_UX: 'ui_ux',
  GAME_DEVELOPMENT: 'game_dev',
  ENTREPRENEURSHIP: 'entrepreneurship',
  CAREER_DEVELOPMENT: 'career',
  RESEARCH: 'research',
  HARDWARE: 'hardware',
  SOFTWARE_ENGINEERING: 'software_eng',
  QUANTUM_COMPUTING: 'quantum',
  AUGMENTED_REALITY: 'ar',
  VIRTUAL_REALITY: 'vr',
  SUSTAINABILITY: 'sustainability',
  GENERAL: 'general',
} as const;

export type EventCategoryType = (typeof EventCategory)[keyof typeof EventCategory] | string;

export const RegistrationType = {
  FREE: 'free',
  PAID: 'paid',
  MEMBERS_ONLY: 'members_only',
  INVITE_ONLY: 'invite_only',
  CLOSED: 'closed',
  DONATION_BASED: 'donation_based',
  SCHOLARSHIP_AVAILABLE: 'scholarship_available',
} as const;

export type RegistrationTypeType =
  | (typeof RegistrationType)[keyof typeof RegistrationType]
  | string;

export const EventMode = {
  ONLINE: 'online',
  OFFLINE: 'offline',
  HYBRID: 'hybrid',
  SELF_PACED: 'self_paced',
  RECORDED: 'recorded',
} as const;

export type EventModeType = (typeof EventMode)[keyof typeof EventMode] | string;

export const DifficultyLevel = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  ALL_LEVELS: 'all_levels',
  EXPERT: 'expert',
} as const;

export type DifficultyLevelType = (typeof DifficultyLevel)[keyof typeof DifficultyLevel] | string;

export interface Organizer {
  id: string;
  name: string;
  role: string;
  organization: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
  bio?: string;
  avatar?: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  expertise: string[];
  avatar?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  talkTitle?: string;
  talkDescription?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
  tier: 'title' | 'platinum' | 'gold' | 'silver' | 'bronze' | 'community';
  description?: string;
}

export interface Prize {
  position: string; // '1st', '2nd', '3rd', 'Best UI/UX', etc.
  title: string;
  amount?: string;
  description?: string;
  sponsor?: string;
}

export interface Winner {
  id: string;
  teamName?: string;
  members: string[];
  position: string;
  project?: {
    name: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    presentationLink?: string;
  };
  prize?: Prize;
}

export interface Registration {
  type: RegistrationTypeType;
  fee?: string;
  currency?: string;
  maxParticipants?: number;
  currentParticipants?: number;
  deadline: string; // ISO date string
  requirements?: string[];
  eligibility?: string[];
  registrationLink?: string;
  waitlistAvailable?: boolean;
}

// Location Information
export interface Location {
  mode: EventModeType;
  venue?: {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    directions?: string;
    parking?: string;
  };
  onlineDetails?: {
    platform: string; // Zoom, Teams, Meet, etc.
    link?: string;
    meetingId?: string;
    password?: string;
  };
}

// Schedule Item
export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  speaker?: Speaker;
  type: 'session' | 'break' | 'networking' | 'presentation' | 'workshop';
  duration: number; // in minutes
}

export interface EventMedia {
  coverImage: string;
  gallery?: string[];
  videos?: string[];
  livestreamLink?: string;
  recordingLink?: string;
}

export interface SocialLinks {
  website?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  facebook?: string;
  discord?: string;
  telegram?: string;
  whatsapp?: string;
}

// Enhanced Call to Action with auto-extracted links and actions
export interface CTA {
  primary: {
    text: string;
    action:
      | 'register'
      | 'learn_more'
      | 'view_results'
      | 'watch_recording'
      | 'join_waitlist'
      | 'contact'
      | 'join_live'
      | 'download'
      | string;
    link?: string; // Auto-extracted from image/content
    externalLink?: boolean;
    disabled?: boolean;
    // AI-extracted action data
    extractedData?: {
      registrationLink?: string;
      formLink?: string;
      websiteLink?: string;
      socialLink?: string;
      downloadLink?: string;
      liveStreamLink?: string;
      zoomLink?: string;
      meetingDetails?: {
        platform?: string;
        meetingId?: string;
        password?: string;
        link?: string;
      };
      contactInfo?: {
        email?: string;
        phone?: string;
        whatsapp?: string;
      };
    };
  };
  secondary?: {
    text: string;
    action:
      | 'calendar'
      | 'share'
      | 'remind_me'
      | 'download'
      | 'view_gallery'
      | 'learn_more'
      | 'contact'
      | 'bookmark'
      | string;
    link?: string;
    externalLink?: boolean;
    disabled?: boolean;
    extractedData?: {
      calendarData?: {
        title: string;
        startDate: string;
        endDate: string;
        location: string;
        description: string;
      };
      shareData?: {
        title: string;
        description: string;
        url: string;
        image?: string;
      };
    };
  };
}

// Main Event Interface
export interface Event {
  // Basic Information
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  shortDescription?: string; // For cards/previews

  // Classification (AI can use any values, not restricted to enums)
  type: EventTypeType;
  category: EventCategoryType;
  status: EventStatusType;
  difficulty?: DifficultyLevelType; // Optional - AI can skip if not relevant

  // Timing
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  timezone: string;
  duration?: number; // in hours
  schedule?: ScheduleItem[];

  // Location & Mode
  location: Location;

  // People
  organizers: Organizer[];
  speakers?: Speaker[];
  mentors?: Speaker[]; // For hackathons

  // Registration & Participation
  registration: Registration;
  prerequisites?: string[];
  targetAudience?: string[];

  // Content & Resources
  agenda?: string[];
  learningOutcomes?: string[];
  technologies?: string[];
  tools?: string[];
  resources?: {
    name: string;
    link: string;
    type: 'slides' | 'code' | 'documentation' | 'video' | 'article';
  }[];

  // Competition/Hackathon Specific
  prizes?: Prize[];
  winners?: Winner[];
  themes?: string[];
  judgingCriteria?: string[];
  rules?: string[];

  // Marketing & Media
  media: EventMedia;
  tags: string[];
  featured?: boolean;
  trending?: boolean;

  // External Links
  socialLinks?: SocialLinks;
  sponsors?: Sponsor[];
  partners?: Sponsor[];

  // Dynamic CTA (generated based on status and type)
  cta: CTA;

  // Meta Information
  createdAt: string;
  updatedAt: string;
  createdBy: string;

  // Analytics & Engagement
  views?: number;
  registrations?: number;
  attendance?: number;
  rating?: number;
  feedback?: {
    rating: number;
    comment: string;
    anonymous: boolean;
  }[];

  // SEO & Discoverability
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };

  // Additional Metadata (for LLM parsing)
  sourceImage?: string; // Original image URL if parsed from image
  parsedData?: {
    confidence: number;
    extractedFields: string[];
    needsReview: boolean;
  };
}
