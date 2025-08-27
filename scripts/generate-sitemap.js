import { writeFileSync } from 'fs';
import { join } from 'path';

const baseUrl = 'https://ieeemsit.vercel.app';

const routes = [
  {
    url: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: '1.0'
  },
  {
    url: '/about',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/events',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: '0.8'
  },
  {
    url: '/contact',
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: '0.6'
  }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  writeFileSync(join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
