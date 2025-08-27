# Social Media Integration Examples

This file demonstrates how to use the social media configuration throughout the IEEE MSIT website.

## 🎯 Quick Usage Examples

### 1. Basic Social Links Component
```tsx
import SocialLinks from './components/common/SocialLinks';

<SocialLinks />

<SocialLinks 
  orientation="vertical" 
  showLabels={true} 
  className="my-4" 
/>

<SocialLinks 
  variant="footer" 
  iconSize={20} 
/>
```

### 2. Individual Social Links
```tsx
import { getSocialMediaLink } from './utils/siteHelpers';

const githubInfo = getSocialMediaLink('github');
// Returns: { url: 'https://github.com/IEEE-MSIT', handle: '@IEEE-MSIT', username: 'IEEE-MSIT' }

<a href={githubInfo.url} target="_blank">
  Follow us on GitHub {githubInfo.handle}
</a>
```

### 3. Share Functionality
```tsx
import { generateShareUrl } from './utils/siteHelpers';

const shareOnTwitter = () => {
  const url = generateShareUrl.twitter(
    'Check out IEEE MSIT Student Branch!',
    'https://ieeemsit.vercel.app'
  );
  window.open(url, '_blank');
};

const shareOnLinkedIn = () => {
  const url = generateShareUrl.linkedin(
    'https://ieeemsit.vercel.app',
    'IEEE MSIT - Advancing Technology for Humanity',
    'Join our award-winning technology community'
  );
  window.open(url, '_blank');
};
```

### 4. SEO Integration
```tsx
import SEO from './components/SEO';
import { pageSEO } from './config/seo';

<SEO {...pageSEO.home} />
```

### 5. Contact Information
```tsx
import { getContactInfo, getSiteInfo } from './utils/siteHelpers';

const contactInfo = getContactInfo();
const siteInfo = getSiteInfo();

<div>
  <h1>{siteInfo.fullName}</h1>
  <p>{siteInfo.tagline}</p>
  <p>Email: {contactInfo.email}</p>
  <p>Phone: {contactInfo.phone}</p>
</div>
```

## 🔧 Customization Guide

### Adding New Social Platforms
1. Update `src/config/site.ts`:
```typescript
social: {
  youtube: {
    url: 'https://youtube.com/@ieeemsit',
    handle: '@ieeemsit',
    username: 'ieeemsit'
  }
}
```

2. Add icon to `SocialLinks.tsx`:
```tsx
import { Youtube } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'YouTube',
    url: SITE_CONFIG.social.youtube.url,
    icon: Youtube,
    handle: SITE_CONFIG.social.youtube.handle,
    color: 'hover:text-red-600'
  }
];
```

### Updating Social Handles
Simply modify the `src/config/site.ts` file, and all references throughout the site will automatically update.

## 🎨 Styling Variants

### Different Visual Styles
```tsx
<SocialLinks iconSize={16} className="opacity-70" />

<SocialLinks 
  iconSize={32} 
  showLabels={true} 
  className="bg-gray-100 p-4 rounded-lg" 
/>

<SocialLinks className="space-x-6 justify-center" />
```

## 🚀 Performance Optimization

### Lazy Loading Social Components
```tsx
import { lazy, Suspense } from 'react';

const SocialLinks = lazy(() => import('./components/common/SocialLinks'));

<Suspense fallback={<div>Loading social links...</div>}>
  <SocialLinks />
</Suspense>
```

### Preconnect to Social Platforms
Add to `<head>` for faster loading:
```html
<link rel="preconnect" href="https://github.com">
<link rel="preconnect" href="https://instagram.com">
<link rel="preconnect" href="https://linkedin.com">
<link rel="preconnect" href="https://x.com">
```

## 📱 Mobile Optimization

### Responsive Social Links
```tsx
<SocialLinks 
  className="flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4"
  iconSize={24}
  showLabels={true}
/>
```

### Touch-Friendly Spacing
```tsx
<SocialLinks 
  className="space-x-8 p-4" 
  iconSize={28}
/>
```

## 🔍 SEO Benefits

### Automatic Schema.org Integration
The social media links are automatically included in:
- Organization structured data
- Contact information schema
- Social media profile links

### Rich Snippets
Social media handles appear in:
- Google Business Profile connections
- Knowledge Graph panels
- Social media preview cards

## 📈 Best Practices

### 1. Consistent Branding
- Use the same handle across all platforms
- Maintain consistent profile information
- Use branded profile images

### 2. Regular Updates
- Keep social links active and updated
- Monitor for platform changes
- Update handles if they change

### 3. Accessibility
- Always include descriptive aria-labels
- Ensure sufficient color contrast
- Provide keyboard navigation support

---

For more information about social media integration, contact the IEEE MSIT Web Development Team.
