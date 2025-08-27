export const SITE_CONFIG = {
  name: 'IEEE MSIT',
  fullName: 'IEEE MSIT Student Branch',
  tagline: 'Advancing Technology for Humanity',
  description: 'The Professional home for the Engineering and Technology world wide. IEEE MSIT Student Branch - Leading innovation and excellence in technology with award-winning achievements in the Asia-Pacific region.',
  url: 'https://ieeemsit.vercel.app',
  domain: 'ieeemsit.vercel.app',
  email: 'anupama@msit.in',
  phone: '+91-11-2681-4816',
  
  address: {
    street: 'Maharaja Surajmal Institute of Technology',
    city: 'New Delhi',
    state: 'Delhi',
    postalCode: '110058',
    country: 'IN',
    countryName: 'India'
  },
  
  social: {
    github: {
      url: 'https://github.com/IEEE-MSIT',
      handle: '@IEEE-MSIT',
      username: 'IEEE-MSIT'
    },
    instagram: {
      url: 'https://www.instagram.com/ieeemsit/',
      handle: '@ieeemsit',
      username: 'ieeemsit'
    },
    linkedin: {
      url: 'https://www.linkedin.com/company/ieeemsit',
      handle: 'IEEE MSIT',
      username: 'ieeemsit'
    },
    twitter: {
      url: 'https://x.com/ieeemsit',
      handle: '@ieeemsit',
      username: 'ieeemsit'
    },
    facebook: {
      url: 'https://www.facebook.com/ieeemsit',
      handle: '@ieeemsit',
      username: 'ieeemsit'
    },
    whatsapp: {
      url: 'https://chat.whatsapp.com/B9SjKLJqgiYIeAX0tMhbIH?mode=ac_t&fbclid=PAZXh0bgNhZW0CMTEAAae45hwoZS8NkSICS_2o0Hf3g0xwIafI4gV1fcB5ypODgaT1fcVPhXGYi_UrZA_aem_bQn0OhHefq8Oj9QX1J0pnA',
      handle: 'IEEE MSIT Community',
      username: 'ieeemsit'
    }
  },
  
  keywords: [
    'IEEE',
    'MSIT',
    'technology',
    'engineering',
    'student branch',
    'innovation',
    'professional development',
    'asia-pacific',
    'awards',
    'technical society',
    'networking',
    'STEM',
    'electronics',
    'electrical engineering',
    'Delhi',
    'India'
  ],
  
  awards: [
    'IEEE Region 10 Special Recognition of Student Branch Award 2023',
    'Gold in Student Activities Committee Darrel Chong Award',
    '1st Prize in IEEE Day Photo Contest STEM Category'
  ],
  
  theme: {
    primaryColor: '#1e40af',
    backgroundColor: '#ffffff',
    logoPath: '/IEEEBlueLogowithWhiteBG.jpg',
    ogImagePath: '/og-image.jpg'
  },
  foundingYear: '2010',
  locale: 'en_US',
  language: 'English'
} as const;



export const getSocialLinks = () => {
  return Object.values(SITE_CONFIG.social).map(social => social.url);
};

export const getSocialHandles = () => {
  return Object.entries(SITE_CONFIG.social).reduce((acc, [platform, data]) => {
    acc[platform] = data.handle;
    return acc;
  }, {} as Record<string, string>);
};

export const getFullAddress = () => {
  const { address } = SITE_CONFIG;
  return `${address.street}, ${address.city}, ${address.state} ${address.postalCode}, ${address.countryName}`;
};

export const getKeywordsString = () => {
  return SITE_CONFIG.keywords.join(', ');
};

export default SITE_CONFIG;
