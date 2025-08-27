// Hackathon Winner Type
export interface HackathonWinner {
  team: string;
  place: string;
  project: string;
  prize: string;
  members: string[];
  projectLink?: string; // Optional project link
}

// Hackathon Type
export interface Hackathon {
  name: string;
  platform: string;
  platformLink: string;
  tagline: string;
  duration: string;
  date: string;
  location: string;
  prize: string;
  participants: string;
  winners: HackathonWinner[];
}

// Event Type
export interface Event {
  date: {
    month: string;
    day: string;
    year: string;
  };
  title: string;
  description: string;
  category: string;
  time: string;
  location: string;
  society: string;
  prize: string;
  buttonText: string;
  featured?: boolean;
}
