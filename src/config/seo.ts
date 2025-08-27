import SITE_CONFIG, { getKeywordsString } from './site';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string;
  image: string;
  url: string;
  type: string;
  author: string;
  siteName: string;
  locale: string;
  twitterHandle: string;
}

export const defaultSEO: SEOConfig = {
  title: `${SITE_CONFIG.fullName} - ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: getKeywordsString(),
  image: SITE_CONFIG.theme.ogImagePath,
  url: SITE_CONFIG.url,
  type: 'website',
  author: SITE_CONFIG.fullName,
  siteName: SITE_CONFIG.name,
  locale: SITE_CONFIG.locale,
  twitterHandle: SITE_CONFIG.social.twitter.handle,
};

export const pageSEO = {
  home: {
    ...defaultSEO,
    title: `${SITE_CONFIG.name} - Student Branch | ${SITE_CONFIG.tagline}`,
    description: `Join ${SITE_CONFIG.fullName} - Award-winning technology community. Region 10 Special Recognition winner among 1800+ colleges across 23 countries in Asia-Pacific.`,
    image: '/og-image-home.jpg',
    keywords: `${SITE_CONFIG.name}, student branch, technology community, region 10 award, asia pacific, engineering students, professional development`,
  },
  about: {
    ...defaultSEO,
    title: `About ${SITE_CONFIG.name} - Leading Technology Innovation`,
    description: `Learn about ${SITE_CONFIG.fullName} - our mission, achievements, and commitment to advancing technology for humanity. Discover our award-winning journey.`,
    keywords: `about ${SITE_CONFIG.name}, mission, achievements, technology innovation, student organization`,
  },
  events: {
    ...defaultSEO,
    title: `${SITE_CONFIG.name} Events - Technical Workshops & Competitions`,
    description: `Explore upcoming and past ${SITE_CONFIG.name} events including technical workshops, hackathons, seminars, and competitions. Join our technology community.`,
    image: '/og-image-events.jpg',
    keywords: `IEEE events, technical workshops, hackathons, seminars, competitions, technology events, MSIT`,
  },
  contact: {
    ...defaultSEO,
    title: `Contact ${SITE_CONFIG.name} - Get in Touch`,
    description: `Connect with ${SITE_CONFIG.fullName}. Find our contact information, location, and reach out for collaborations, partnerships, or inquiries.`,
    keywords: `contact ${SITE_CONFIG.name}, get in touch, collaboration, partnership, inquiries`,
  },
};
