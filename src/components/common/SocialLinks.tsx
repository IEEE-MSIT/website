import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import SITE_CONFIG from '../../config/site';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'footer' | 'header';
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 24,
  showLabels = false,
  orientation = 'horizontal',
  variant = 'default'
}) => {
  const socialPlatforms = [
    {
      name: 'GitHub',
      url: SITE_CONFIG.social.github.url,
      icon: Github,
      handle: SITE_CONFIG.social.github.handle,
      color: 'hover:text-gray-900'
    },
    {
      name: 'Instagram',
      url: SITE_CONFIG.social.instagram.url,
      icon: Instagram,
      handle: SITE_CONFIG.social.instagram.handle,
      color: 'hover:text-pink-600'
    },
    {
      name: 'LinkedIn',
      url: SITE_CONFIG.social.linkedin.url,
      icon: Linkedin,
      handle: SITE_CONFIG.social.linkedin.handle,
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      url: SITE_CONFIG.social.twitter.url,
      icon: Twitter,
      handle: SITE_CONFIG.social.twitter.handle,
      color: 'hover:text-blue-400'
    }
  ];

  const baseClasses = orientation === 'horizontal' 
    ? 'flex items-center space-x-4' 
    : 'flex flex-col space-y-4';

  const linkClasses = variant === 'footer' 
    ? 'text-gray-400 hover:text-white transition-colors duration-200'
    : variant === 'header'
    ? 'text-gray-600 hover:text-blue-600 transition-colors duration-200'
    : 'text-gray-600 hover:text-gray-900 transition-colors duration-200';

  return (
    <div className={`${baseClasses} ${className}`}>
      {socialPlatforms.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClasses} ${platform.color} flex items-center space-x-2 group`}
            aria-label={`Follow us on ${platform.name}`}
            title={`${platform.name} - ${platform.handle}`}
          >
            <IconComponent size={iconSize} />
            {showLabels && (
              <span className="text-sm font-medium group-hover:underline">
                {platform.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
