import { events } from './events';

export { events };

export const chapters = [
  {
    name: 'Robotics & Automation Society',
    shortName: 'RAS',
    path: '/chapters/ras',
    logo: '/RAS.png',
    bgColor: 'from-slate-800 via-slate-900 to-black', // Richer
    borderColor: 'border-blue-400',
    accentColor: 'bg-blue-400',
    textColor: 'text-blue-100',
    motto: 'Innovation Through Automation',
    description:
      'Advancing the theory and practice of robotics, automation, and intelligent systems through our ROBO TIDING newsletter and cutting-edge workshops.',
    image:
      'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    name: 'Women in Engineering',
    shortName: 'WIE',
    path: '/chapters/wie',
    logo: '/WIE.png',
    bgColor: 'from-indigo-800 via-indigo-900 to-black', // Richer
    borderColor: 'border-purple-400',
    accentColor: 'bg-purple-400',
    textColor: 'text-purple-100',
    motto: 'Empowerment Through Excellence',
    description:
      'Empowering women in technology through SHESCRIPTS newsletter, mentorship programs, and professional development opportunities.',
    image:
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    name: 'Power & Energy Society',
    shortName: 'PES',
    path: '/chapters/pes',
    logo: '/PES.png',
    bgColor: 'from-emerald-800 via-emerald-900 to-black', // Richer
    borderColor: 'border-green-400',
    accentColor: 'bg-green-400',
    textColor: 'text-green-100',
    motto: 'Sustainable Future Through Power',
    description:
      'Focusing on sustainable energy solutions, power systems, and electrical engineering innovations for a greener future.',
    image:
      'https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
  {
    name: 'Computer Society',
    shortName: 'CS',
    path: '/chapters/cs',
    logo: '/CS.png',
    bgColor: 'from-amber-800 via-amber-900 to-black', // Richer
    borderColor: 'border-amber-400',
    accentColor: 'bg-amber-400',
    textColor: 'text-amber-100',
    motto: 'Code the Future',
    description:
      'Advancing computing and information technology through programming competitions, AI workshops, and software development projects.',
    image:
      'https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80',
    link: '#',
  },
];

export const hackathons = {
  past: [
    {
      name: 'HackWie 3.0',
      platform: 'DoraHacks',
      platformLink: 'https://dorahacks.io/hackathon/826/winner',
      tagline: 'Women-Centric 24 Hours Hybrid Hackathon',
      duration: '24 Hours',
      date: 'January 29-30, 2025',
      location: 'Seminar Hall C-4, MSIT Janakpuri',
      prize: '₹25,000 Prize Pool',
      participants: '50+ Teams',
      organizer: 'IEEE WIE MSIT',
      image:
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80',
      description:
        'A groundbreaking women-centric hackathon that brought together brilliant minds to create innovative solutions with a focus on empowering women through technology.',
      images: [
        'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80',
      ],
      judges: [
        'Mr. Sourav Bera – Solution Architect @Microsoft',
        'Mr. Aryan – Vice-Chairperson of IEEE WiE Special Days Subcommittee Global Team',
        'Ms. Monika Chhikara – Senior Software Developer @Wipro Limited',
      ],
      technologies: ['MERN Stack', 'Blockchain', 'AI/ML', 'React Native'],
      winners: [
        {
          team: 'Smooth Operators',
          place: '1st Place',
          project: 'Outstanding technical skills and creativity',
          prize: '₹15,000',
          members: [],
          projectLink: 'https://github.com/rajveeerr/Safire',
        },
        {
          team: "Hadn't",
          place: '2nd Place',
          project: 'Innovation and perseverance showcase',
          prize: '₹7,000',
          members: [],
        },
        {
          team: 'OnCall Engineers',
          place: 'Women-Centric Unique Idea',
          project: 'Empowering women through technology',
          prize: '₹3,000',
          members: [],
        },
      ],
    },
  ],
  upcoming: [
    {
      name: 'TechnoVation 2025',
      platform: 'DoraHacks',
      platformLink: 'https://dorahacks.io/hackathon/technovation-2025',
      tagline: 'Innovation for Social Impact',
      duration: '48 Hours',
      date: 'October 5-7, 2025',
      location: 'Innovation Hub, MSIT',
      prize: '₹50,000 Prize Pool',
      participants: '100+ Expected',
      organizer: 'IEEE MSIT',
    },
  ],
};

export const achievements = {
  2025: [
    {
      title: 'IEEE Student Branch Excellence Award',
      subtitle: 'National Level • 2025',
      description:
        'Achieved outstanding performance in technical events, community outreach, and membership growth, ranking among top 10 IEEE student branches in India.',
      icon: 'Award',
    },
    {
      title: 'TechnoVation Hackathon Champion',
      subtitle: 'Regional Winner • 2025',
      description:
        'Successfully organized and executed the largest student hackathon in Delhi NCR with 200+ participants and ₹3L+ prize pool.',
      icon: 'Trophy',
    },
    {
      title: 'WIE Outstanding Chapter Award',
      subtitle: 'International • 2025',
      description:
        'Recognized globally for exceptional initiatives in promoting women in engineering and STEM education outreach programs.',
      icon: 'Award',
    },
  ],
  2024: [
    {
      title: 'Best Innovation Project Award',
      subtitle: 'IEEE India Council • 2024',
      description:
        'AI-powered smart campus management system won the national IEEE competition, showcasing cutting-edge IoT and machine learning integration.',
      icon: 'Trophy',
    },
    {
      title: 'Community Impact Excellence',
      subtitle: 'IEEE Region 10 • 2024',
      description:
        'Impacted 5000+ students through tech workshops, digital literacy programs, and rural education initiatives across Delhi NCR.',
      icon: 'Award',
    },
    {
      title: 'CodeFest Programming Championship',
      subtitle: 'Inter-University • 2024',
      description:
        'Organized the most competitive programming contest in the region with 100+ universities participating and industry mentorship.',
      icon: 'Trophy',
    },
  ],
};

export const footer = {
  quickLinks: [
    { text: 'About Us', href: '/about' },
    { text: 'FAQ', href: '/faq' },
    { text: 'Join IEEE', href: 'https://www.ieee.org/membership/join/index.html' },
    { text: 'MSIT', href: 'https://msit.in/' },
    { text: 'Events', href: '/events' },
  ],
  contact: [
    { text: 'Contact Page', href: '/contact' },
    {
      text: 'Join WhatsApp Group',
      href: 'https://chat.whatsapp.com/B9SjKLJqgiYIeAX0tMhbIH?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAae45hwoZS8NkSICS_2o0Hf3g0xwIafI4gV1fcB5ypODgaT1fcVPhXGYi_UrZA_aem_bQn0OhHefq8Oj9QX1J0pnA',
    },
  ],
};
