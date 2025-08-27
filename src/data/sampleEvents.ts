import { 
  Event, 
  EventStatus, 
  EventType, 
  EventCategory, 
  RegistrationType, 
  EventMode, 
  DifficultyLevel 
} from '../types';

export const sampleHackathon: Event = {
  id: 'hack-2024-01',
  title: 'IEEE MSIT TechVerse Hackathon 2024',
  subtitle: 'Build the Future of Technology',
  description: 'Join us for a 48-hour coding marathon where innovation meets creativity. Build groundbreaking solutions for real-world problems and compete for exciting prizes worth ₹2 Lakhs+',
  shortDescription: '48-hour hackathon with ₹2L+ prizes. Build innovative tech solutions.',
  
  type: EventType.HACKATHON,
  category: EventCategory.ARTIFICIAL_INTELLIGENCE,
  status: EventStatus.UPCOMING,
  difficulty: DifficultyLevel.ALL_LEVELS,
  
  startDate: '2024-03-15T09:00:00.000Z',
  endDate: '2024-03-17T18:00:00.000Z',
  timezone: 'Asia/Kolkata',
  duration: 57,
  
  location: {
    mode: EventMode.HYBRID,
    venue: {
      name: 'IEEE MSIT Campus',
      address: 'Maharaja Surajmal Institute of Technology, C-4, Janakpuri, New Delhi',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India',
      coordinates: {
        lat: 28.6219,
        lng: 77.0757
      },
      directions: 'Metro: Janakpuri West (Blue Line)',
      parking: 'Free parking available on campus'
    },
    onlineDetails: {
      platform: 'Discord + Zoom',
      link: 'https://discord.gg/ieeemsit',
      meetingId: 'Will be shared before event'
    }
  },
  
  organizers: [
    {
      id: 'org-1',
      name: 'IEEE MSIT Student Branch',
      role: 'Host Organization',
      organization: 'IEEE MSIT',
      email: 'ieee@msit.edu.in'
    }
  ],
  
  speakers: [
    {
      id: 'speaker-1',
      name: 'Dr. Priya Sharma',
      title: 'Senior AI Engineer',
      company: 'Google',
      bio: 'AI researcher with 10+ years experience in machine learning and deep learning',
      expertise: ['AI', 'Machine Learning', 'Python'],
      avatar: '/speakers/priya-sharma.jpg',
      linkedin: 'https://linkedin.com/in/priyasharma',
      talkTitle: 'Future of AI in Problem Solving',
      talkDescription: 'Exploring how AI can be leveraged to solve complex real-world problems'
    }
  ],
  
  mentors: [
    {
      id: 'mentor-1',
      name: 'Rajesh Kumar',
      title: 'Full Stack Developer',
      company: 'Microsoft',
      bio: 'Experienced developer and mentor in web technologies',
      expertise: ['React', 'Node.js', 'Cloud Computing'],
      linkedin: 'https://linkedin.com/in/rajeshkumar'
    }
  ],
  
  registration: {
    type: RegistrationType.FREE,
    maxParticipants: 200,
    currentParticipants: 145,
    deadline: '2024-03-10T23:59:59.000Z',
    requirements: [
      'Valid student ID',
      'Laptop with development environment',
      'Team of 2-4 members (can form teams at event)'
    ],
    eligibility: [
      'Undergraduate students',
      'Postgraduate students',
      'Recent graduates (within 2 years)'
    ],
    registrationLink: 'https://forms.gle/hackathon2024',
    waitlistAvailable: true
  },
  
  prerequisites: [
    'Basic programming knowledge',
    'Familiarity with any programming language',
    'Git version control basics'
  ],
  
  targetAudience: [
    'Computer Science students',
    'Engineering students',
    'Aspiring developers',
    'Tech enthusiasts'
  ],
  
  agenda: [
    'Opening ceremony and problem statements',
    'Team formation and ideation',
    'Coding sprint with mentor support',
    'Project submissions and presentations',
    'Judging and award ceremony'
  ],
  
  learningOutcomes: [
    'Hands-on experience with cutting-edge technologies',
    'Problem-solving and critical thinking skills',
    'Team collaboration and project management',
    'Presentation and pitching skills',
    'Networking with industry professionals'
  ],
  
  technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'AWS'],
  tools: ['VS Code', 'Git', 'Docker', 'Figma', 'Postman'],
  
  prizes: [
    {
      position: '1st',
      title: 'Grand Prize',
      amount: '₹75,000',
      description: 'Cash prize + internship opportunity + mentorship'
    },
    {
      position: '2nd',
      title: 'Runner Up',
      amount: '₹50,000',
      description: 'Cash prize + tech goodies'
    },
    {
      position: '3rd',
      title: 'Third Place',
      amount: '₹25,000',
      description: 'Cash prize + certificates'
    },
    {
      position: 'Best UI/UX',
      title: 'Best Design Award',
      amount: '₹15,000',
      description: 'Special category for outstanding design'
    }
  ],
  
  themes: [
    'Artificial Intelligence & Machine Learning',
    'Sustainable Technology Solutions',
    'FinTech & Blockchain',
    'Healthcare Technology',
    'EdTech & Digital Learning'
  ],
  
  judgingCriteria: [
    'Innovation and Creativity (25%)',
    'Technical Implementation (25%)',
    'Problem Solving & Impact (25%)',
    'Presentation & Demo (15%)',
    'Code Quality & Documentation (10%)'
  ],
  
  rules: [
    'Teams must consist of 2-4 members',
    'All code must be original and written during the event',
    'Use of external APIs and libraries is allowed',
    'Projects must be submitted by the deadline',
    'All team members must be present for final presentation'
  ],
  
  media: {
    coverImage: '/events/hackathon-2024-cover.jpg',
    gallery: [
      '/events/hackathon-2024-1.jpg',
      '/events/hackathon-2024-2.jpg'
    ],
    livestreamLink: 'https://youtube.com/live/hackathon2024'
  },
  
  tags: ['hackathon', 'coding', 'ai', 'competition', 'prizes', 'students'],
  featured: true,
  trending: true,
  
  socialLinks: {
    website: 'https://ieeemsit.com/hackathon2024',
    linkedin: 'https://linkedin.com/company/ieeemsit',
    instagram: 'https://instagram.com/ieeemsit',
    discord: 'https://discord.gg/ieeemsit'
  },
  
  sponsors: [
    {
      id: 'sponsor-1',
      name: 'TechCorp',
      logo: '/sponsors/techcorp.png',
      website: 'https://techcorp.com',
      tier: 'title',
      description: 'Leading technology solutions provider'
    }
  ],
  
  cta: {
    primary: {
      text: 'Register Now',
      link: 'https://forms.gle/hackathon2024',
      type: 'register',
      externalLink: true
    },
    secondary: {
      text: 'Add to Calendar',
      link: '#calendar',
      type: 'calendar'
    }
  },
  
  createdAt: '2024-01-15T10:00:00.000Z',
  updatedAt: '2024-02-28T14:30:00.000Z',
  createdBy: 'admin-ieee',
  
  views: 1250,
  registrations: 145,
  
  seo: {
    metaTitle: 'IEEE MSIT TechVerse Hackathon 2024 | 48hr Coding Marathon',
    metaDescription: 'Join IEEE MSIT\'s premier hackathon with ₹2L+ prizes. Build innovative tech solutions in AI, blockchain, and more. Free registration for students.',
    keywords: ['hackathon', 'IEEE', 'MSIT', 'coding competition', 'AI', 'tech event', 'delhi'],
    canonicalUrl: 'https://ieeemsit.com/events/hackathon-2024'
  }
};

// Example 2: Completed Workshop
export const sampleWorkshop: Event = {
  id: 'workshop-2024-01',
  title: 'Introduction to React.js',
  subtitle: 'Build Your First Web Application',
  description: 'A comprehensive hands-on workshop covering React fundamentals, components, state management, and building a complete web application.',
  shortDescription: 'Learn React.js fundamentals and build your first web app.',
  
  type: EventType.WORKSHOP,
  category: EventCategory.WEB_DEVELOPMENT,
  status: EventStatus.COMPLETED,
  difficulty: DifficultyLevel.BEGINNER,
  
  startDate: '2024-02-10T14:00:00.000Z',
  endDate: '2024-02-10T17:00:00.000Z',
  timezone: 'Asia/Kolkata',
  duration: 3,
  
  schedule: [
    {
      id: 'schedule-1',
      time: '14:00',
      title: 'Introduction to React',
      description: 'What is React and why use it?',
      type: 'session',
      duration: 30
    },
    {
      id: 'schedule-2',
      time: '14:30',
      title: 'Components and JSX',
      description: 'Building your first component',
      type: 'workshop',
      duration: 60
    },
    {
      id: 'schedule-3',
      time: '15:30',
      title: 'Break',
      type: 'break',
      duration: 15
    },
    {
      id: 'schedule-4',
      time: '15:45',
      title: 'State and Props',
      description: 'Managing component state and data flow',
      type: 'workshop',
      duration: 75
    },
    {
      id: 'schedule-5',
      time: '17:00',
      title: 'Q&A and Wrap-up',
      type: 'session',
      duration: 30
    }
  ],
  
  location: {
    mode: EventMode.ONLINE,
    onlineDetails: {
      platform: 'Zoom',
      meetingId: '123-456-789'
    }
  },
  
  organizers: [
    {
      id: 'org-1',
      name: 'IEEE MSIT Web Development Team',
      role: 'Organizer',
      organization: 'IEEE MSIT'
    }
  ],
  
  speakers: [
    {
      id: 'speaker-1',
      name: 'Amit Verma',
      title: 'Senior Frontend Developer',
      company: 'Flipkart',
      bio: 'Frontend expert with 5+ years experience in React ecosystem',
      expertise: ['React', 'JavaScript', 'Frontend'],
      avatar: '/speakers/amit-verma.jpg'
    }
  ],
  
  registration: {
    type: RegistrationType.FREE,
    maxParticipants: 100,
    currentParticipants: 89,
    deadline: '2024-02-09T23:59:59.000Z'
  },
  
  prerequisites: [
    'Basic HTML/CSS knowledge',
    'JavaScript fundamentals',
    'Node.js installed on your system'
  ],
  
  learningOutcomes: [
    'Understanding React fundamentals',
    'Creating functional components',
    'Managing state with hooks',
    'Building a complete React application'
  ],
  
  technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'npm'],
  
  resources: [
    {
      name: 'Workshop Slides',
      link: '/resources/react-workshop-slides.pdf',
      type: 'slides'
    },
    {
      name: 'Starter Code',
      link: 'https://github.com/ieeemsit/react-workshop-starter',
      type: 'code'
    },
    {
      name: 'Complete Project',
      link: 'https://github.com/ieeemsit/react-workshop-complete',
      type: 'code'
    }
  ],
  
  media: {
    coverImage: '/events/react-workshop-cover.jpg',
    recordingLink: 'https://youtube.com/watch/react-workshop-2024'
  },
  
  tags: ['workshop', 'react', 'javascript', 'web development', 'beginner'],
  featured: false,
  
  cta: {
    primary: {
      text: 'Watch Recording',
      link: 'https://youtube.com/watch/react-workshop-2024',
      type: 'watch_recording',
      externalLink: true
    },
    secondary: {
      text: 'Download Resources',
      link: '#resources',
      type: 'download'
    }
  },
  
  createdAt: '2024-01-20T10:00:00.000Z',
  updatedAt: '2024-02-11T09:00:00.000Z',
  createdBy: 'admin-ieee',
  
  views: 456,
  registrations: 89,
  attendance: 78,
  rating: 4.7,
  
  feedback: [
    {
      rating: 5,
      comment: 'Excellent workshop! Very clear explanations and hands-on approach.',
      anonymous: false
    },
    {
      rating: 4,
      comment: 'Great content, could use more advanced examples.',
      anonymous: true
    }
  ]
};

// Example 3: Ongoing Conference
export const sampleConference: Event = {
  id: 'conf-2024-01',
  title: 'IEEE Delhi Section Student Conference 2024',
  subtitle: 'Emerging Technologies and Innovation',
  description: 'Annual conference featuring latest research in technology, innovation showcases, and networking opportunities with industry leaders.',
  
  type: EventType.CONFERENCE,
  category: EventCategory.RESEARCH,
  status: EventStatus.ONGOING,
  difficulty: DifficultyLevel.ALL_LEVELS,
  
  startDate: '2024-03-01T09:00:00.000Z',
  endDate: '2024-03-02T18:00:00.000Z',
  timezone: 'Asia/Kolkata',
  
  location: {
    mode: EventMode.HYBRID,
    venue: {
      name: 'India Habitat Centre',
      address: 'Lodhi Road, New Delhi',
      city: 'New Delhi',
      state: 'Delhi',
      country: 'India'
    },
    onlineDetails: {
      platform: 'YouTube Live',
      link: 'https://youtube.com/live/ieee-conf-2024'
    }
  },
  
  organizers: [
    {
      id: 'org-1',
      name: 'IEEE Delhi Section',
      role: 'Host',
      organization: 'IEEE'
    }
  ],
  
  registration: {
    type: RegistrationType.PAID,
    fee: '₹500',
    currency: 'INR',
    deadline: '2024-02-28T23:59:59.000Z'
  },
  
  media: {
    coverImage: '/events/conference-2024-cover.jpg',
    livestreamLink: 'https://youtube.com/live/ieee-conf-2024'
  },
  
  tags: ['conference', 'research', 'innovation', 'networking'],
  
  cta: {
    primary: {
      text: 'Join Live Stream',
      link: 'https://youtube.com/live/ieee-conf-2024',
      type: 'register',
      externalLink: true
    },
    secondary: {
      text: 'Share Event',
      link: '#share',
      type: 'share'
    }
  },
  
  createdAt: '2024-01-01T10:00:00.000Z',
  updatedAt: '2024-03-01T08:00:00.000Z',
  createdBy: 'admin-ieee'
};

/**
 * Template for creating new events with all required fields
 */
export const eventTemplate: Partial<Event> = {
  // Required fields that need to be filled
  id: '', // Generate unique ID
  title: '',
  description: '',
  type: EventType.WORKSHOP, // Default type
  category: EventCategory.GENERAL, // Default category
  status: EventStatus.UPCOMING, // Default status
  difficulty: DifficultyLevel.ALL_LEVELS, // Default difficulty
  startDate: '', // ISO string
  endDate: '', // ISO string
  timezone: 'Asia/Kolkata',
  
  location: {
    mode: EventMode.ONLINE // Default to online
  },
  
  organizers: [
    {
      id: 'ieee-msit',
      name: 'IEEE MSIT',
      role: 'Host',
      organization: 'IEEE MSIT'
    }
  ],
  
  registration: {
    type: RegistrationType.FREE,
    deadline: '' // Set appropriate deadline
  },
  
  media: {
    coverImage: '/events/default-cover.jpg'
  },
  
  tags: [],
  featured: false,
  
  cta: {
    primary: {
      text: 'Learn More',
      link: '#',
      type: 'learn_more'
    }
  },
  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  createdBy: 'system'
};
