import { Helmet } from 'react-helmet-async';
import { SEOConfig, defaultSEO } from '../config/seo';
import SITE_CONFIG from '../config/site';
import { createOrganizationSchema, createEducationalOrganizationSchema } from '../config/schemas';

interface SEOProps extends Partial<SEOConfig> {
  publishedTime?: string;
  modifiedTime?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  siteName = defaultSEO.siteName,
  locale = defaultSEO.locale,
  twitterHandle = defaultSEO.twitterHandle,
  publishedTime,
  modifiedTime,
}) => {
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={SITE_CONFIG.language} />
      <meta name="revisit-after" content="7 days" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content={SITE_CONFIG.theme.primaryColor} />
      <meta name="msapplication-TileColor" content={SITE_CONFIG.theme.primaryColor} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={siteName} />
      <meta name="mobile-web-app-capable" content="yes" />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      <meta property="article:author" content={author} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta property="og:type" content="article" />
      <meta property="article:tag" content="IEEE" />
      <meta property="article:tag" content="Technology" />
      <meta property="article:tag" content="Engineering" />
      <meta property="article:tag" content="Student Branch" />
      <meta property="og:image:alt" content={`${SITE_CONFIG.name} Logo - ${SITE_CONFIG.tagline}`} />
      <script type="application/ld+json">
        {JSON.stringify(createOrganizationSchema(url, fullImageUrl, description))}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(createEducationalOrganizationSchema(url, fullImageUrl, description))}
      </script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />{' '}
      <link rel="icon" type="image/jpeg" href={SITE_CONFIG.theme.logoPath} sizes="32x32" />
      <link rel="icon" type="image/jpeg" href={SITE_CONFIG.theme.logoPath} sizes="16x16" />
      <link rel="apple-touch-icon" href={SITE_CONFIG.theme.logoPath} />
      <link rel="manifest" href="/manifest.webmanifest" />
    </Helmet>
  );
};

export default SEO;
