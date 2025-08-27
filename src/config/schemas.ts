import { SITE_CONFIG } from './site';

export const createOrganizationSchema = (url: string, imageUrl: string, description: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_CONFIG.fullName,
  alternateName: SITE_CONFIG.name,
  url: url,
  logo: imageUrl,
  description: description,
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

export const createEducationalOrganizationSchema = (
  url: string,
  imageUrl: string,
  description: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: SITE_CONFIG.fullName,
  url: url,
  logo: imageUrl,
  description: description,
  educationalCredentialAwarded: 'IEEE Membership',
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'IEEE Student Member',
      credentialCategory: 'Professional Development',
    },
  ],
});
