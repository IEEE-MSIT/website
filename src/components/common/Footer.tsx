import { Heart } from 'lucide-react';
import { footer } from '../../data/data';

const Footer = () => {
  return (
    <footer className="bg-foreground text-muted-foreground py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-4">IEEE MSIT</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              The IEEE Student Branch at Maharaja Surajmal Institute of Technology is dedicated to advancing technology for humanity. We provide a platform for students to learn, innovate, and network with professionals in the field.
            </p>
            <div className="flex items-center gap-2 text-sm">
              Made with <Heart className="w-4 h-4 text-heart-red" /> by the students of IEEE MSIT.
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {footer.quickLinks.map((link, index) => (
                <li key={index}><a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.text}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {footer.contact.map((contact, index) => (
                <li key={index}><a href={contact.href} className="text-gray-400 hover:text-white transition-colors">{contact.text}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} IEEE MSIT. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;