import type { Member } from '../../components/ui/MemberCard';
import type { Event } from '../../types';

export interface Chapter {
  name: string;
  shortName: string;
  path: string;
  logo: string;
  theme: string;
  mission: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  textColor: string;
  members: Member[];
  events: Event[];
  achievements: string[];
}

export default Chapter;
