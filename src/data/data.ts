export const events = [
  {
    date: { month: 'AUG', day: '25', year: '2025' },
    title: 'ROBO WARS 2025: National Robotics Championship',
    description:
      'The ultimate battleground for student-built robots. Design, build, and compete with autonomous and remote-controlled robots in various technical challenges.',
    category: 'Featured',
    time: '9:00 AM - 6:00 PM',
    location: 'Main Ground, MSIT Campus',
    society: 'IEEE RAS MSIT',
    prize: 'Prize Pool: ₹1,00,000',
    buttonText: 'Register Team',
    featured: true,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: { month: 'SEP', day: '05', year: '2025' },
    title: 'Women in Tech Leadership Workshop',
    description:
      'Empowering women engineers through skill development, networking, and leadership training. Official launch of our monthly SHESCRIPTS newsletter.',
    category: 'Free',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Hall 2, MSIT',
    society: 'IEEE WIE MSIT',
    prize: '50 Seats Available',
    buttonText: 'Join Workshop',
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: { month: 'SEP', day: '12', year: '2025' },
    title: 'CodeFest MSIT: Programming Marathon',
    description:
      'Intensive coding competition featuring algorithmic challenges, data structures problems, and real-world programming scenarios.',
    category: '₹100',
    time: '10:00 AM - 3:00 PM',
    location: 'Computer Lab A & B',
    society: 'IEEE Computer Society',
    prize: 'Prizes worth ₹50,000',
    buttonText: 'Register Now',
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: { month: 'SEP', day: '20', year: '2025' },
    title: 'Smart Grid & Renewable Energy Symposium',
    description:
      'Industry experts discuss latest trends in sustainable energy, smart grid technologies, and power system innovations.',
    category: 'Free',
    time: '11:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    society: 'IEEE PES MSIT',
    prize: '5 Industry Speakers',
    buttonText: 'Reserve Seat',
    image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: { month: 'OCT', day: '05', year: '2025' },
    title: 'TechnoVation Hackathon 2025',
    description:
      '48-hour hackathon focusing on solutions for social impact. Build innovative tech products addressing real-world challenges.',
    category: 'Team Event',
    time: 'Oct 5-6, Full Weekend',
    location: 'Innovation Hub, MSIT',
    society: 'IEEE MSIT',
    prize: 'Prizes worth ₹1,00,000',
    buttonText: 'Form Team',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80',
  },
  {
    date: { month: 'OCT', day: '15', year: '2025' },
    title: 'Industry Connect: Alumni Career Fair',
    description:
      'Meet successful IEEE MSIT alumni working in top tech companies. Career guidance sessions and networking opportunities.',
    category: 'Networking',
    time: '3:00 PM - 7:00 PM',
    location: 'Conference Hall & Lobby',
    society: 'IEEE MSIT',
    prize: '50+ Alumni Attending',
    buttonText: 'RSVP Now',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  },
];

export const chapters = [
  {
    name: 'Robotics & Automation Society',
    shortName: 'RAS',
    logo: '/RAS.png',
    bgColor: 'from-blue-900 via-blue-800 to-blue-900',
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
    logo: '/WIE.png',
    bgColor: 'from-purple-900 via-purple-800 to-purple-900',
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
    logo: '/PES.png',
    bgColor: 'from-green-900 via-green-800 to-green-900',
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
    logo: '/CS.png',
    bgColor: 'from-amber-900 via-amber-800 to-amber-900',
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
      name: 'TechnoVation 2024',
      platform: 'DoraHacks',
      platformLink: 'https://dorahacks.io/hackathon/technovation-2024',
      tagline: 'Social Impact Hackathon',
      duration: '48 Hours',
      date: 'March 15-17, 2024',
      location: 'Innovation Hub, MSIT',
      prize: '₹2,00,000 Prize Pool',
      participants: '150+ Participants',
      winners: [
        {
          team: 'Team EcoSmart',
          place: '1st Place',
          project: 'Smart Waste Management System',
          prize: '₹1,00,000',
          members: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
          ],
          projectLink: 'https://dorahacks.io/buidl/12345/project-ecosmart',
        },
        {
          team: 'Team HealthTech',
          place: '2nd Place',
          project: 'AI-Powered Health Monitoring',
          prize: '₹60,000',
          members: [
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
          ],
          projectLink: 'https://dorahacks.io/buidl/12346/project-healthtech',
        },
        {
          team: 'Team EduFlow',
          place: '3rd Place',
          project: 'Interactive Learning Platform',
          prize: '₹40,000',
          members: [
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&q=80',
            'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=150&q=80',
          ],
          projectLink: 'https://dorahacks.io/buidl/12347/project-eduflow',
        },
      ],
    },
    {
      name: 'CodeFest 2024',
      platform: 'Devfolio',
      platformLink: 'https://devfolio.co/projects/codefest-2024',
      tagline: 'Programming Marathon',
      duration: '5 Hours',
      date: 'September 10, 2024',
      location: 'Computer Labs A & B',
      prize: '₹50,000 Prize Pool',
      participants: '80+ Coders',
      winners: [
        {
          team: 'Arjun Sharma',
          place: '1st Place',
          project: '95% Problems Solved • CSE Final Year',
          prize: '₹25,000',
          members: [
            'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
          ],
        },
        {
          team: 'Priya Patel',
          place: '2nd Place',
          project: '87% Problems Solved • ECE 3rd Year',
          prize: '₹15,000',
          members: [
            'https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=150&q=80',
          ],
        },
        {
          team: 'Rohit Kumar',
          place: '3rd Place',
          project: '82% Problems Solved • IT 2nd Year',
          prize: '₹10,000',
          members: [
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
          ],
        },
      ],
    },
  ],
  upcoming: [
    {
      name: 'TechnoVation 2025',
      platform: 'DoraHacks',
      platformLink: 'https://dorahacks.io/hackathon/technovation-2025',
      tagline: 'AI & Sustainability Focus',
      duration: '48 Hours',
      date: 'October 5-7, 2025',
      location: 'Innovation Hub, MSIT',
      prize: '₹3,00,000 Prize Pool',
      participants: '200+ Expected',
    },
    {
      name: 'CodeFest 2025',
      platform: 'Devfolio',
      platformLink: 'https://devfolio.co/projects/codefest-2025',
      tagline: 'Advanced Algorithms & Data Structures',
      duration: '6 Hours',
      date: 'November 15, 2025',
      location: 'Computer Labs & Online',
      prize: '₹75,000 Prize Pool',
      participants: '100+ Expected',
    },
  ],
};

export const team = {
  execom2025: [
    {
      name: 'Rajesh Kumar',
      position: 'President',
      branch: 'CSE • Final Year',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/rajesh-kumar-ieee',
    },
    {
      name: 'Priya Sharma',
      position: 'Vice President',
      branch: 'ECE • Final Year',
      image:
        'https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/priya-sharma-ieee',
    },
    {
      name: 'Arjun Patel',
      position: 'Technical Secretary',
      branch: 'CSE • 3rd Year',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/arjun-patel-ieee',
    },
    {
      name: 'Sneha Gupta',
      position: 'General Secretary',
      branch: 'IT • 3rd Year',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/sneha-gupta-ieee',
    },
    {
      name: 'Vikram Singh',
      position: 'Treasurer',
      branch: 'ME • 3rd Year',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/vikram-singh-ieee',
    },
    {
      name: 'Ananya Reddy',
      position: 'Event Coordinator',
      branch: 'EE • 2nd Year',
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/ananya-reddy-ieee',
    },
    {
      name: 'Rohit Verma',
      position: 'PR & Marketing Head',
      branch: 'CSE • 2nd Year',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/rohit-verma-ieee',
    },
    {
      name: 'Kavya Joshi',
      position: 'Web Development Lead',
      branch: 'IT • 2nd Year',
      image:
        'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/kavya-joshi-ieee',
    },
  ],
  execom2024: [
    {
      name: 'Amit Krishnan',
      position: 'President (2024)',
      branch: 'CSE • Alumni',
      image:
        'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/amit-krishnan-ieee',
    },
    {
      name: 'Divya Agarwal',
      position: 'Vice President (2024)',
      branch: 'ECE • Alumni',
      image:
        'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/divya-agarwal-ieee',
    },
    {
      name: 'Karan Malhotra',
      position: 'Technical Secretary (2024)',
      branch: 'CSE • Alumni',
      image:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/karan-malhotra-ieee',
    },
    {
      name: 'Meera Nair',
      position: 'General Secretary (2024)',
      branch: 'IT • Alumni',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      linkedin: 'https://linkedin.com/in/meera-nair-ieee',
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
    { text: 'About Us', href: '#about' },
    { text: 'Join IEEE', href: 'https://www.ieee.org/membership/join/index.html' },
    { text: 'MSIT', href: 'https://msit.in/' },
    { text: 'Opportunities', href: '#events' },
  ],
  contact: [
    { text: 'anupama@msit.in', href: 'mailto:anupama@msit.in' },
    { text: 'shubhamsharma@ieee.org', href: 'mailto:shubhamsharma@ieee.org' },
    { text: 'ishneet@ieee.org', href: 'mailto:ishneet@ieee.org' },
    { text: 'tussharaggarwal@ieee.org', href: 'mailto:tussharaggarwal@ieee.org' },
  ],
};
