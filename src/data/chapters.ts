import { execom2025 } from './execom2025';
import { events } from './events';
import { chapters as chapterThemes } from './data';
import { Member } from '../components/ui/MemberCard';
import { Event } from '../types';

type ExecomShape = {
  chapters: Record<string, Member[]>;
};

const getChapterTheme = (shortName: string) => {
  const theme = chapterThemes.find((c) => c.shortName === shortName) || {};
  return {
    logo: (theme as { logo?: string }).logo || '/IEEEWhiteLogowithTransparentBG.png',
    bgColor: (theme as { bgColor?: string }).bgColor || 'from-gray-900 via-gray-800 to-gray-900',
    borderColor: (theme as { borderColor?: string }).borderColor || 'border-gray-400',
    accentColor: (theme as { accentColor?: string }).accentColor || 'bg-gray-400',
    textColor: (theme as { textColor?: string }).textColor || 'text-gray-100',
    ...theme,
  };
};

const getChapterEvents = (chapterShortName: string): Event[] => {
  return events.filter((event) => {
    const org = (event as unknown as { organisedBy?: string | string[] }).organisedBy;
    if (!org) return false;
    if (Array.isArray(org)) return org.includes(chapterShortName);
    return String(org).includes(chapterShortName);
  }) as Event[];
};

export const chaptersData = {
  WIE: {
    ...getChapterTheme('WIE'),
    name: 'Women in Engineering',
    shortName: 'WIE',
    path: '/chapters/wie',
    theme: 'Advancing Women in Engineering Towards a Diverse and Inclusive Future',
    mission:
      'To connect, support, and inspire women and girls worldwide, and facilitate their recruitment and retention in STEM fields, fostering technological innovation and excellence for the benefit of humanity.',
    members: (execom2025 as ExecomShape).chapters['IEEE WIE MSIT'] as Member[],
    events: getChapterEvents('WIE'),
    achievements: ['Star Program', 'Leadhership', 'SheScripts'],
  },
  PES: {
    ...getChapterTheme('PES'),
    name: 'Power and Energy Society',
    shortName: 'PES',
    path: '/chapters/pes',
    theme: 'Empowering a Sustainable World, Energising the Future',
    mission:
      'To be the leading provider of scientific and engineering information on electric power and energy for the betterment of society, and the preferred professional development source for our members',
    members: (execom2025 as ExecomShape).chapters['IEEE PES MSIT'] as Member[],
    events: getChapterEvents('PES'),
    achievements: [],
  },
  CS: {
    ...getChapterTheme('CS'),
    name: 'Computer Society',
    shortName: 'CS',
    path: '/chapters/cs',
    theme: 'Advancing Computing, Empowering Innovation',
    mission:
      'Be essential to the global technical community and computer professionals everywhere, and be universally recognised for the contributions of technical professionals in developing and applying technology to improve global conditions.',
    members: (execom2025 as ExecomShape).chapters['IEEE CS MSIT'] as Member[],
    events: getChapterEvents('CS'),
    achievements: [],
  },
  RAS: {
    ...getChapterTheme('RAS'),
    name: 'Robotics and Automation Society',
    shortName: 'RAS',
    path: '/chapters/ras',
    theme: 'Advancing Robotics, Transforming the Future',
    mission:
      'To foster the development and facilitate the exchange of scientific and technological knowledge in Robotics and Automation that benefits members, the profession and humanity.',
    members: (execom2025 as ExecomShape).chapters['IEEE RAS MSIT'] as Member[],
    events: getChapterEvents('RAS'),
    achievements: [],
  },
};

export const chaptersList = Object.values(chaptersData).map((c) => ({
  name: c.name,
  shortName: c.shortName,
  path: c.path,
}));
