export interface Event {
  _id: {
    $oid: string;
  };
  title: string;
  type: EventTypeType;
  category: EventCategoryType | null;
  status: EventStatusType;
  startDate: string | null;
  endDate: string | null;
  venue: string | null;
  registrationType: RegistrationTypeType | null;
  actionLinks: string[] | null;
  prizes: string[] | null;
  description: string;
  isRelevant: boolean;
  post_date: string;
  cloudinary_url: string;
  organisedBy?: string | string[];
}

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
  PITCH_COMPETITION: 'pitch competition',
  AWARD_CEREMONY: 'award ceremonies',
  MENTORSHIP_SESSION: 'mentorship session',
  NETWORKING: 'networking',
  TECH_TALK: 'tech_talk',
  WEBINAR: 'webinar',
} as const;

export type EventTypeType = (typeof EventType)[keyof typeof EventType] | string;

export const EventCategory = {
  ARTIFICIAL_INTELLIGENCE: 'ai',
  MACHINE_LEARNING: 'ml',
  WEB_DEVELOPMENT: 'web_dev',
  CYBERSECURITY: 'cybersecurity',
  OPEN_SOURCE: 'open-source',
  SUSTAINABILITY: 'sustainability',
  DSA: 'dsa',
  IOT: 'iot',
  ROBOTICS: 'robotics',
} as const;

export type EventCategoryType = (typeof EventCategory)[keyof typeof EventCategory] | string;

export const RegistrationType = {
  FREE: 'free',
  PAID: 'paid',
} as const;

export type RegistrationTypeType =
  | (typeof RegistrationType)[keyof typeof RegistrationType]
  | string;
