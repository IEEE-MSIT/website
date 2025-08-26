import React from 'react';
import { Menu, Heart, ArrowRight, Users, Coffee, Mic, PenTool } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      {/* IEEE Global Bar */}
      <div className="w-full bg-black text-gray-200 text-xs md:text-sm py-2 px-4 md:px-6 sticky top-0 z-50">
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
      <nav className="flex justify-between items-center px-6 py-4 bg-[#FAF8F3] sticky top-[40px] z-40 shadow-sm">
        <div></div>
        <div className="flex items-center gap-2">
          <img src="/IEEEWhiteLogowithTransparentBG.png" alt="IEEE Logo" className="w-8 h-8" />
          <h1 className="text-2xl font-serif text-black font-semibold">IEEE MSIT</h1>
        </div>
        <button className="p-2 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#FAF8F3] overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 py-8 h-full flex flex-col justify-center">
          
          {/* Logo and Title - Center Aligned */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-6xl md:text-8xl font-serif text-black mr-4">IEEE MSIT</h1>
              <img src="/IEEEWhiteLogowithTransparentBG.png" alt="IEEE Logo" className=" h-12 md:h-16 bg-black" />
            </div>
          </div>

          {/* Two Content Boxes */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            
            {/* Left Box - Subtitle and Main Buttons */}
            <div className="flex-1 text-left">
              <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                We advance technology for <em className="border-b-2 border-dashed border-[#00629B]">humanity at MSIT</em> and empower innovators, makers, and leaders through <em className="border-b-2 border-dashed border-[#00629B]">engineering excellence</em>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#events" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium text-sm flex items-center gap-2 w-fit">
                  <ArrowRight className="w-4 h-4" /> EXPLORE EVENTS
                </a>
                <a href="#join" className="border border-gray-400 text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium text-sm flex items-center gap-2 w-fit">
                  <Users className="w-4 h-4" /> JOIN THE SOCIETY
                </a>
              </div>
            </div>

            {/* Right Box - Empty for spacing */}
            <div className="flex-1 flex items-end justify-end gap-1">
              <span className="italic">"Building Tomorrow's Tech Leaders" </span> by IEEE MSIT
            </div>
          </div>

          {/* Image at Bottom - Center Aligned */}
          <div className="w-full flex justify-center items-end mt-auto relative">
            <img src="/socratica.png" alt="IEEE MSIT Group" className="w-full max-w-5xl h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#C84C31] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            What We Are
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
            A celebration of <span className="text-[#C84C31]">makers</span>, <span className="text-[#E2B63D]">artists</span>, engineers, designers, and <span className="text-[#A7B77F]">writers</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Socratica is more than just a co-working space—it's a community where creative minds come together to push boundaries, share ideas, and bring their most ambitious projects to life. Every week, we gather to create something meaningful.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
            Whether you're <em className="text-[#C84C31]">just starting out</em> or <em className="text-[#A7B77F]">far along</em>, this is a place for you.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform rotate-2 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="People collaborating"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="transform -rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Creative workspace"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="transform rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Team working together"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#A7B77F] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            How It Works
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-16">
            Our Weekly Structure
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E2B63D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Introductions 👋</h3>
              <p className="text-gray-600">Meet fellow creators and share what you're working on</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C84C31] rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Work Blocks ✍️💻</h3>
              <p className="text-gray-600">Two focused 50-minute sessions to dive deep</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#A7B77F] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Open Demos 🎤</h3>
              <p className="text-gray-600">Share your progress and get feedback</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E2B63D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Snacks 🍊</h3>
              <p className="text-gray-600">Fuel up and connect with the community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="transform rotate-3 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Collaborative work"
                className="w-full h-48 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>
            <div className="transform -rotate-2 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Team meeting"
                className="w-full h-48 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>
            <div className="transform rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Creative session"
                className="w-full h-48 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>
            <div className="transform -rotate-1 hover:rotate-0 transition-transform">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Working together"
                className="w-full h-48 object-cover rounded-lg shadow-lg border-4 border-white"
              />
            </div>
          </div>
          
          <div className="inline-flex items-center bg-[#C84C31] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#A73A26] transition-colors cursor-pointer">
            Join Us <Heart className="w-5 h-5 ml-2 fill-current" />
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#FAF8F3] to-[#F5F2E8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 leading-relaxed">
            We like helping <em className="text-[#C84C31]">good people</em> do <em className="text-[#A7B77F]">great things</em>. Got an extra minute? We have more to say.
          </h2>
          
          <button className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
            Why Do What We Do
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E2D2D] text-[#F1F1F1] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-serif mb-4">Socratica</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#E2B63D]">Friends of Socratica</h3>
              <ul className="space-y-2 text-gray-300">
                <li>San Francisco</li>
                <li>New York</li>
                <li>London</li>
                <li>Berlin</li>
                <li>Tokyo</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#A7B77F]">Page Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Attend a Session</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Donate</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-[#C84C31]">Stay Connected</h3>
              <p className="text-gray-300 mb-4">Join our newsletter for updates and community highlights.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-gray-600"
                />
                <button className="bg-[#C84C31] px-6 py-3 rounded-r-full hover:bg-[#A73A26] transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Socratica. Building community, one session at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;