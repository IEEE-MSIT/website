import { useState, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [chaptersDropdownOpen, setChaptersDropdownOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.chapters-dropdown')) {
        setChaptersDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* IEEE Global Bar */}
      <div className="w-full bg-black text-gray-200 text-xs md:text-sm py-2 px-4 md:px-6 fixed top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-4 md:gap-6 items-center">
            <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono tracking-wide">
              IEEE.org
            </a>
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono tracking-wide hidden md:inline">
              IEEE Xplore Digital Library
            </a>
            <a href="https://standards.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono tracking-wide hidden md:inline">
              IEEE Standards
            </a>
            <a href="https://www.ieee.org/sitemap.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono tracking-wide hidden lg:inline">
              More Sites
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoibFhLM1BhWDA4SGx6NVlQbUZSaEcwdURlMmljIiwic3VmZml4IjoiczZJRWJhLjE3NTY0OTc3NDQifQ..xBE9ZLiXx7ZKiIPwPSboBQ.hOxy1NWPnfGPrsDMo30i2TGFc-E7Zq4FNnbq9qrJiNVLllM0CF18K25dccOgRwOew0-jOazt22CXWNO0-mttKEAs5eHh26TngzICxwMVAPKczoo5qL5HABq5TP023EfahFEdCMu4y25V64O2XP2-Is_8HgyhV-mMZnYU8xD02hY.IpWnss_WvaOGY0VPZo68MQ&nonce=m4z66rQGGLt963uFGRh97xIfOI3Fu9hzTt3KYlxyTNs&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fpromo%3DJOINLITE%26style%3DSPECTRUM%26joinlite%3DTRUE&vnd_pi_application_name=MembershipApplication" target="_self" className="hover:text-white transition-colors font-mono tracking-wide">
              Join IEEE
            </a>
            <div className="flex items-center gap-2">
              <img src="/IEEEWhiteLogowithTransparentBG.png" alt="IEEE Logo" className="h-5 md:h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-4 bg-[#FAF8F3] fixed top-[40px] left-0 right-0 z-40 shadow-sm">
        {/* Left side - IEEE MSIT Logo and Title */}
        <div className="flex items-center gap-2">
          <img src="/IEEEWhiteLogowithTransparentBG.png" alt="IEEE Logo" className="w-8 h-8 hidden" />
          <h1 className="text-2xl font-serif text-black font-semibold">IEEE MSIT</h1>
        </div>
        
        {/* Center - Navigation Links (hidden on mobile) */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm">
            About
          </a>
          <a href="#events" className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm">
            Events
          </a>
          
          {/* Chapters Dropdown */}
          <div className="relative chapters-dropdown">
            <button 
              onClick={() => setChaptersDropdownOpen(!chaptersDropdownOpen)}
              className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm flex items-center gap-1"
            >
              <span>Chapters</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${chaptersDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {chaptersDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <a href="#cs-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Computer Society Chapter
                  </a>
                  <a href="#ias-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Industry Applications Society
                  </a>
                  <a href="#pes-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Power & Energy Society
                  </a>
                  <a href="#wie-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Women in Engineering
                  </a>
                  <a href="#ras-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Robotics & Automation Society
                  </a>
                  <a href="#communications-chapter" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#C84C31] transition-colors text-sm">
                    Communications Society
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <a href="#team" className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm">
            Team
          </a>
          <a href="#join" className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm">
            Join Us
          </a>
        </div>
        
        {/* Right side - Contact CTA and Mobile Menu */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden lg:inline-flex bg-[#C84C31] text-white px-4 py-2 rounded-full hover:bg-[#A73A26] transition-colors font-medium text-sm">
            Contact
          </a>
          
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 hover:bg-black/5 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;
