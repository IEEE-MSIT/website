import SITE_CONFIG from '../config/site';

export const getSocialMediaLinks = () => SITE_CONFIG.social;

export const getSocialMediaLink = (platform: keyof typeof SITE_CONFIG.social) => {
  return SITE_CONFIG.social[platform];
};

export const getContactInfo = () => ({
  email: SITE_CONFIG.email,
  phone: SITE_CONFIG.phone,
  address: SITE_CONFIG.address,
});

export const getSiteInfo = () => ({
  name: SITE_CONFIG.name,
  fullName: SITE_CONFIG.fullName,
  tagline: SITE_CONFIG.tagline,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
});

export const getBrandingInfo = () => SITE_CONFIG.theme;

export const getAwards = () => SITE_CONFIG.awards;

export const generateShareUrl = {
  twitter: (text: string, url: string) =>
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&via=${SITE_CONFIG.social.twitter.username}`,

  linkedin: (url: string, title: string, summary: string) =>
    `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(summary)}`,

  facebook: (url: string) =>
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,

  whatsapp: (text: string, url: string) =>
    `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
};

export const getOrganizationStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.fullName,
  alternateName: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}${SITE_CONFIG.theme.logoPath}`,
  description: SITE_CONFIG.description,
  foundingDate: SITE_CONFIG.foundingYear,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: SITE_CONFIG.phone,
    contactType: 'General Inquiries',
    email: SITE_CONFIG.email,
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressRegion: SITE_CONFIG.address.state,
    postalCode: SITE_CONFIG.address.postalCode,
    addressCountry: SITE_CONFIG.address.country,
  },
  sameAs: Object.values(SITE_CONFIG.social).map((social) => social.url),
  awards: SITE_CONFIG.awards,
});

export default {
  getSocialMediaLinks,
  getSocialMediaLink,
  getContactInfo,
  getSiteInfo,
  getBrandingInfo,
  getAwards,
  generateShareUrl,
  getOrganizationStructuredData,
};
