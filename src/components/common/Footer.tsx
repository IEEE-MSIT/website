import { Heart, Github, Instagram, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { footer } from '../../data/data';
import SITE_CONFIG from '../../config/site';

const Footer = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return <Github className="w-5 h-5" />;
      case 'instagram':
        return <Instagram className="w-5 h-5" />;
      case 'linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'twitter':
        return <Twitter className="w-5 h-5" />;
      case 'facebook':
        return <Facebook className="w-5 h-5" />;
      case 'whatsapp':
        return <MessageCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-foreground text-muted-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-4">IEEE MSIT</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-2 text-sm mb-6">
              Made with <Heart className="w-4 h-4 text-heart-red" /> by the students of IEEE MSIT.
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              {Object.entries(SITE_CONFIG.social).map(([platform, data]) => (
                <a
                  key={platform}
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  aria-label={`Follow us on ${platform}`}
                >
                  {getSocialIcon(platform)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {footer.contact.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} IEEE MSIT. All Rights Reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
