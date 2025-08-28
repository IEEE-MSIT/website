import { useState, useEffect } from 'react';
import { Menu, ChevronDown, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOME_PATH } from '../../constants/paths';

const Header = () => {
  const [chaptersDropdownOpen, setChaptersDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.chapters-dropdown')) {
        setChaptersDropdownOpen(false);
      }
      // Close mobile menu when clicking outside
      if (!target.closest('.mobile-menu') && !target.closest('[aria-label="Toggle mobile menu"]')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setChaptersDropdownOpen(false);
  };

  return (
    <>
      <div className="w-full bg-black text-gray-200 text-xs md:text-sm py-2 px-4 md:px-6 fixed top-0 z-50">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-4 md:gap-6 items-center">
            <a
              href="https://www.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-mono tracking-wide"
            >
              IEEE.org
            </a>
            <a
              href="https://ieeexplore.ieee.org/Xplore/home.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-mono tracking-wide hidden md:inline"
            >
              IEEE Xplore Digital Library
            </a>
            <a
              href="https://standards.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-mono tracking-wide hidden md:inline"
            >
              IEEE Standards
            </a>
            <a
              href="https://www.ieee.org/sitemap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-mono tracking-wide hidden lg:inline"
            >
              More Sites
            </a>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <a
              href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoibFhLM1BhWDA4SGx6NVlQbUZSaEcwdURlMmljIiwic3VmZml4IjoiczZJRWJhLjE3NTY0OTc3NDQifQ..xBE9ZLiXx7ZKiIPwPSboBQ.hOxy1NWPnfGPrsDMo30i2TGFc-E7Zq4FNnbq9qrJiNVLllM0CF18K25dccOgRwOew0-jOazt22CXWNO0-mttKEAs5eHh26TngzICxwMVAPKczoo5qL5HABq5TP023EfahFEdCMu4y25V64O2XP2-Is_8HgyhV-mMZnYU8xD02hY.IpWnss_WvaOGY0VPZo68MQ&nonce=m4z66rQGGLt963uFGRh97xIfOI3Fu9hzTt3KYlxyTNs&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fpromo%3DJOINLITE%26style%3DSPECTRUM%26joinlite%3DTRUE&vnd_pi_application_name=MembershipApplication"
              target="_self"
              className="hover:text-white transition-colors font-mono tracking-wide"
            >
              Join IEEE
            </a>
            <div className="flex items-center gap-2">
              <img
                src="/IEEEWhiteLogowithTransparentBG.png"
                alt="IEEE Logo"
                className="h-5 md:h-6"
              />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex justify-between items-center px-6 py-4 bg-background fixed top-[40px] left-0 right-0 z-40 shadow-sm">
        <Link
          to={HOME_PATH}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img
            src="/IEEEWhiteLogowithTransparentBG.png"
            alt="IEEE Logo"
            className="w-8 h-8 hidden"
          />
          <h1 className="text-2xl font-serif text-black font-semibold">IEEE MSIT</h1>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            to="/about"
            className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
          >
            About
          </Link>
          <Link
            to="/events"
            className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
          >
            Events
          </Link>

          <div className="relative chapters-dropdown">
            <button
              onClick={() => setChaptersDropdownOpen(!chaptersDropdownOpen)}
              className="text-gray-700 hover:text-primary transition-colors font-medium text-sm flex items-center gap-1"
            >
              <span>Chapters</span>
              <ChevronDown
                className={`w-3 h-3 transition-transform ${chaptersDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {chaptersDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <a
                    href="#cs-chapter"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors text-sm"
                  >
                    Computer Society Chapter
                  </a>
                  <a
                    href="#pes-chapter"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors text-sm"
                  >
                    Power & Energy Society
                  </a>
                  <a
                    href="#wie-chapter"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors text-sm"
                  >
                    Women in Engineering
                  </a>
                  <a
                    href="#ras-chapter"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors text-sm"
                  >
                    Robotics & Automation Society
                  </a>
                </div>
              </div>
            )}
          </div>

          <Link
            to="/team"
            className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
          >
            Executive Board
          </Link>
          <a
            href="/faq"
            className="text-gray-700 hover:text-primary transition-colors font-medium text-sm"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden lg:inline-flex bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm"
          >
            Contact
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-primary/10 rounded-lg transition-all duration-200 border border-transparent hover:border-primary/20"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700 hover:text-primary transition-colors" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-20"
          onClick={closeMobileMenu}
          style={{ top: '88px' }}
        ></div>
      )}

      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[88px] left-0 right-0 bg-white border-t-2 border-primary shadow-xl z-30 max-h-[calc(100vh-88px)] overflow-y-auto animate-slide-down mobile-menu">
          <div className="px-6 py-6 space-y-2">
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium text-base"
            >
              About
            </Link>
            <a
              href="#events"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium text-base"
            >
              Events
            </a>

            <div className="chapters-dropdown">
              <button
                onClick={() => setChaptersDropdownOpen(!chaptersDropdownOpen)}
                className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium text-base"
              >
                <span>Chapters</span>
                <ChevronDown
                  className={`w-4 h-4 transition-all duration-200 ${chaptersDropdownOpen ? 'rotate-180 text-primary' : 'text-gray-500'}`}
                />
              </button>

              {chaptersDropdownOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-primary/20 pl-4">
                  <a
                    href="#cs-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Computer Society Chapter
                  </a>
                  <a
                    href="#ias-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Industry Applications Society
                  </a>
                  <a
                    href="#pes-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Power & Energy Society
                  </a>
                  <a
                    href="#wie-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Women in Engineering
                  </a>
                  <a
                    href="#ras-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Robotics & Automation Society
                  </a>
                  <a
                    href="#communications-chapter"
                    onClick={closeMobileMenu}
                    className="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 text-sm"
                  >
                    Communications Society
                  </a>
                </div>
              )}
            </div>

            <Link
              to="/team"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium text-base"
            >
              Team
            </Link>
            <a
              href="/faq"
              onClick={closeMobileMenu}
              className="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium text-base"
            >
              FAQ
            </a>

            <div className="pt-4 border-t border-gray-100">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-xl hover:from-primary-dark hover:to-primary transition-all duration-300 font-medium text-base text-center shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
