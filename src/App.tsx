import React, { useRef, useState } from 'react';
import { Menu, Heart, ArrowRight, Users, Coffee, Mic, PenTool, Award, Trophy, Camera, ExternalLink, ChevronLeft, ChevronRight, Linkedin, Calendar, Clock, MapPin, Eye } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { ChatBot } from '10xanswers';

function App() {
  const eventsCarouselRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('achievements2025');

  const scrollEventsCarousel = (direction: 'left' | 'right') => {
    if (eventsCarouselRef.current) {
      const scrollAmount = 620; // Width of card + gap
      const currentScroll = eventsCarouselRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      eventsCarouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="min-h-screen bg-[#FAF8F3] overflow-x-hidden z-50">

          <ChatBot
          chatComponentStyle={{
  "maxHeight": "580px",
  "height": "auto",
  "width": "350px",
  "margin": 0,
  "z-index": 999
}}
chatBotIconStyle={{
  "z-index": 999
}}
          chatWindowStyle={{
  "backgroundColor": "rgb(11 10 10)"
}}
          backendUrl="https://ask-10x-questions.vercel.app/"
          title="IEEE MSIT"
    draggable={false}
    startOpen={false}
    description="AI powered assistant here to help you with IEEE MSIT events, membership, and more."
    cta="Ask your questions!"
    prompt="You are an intelligent assistant for IEEE MSIT, a student technology society. Provide accurate, helpful, and concise answers about upcoming events, membership info, chapters, hackathons, leadership team, and society achievements. If unsure, direct users to official IEEE MSIT contacts.

IEEE MSIT Overview

IEEE MSIT is a vibrant student branch of the global IEEE organization dedicated to advancing technology for humanity. Based at Maharaja Surajmal Institute of Technology, New Delhi, IEEE MSIT offers students opportunities to develop technical skills, leadership, and professional networking through workshops, seminars, competitions, and collaborative projects.

The branch actively supports career development by organizing guest lectures, hackathons, and hands-on sessions in emerging technology fields. Students gain exposure to real-world industry trends and cultivate teamwork and leadership abilities.

Achievements and Awards

IEEE Region 10 Special Recognition of Student Branch Award 2023 among 1800 colleges across 23 countries.

Gold in Student Activities Committee Darrel Chong Award for extracurricular leadership 2023-24.

1st Prize in IEEE Day Photo Contest (STEM category), competing internationally among 160 countries.

Other notable awards include:

Larry K. Wilson Regional Student Activities Award

IEEE Regional Exemplary Student Branch Award

Outstanding Branch Counselor and Chapter Advisor Awards

These awards honor the dedication and excellence of IEEE MSIT members and leadership globally.

IEEE and Regional Context

IEEE: The world’s largest professional technical organization, originating in 1884, focused on innovation and technological advancement.

Asia-Pacific Region: A hub for innovation with active engagement from India.

IEEE India Council: Serves as the central body coordinating IEEE activities across India, managing events, educational outreach, and professional development.

Delhi Section: Part of the India Council, formed in 1976 with over 3,600 members and 100+ Student Branches including MSIT, DTU, IIT Delhi, NSIT, and MAIT.

Opportunities for Students

IEEE offers grants, scholarships, and contests recognizing outstanding student achievements. The Student Branch organizes contests to encourage innovation and leadership development.

Newsletters and Publications

ROBO TIDING (IEEE RAS MSIT)

SHESCRIPTS (IEEE WIE MSIT): Bite-sized tech news and updates designed for quick and informative reading."
    userIcon="static/images/logoImg.jpg"
    botIcon="static/images/logoImg2.jpg"
    stylizeTitle={{"emphasized":"IEEE","normal":"MSIT"}}
          />
        
      
      
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
          <a href="#chapters" className="text-gray-700 hover:text-[#C84C31] transition-colors font-medium text-sm">
            Chapters
          </a>
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

      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-[#FAF8F3] overflow-hidden pt-20">
        <div className="w-full max-w-6xl mx-auto px-6 py-8 h-full flex flex-col justify-center">
          
          {/* Logo and Title - Center Aligned */}
          <div className="text-center my-12">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-6xl md:text-8xl font-serif text-black mr-4">IEEE MSIT</h1>
              <img src="/IEEEWhiteLogowithTransparentBG.png" alt="IEEE Logo" className=" h-12 md:h-16 bg-black hidden sm:block" />
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
              <span className="italic">"Building Tomorrow's Tech Leaders" </span><span className='hidden md:block'> by IEEE MSIT</span>
            </div>
          </div>

          {/* Image at Bottom - Full Width */}
          <div className="w-full flex justify-center items-end mt-auto relative">
            <img src="/socratica.png" alt="IEEE MSIT Group" className="w-full h-auto object-cover" />
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
            A Community of <span className="text-[#C84C31]">Change-Makers</span>: <span className="text-[#E2B63D]">Engineers</span>, Designers, and <span className="text-[#A7B77F]">Leaders</span>
          </h2>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-16">
            Connecting ambitious minds through workshops, competitions, and research. We celebrate achievements, foster teamwork, and help students prepare for global impact.
          </p>

          {/* Achievements Section */}
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-serif text-black mb-12">Our Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Region 10 Award */}
              <div className="transform rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#C84C31] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-black">Region 10 Award</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Recognized for outstanding contribution to IEEE activities and student engagement in the Asia-Pacific region.
                  </p>
                </div>
              </div>

              {/* Darrel Chong Gold */}
              <div className="transform -rotate-1 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#E2B63D] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-black">Darrel Chong Gold</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Achieved gold recognition for exceptional leadership and innovation in student branch activities.
                  </p>
                </div>
              </div>

              {/* IEEE Day STEM Photo Contest */}
              <div className="transform rotate-2 hover:rotate-0 transition-transform">
                <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="w-16 h-16 bg-[#A7B77F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-black">IEEE Day STEM Photo Contest</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Winner of the global IEEE Day STEM photography competition showcasing innovation in action.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 leading-tight">
            Whether you're <em className="text-[#C84C31]">just starting out</em> or <em className="text-[#A7B77F]">far along</em>, this is a place for you.
          </h2>
          
          {/* Tilted infinite scrolling carousel */}
          <div className="mb-12 py-8 h-max transform rotate-2 overflow-hidden w-full">
            <Marquee speed={30} gradient={false} pauseOnHover={true} className="w-full">
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Workshop - Students collaborating on engineering projects"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Workshop";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Conference - Technical presentation and networking"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Conference";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Research - Circuit board and electronics development"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Research";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Innovation - Computer programming and coding"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Innovation";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Technology - AI and Robotics demonstration"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Technology";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Engineering - Mechanical and electrical systems"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Engineering";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Networking - Professional development and mentorship"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Networking";
                  }}
                />
              </div>
              <div className="mx-4">
                <img 
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IEEE Competition - Hackathon and technical challenges"
                  className="w-80 h-60 object-cover bg-gray-100 rounded-lg shadow-lg"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/800x600/e5e7eb/6b7280?text=IEEE+Competition";
                  }}
                />
              </div>
            </Marquee>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From technical workshops to innovation challenges, IEEE MSIT provides countless opportunities for growth, learning, and making meaningful connections in the world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C84C31] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Upcoming Events
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-6">
              Join Our <span className="text-[#C84C31]">Technical</span> Events & <span className="text-[#A7B77F]">Workshops</span>
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              From hands-on workshops to industry conferences, discover opportunities to learn, network, and advance your engineering career.
            </p>
          </div>
          
          {/* Desktop Carousel + Mobile Grid */}
          <div className="relative">
            {/* Navigation Arrows - Desktop Only */}
            <button 
              onClick={() => scrollEventsCarousel('left')}
              className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button 
              onClick={() => scrollEventsCarousel('right')}
              className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors items-center justify-center"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
            
            {/* Desktop Carousel Container */}
            <div 
              ref={eventsCarouselRef}
              className="hidden lg:block overflow-x-auto scrollbar-hide mx-12"
            >
              <div className="flex gap-6 pb-4 w-max">
                
                {/* Event Card 1 - Featured */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#C84C31]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    {/* Left Date Section */}
                    <div className="bg-gradient-to-br from-[#C84C31] to-[#A7441C] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">AUG</div>
                      <div className="text-4xl font-bold">25</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    {/* Right Content Section */}
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              ROBO WARS 2025: National Robotics Championship
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              The ultimate battleground for student-built robots. Design, build, and compete with autonomous and remote-controlled robots in various technical challenges.
                            </p>
                          </div>
                          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">Featured</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#C84C31]" />
                            <span>9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#C84C31]" />
                            <span>Main Ground, MSIT Campus</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#C84C31]">IEEE RAS MSIT</span>
                          <span className="text-xs text-gray-500">Prize Pool: ₹1,00,000</span>
                        </div>
                        <button className="bg-[#C84C31] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#A7441C] transition-colors shadow-md hover:shadow-lg">
                          Register Team
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#A7B77F]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    <div className="bg-gradient-to-br from-[#A7B77F] to-[#8a9a5b] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP</div>
                      <div className="text-4xl font-bold">05</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              Women in Tech Leadership Workshop
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              Empowering women engineers through skill development, networking, and leadership training. Official launch of our monthly SHESCRIPTS newsletter.
                            </p>
                          </div>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">Free</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#A7B77F]" />
                            <span>2:00 PM - 5:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#A7B77F]" />
                            <span>Seminar Hall 2, MSIT</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#A7B77F]">IEEE WIE MSIT</span>
                          <span className="text-xs text-gray-500">50 Seats Available</span>
                        </div>
                        <button className="border-2 border-[#A7B77F] text-[#A7B77F] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#A7B77F] hover:text-white transition-colors">
                          Join Workshop
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#3d8499]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    <div className="bg-gradient-to-br from-[#3d8499] to-[#2a5f6f] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP</div>
                      <div className="text-4xl font-bold">12</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              CodeFest MSIT: Programming Marathon
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              Intensive coding competition featuring algorithmic challenges, data structures problems, and real-world programming scenarios.
                            </p>
                          </div>
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">₹100</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#3d8499]" />
                            <span>10:00 AM - 3:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#3d8499]" />
                            <span>Computer Lab A & B</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#3d8499]">IEEE Computer Society</span>
                          <span className="text-xs text-gray-500">Prizes worth ₹50,000</span>
                        </div>
                        <button className="border-2 border-[#3d8499] text-[#3d8499] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#3d8499] hover:text-white transition-colors">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 4 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#8a9a5b]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    <div className="bg-gradient-to-br from-[#8a9a5b] to-[#6b7a44] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP</div>
                      <div className="text-4xl font-bold">20</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              Smart Grid & Renewable Energy Symposium
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              Industry experts discuss latest trends in sustainable energy, smart grid technologies, and power system innovations.
                            </p>
                          </div>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">Free</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#8a9a5b]" />
                            <span>11:00 AM - 4:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#8a9a5b]" />
                            <span>Main Auditorium</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#8a9a5b]">IEEE PES MSIT</span>
                          <span className="text-xs text-gray-500">5 Industry Speakers</span>
                        </div>
                        <button className="border-2 border-[#8a9a5b] text-[#8a9a5b] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#8a9a5b] hover:text-white transition-colors">
                          Reserve Seat
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 5 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#a96e58]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    <div className="bg-gradient-to-br from-[#a96e58] to-[#8a5444] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">OCT</div>
                      <div className="text-4xl font-bold">05</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              TechnoVation Hackathon 2025
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              48-hour hackathon focusing on solutions for social impact. Build innovative tech products addressing real-world challenges.
                            </p>
                          </div>
                          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">Team Event</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#a96e58]" />
                            <span>Oct 5-6, Full Weekend</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#a96e58]" />
                            <span>Innovation Hub, MSIT</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#a96e58]">IEEE MSIT</span>
                          <span className="text-xs text-gray-500">Prizes worth ₹1,00,000</span>
                        </div>
                        <button className="border-2 border-[#a96e58] text-[#a96e58] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#a96e58] hover:text-white transition-colors">
                          Form Team
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Card 6 */}
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#5b6a9a]  w-[580px] flex-shrink-0">
                  <div className="flex">
                    <div className="bg-gradient-to-br from-[#5b6a9a] to-[#4a5882] text-white p-6 flex flex-col items-center justify-center min-w-[120px]">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">OCT</div>
                      <div className="text-4xl font-bold">15</div>
                      <div className="text-xs font-medium opacity-90">2025</div>
                    </div>
                    
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              Industry Connect: Alumni Career Fair
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              Meet successful IEEE MSIT alumni working in top tech companies. Career guidance sessions and networking opportunities.
                            </p>
                          </div>
                          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium flex-shrink-0">Networking</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-[#5b6a9a]" />
                            <span>3:00 PM - 7:00 PM</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-[#5b6a9a]" />
                            <span>Conference Hall & Lobby</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-[#5b6a9a]">IEEE MSIT</span>
                          <span className="text-xs text-gray-500">50+ Alumni Attending</span>
                        </div>
                        <button className="border-2 border-[#5b6a9a] text-[#5b6a9a] px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-[#5b6a9a] hover:text-white transition-colors">
                          RSVP Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* Mobile/Tablet Horizontal Scroll Layout */}
            <div className="lg:hidden">
              {/* Mobile carousel container with horizontal scroll */}
              <div className="overflow-x-auto scrollbar-hide px-4 -mx-4">
                <div className="flex gap-4 pb-4 w-max">
                  
                  {/* Mobile Event Card 1 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#C84C31] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#C84C31] to-[#A7441C] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">Featured</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">AUG 25, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">ROBO WARS 2025</h3>
                      <p className="text-xs opacity-90">National Robotics Championship</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        The ultimate battleground for student-built robots. Design, build, and compete with autonomous robots.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#C84C31]" />
                          <span>9:00 AM - 6:00 PM</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#C84C31]" />
                          <span>Main Ground, MSIT</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#C84C31]">IEEE RAS MSIT</span>
                          <span className="text-xs text-gray-500">Prize: ₹1,00,000</span>
                        </div>
                        <button className="bg-[#C84C31] text-white px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#A7441C] transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Event Card 2 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#A7B77F] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#A7B77F] to-[#8a9a5b] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">Free</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP 05, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">Women in Tech</h3>
                      <p className="text-xs opacity-90">Leadership Workshop</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Empowering women engineers through skill development and leadership training.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#A7B77F]" />
                          <span>2:00 PM - 5:00 PM</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#A7B77F]" />
                          <span>Seminar Hall 2</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#A7B77F]">IEEE WIE MSIT</span>
                          <span className="text-xs text-gray-500">50 Seats</span>
                        </div>
                        <button className="border-2 border-[#A7B77F] text-[#A7B77F] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#A7B77F] hover:text-white transition-colors">
                          Join
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Event Card 3 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#3d8499] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#3d8499] to-[#2a5f6f] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">₹100</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP 12, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">CodeFest MSIT</h3>
                      <p className="text-xs opacity-90">Programming Marathon</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Intensive coding competition with algorithmic challenges and real-world scenarios.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#3d8499]" />
                          <span>10:00 AM - 3:00 PM</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#3d8499]" />
                          <span>Computer Labs</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#3d8499]">IEEE CS</span>
                          <span className="text-xs text-gray-500">₹50,000 Prizes</span>
                        </div>
                        <button className="border-2 border-[#3d8499] text-[#3d8499] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#3d8499] hover:text-white transition-colors">
                          Register
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Event Card 4 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#a96e58] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#a96e58] to-[#8a5444] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">Team</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">OCT 05-06, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">TechnoVation</h3>
                      <p className="text-xs opacity-90">48-Hour Hackathon</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Build innovative tech products addressing real-world social challenges.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#a96e58]" />
                          <span>Full Weekend</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#a96e58]" />
                          <span>Innovation Hub</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#a96e58]">IEEE MSIT</span>
                          <span className="text-xs text-gray-500">₹1,00,000 Prizes</span>
                        </div>
                        <button className="border-2 border-[#a96e58] text-[#a96e58] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#a96e58] hover:text-white transition-colors">
                          Form Team
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Event Card 5 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#8a9a5b] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#8a9a5b] to-[#6b7a44] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">Free</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">SEP 20, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">Smart Grid</h3>
                      <p className="text-xs opacity-90">Energy Symposium</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Industry experts discuss latest trends in sustainable energy and smart grid technologies.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#8a9a5b]" />
                          <span>11:00 AM - 4:00 PM</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#8a9a5b]" />
                          <span>Main Auditorium</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#8a9a5b]">IEEE PES MSIT</span>
                          <span className="text-xs text-gray-500">5 Speakers</span>
                        </div>
                        <button className="border-2 border-[#8a9a5b] text-[#8a9a5b] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#8a9a5b] hover:text-white transition-colors">
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Event Card 6 */}
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-[#5b6a9a] hover:-translate-y-1 w-[320px] flex-shrink-0">
                    <div className="h-40 bg-gradient-to-br from-[#5b6a9a] to-[#4a5882] text-white p-4 flex flex-col justify-center relative">
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">Network</span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">OCT 15, 2025</div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">Alumni Connect</h3>
                      <p className="text-xs opacity-90">Career Fair</p>
                    </div>
                    
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        Meet successful IEEE MSIT alumni working in top tech companies. Career guidance and networking.
                      </p>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-[#5b6a9a]" />
                          <span>3:00 PM - 7:00 PM</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-[#5b6a9a]" />
                          <span>Conference Hall</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-[#5b6a9a]">IEEE MSIT</span>
                          <span className="text-xs text-gray-500">50+ Alumni</span>
                        </div>
                        <button className="border-2 border-[#5b6a9a] text-[#5b6a9a] px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-[#5b6a9a] hover:text-white transition-colors">
                          RSVP
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* Mobile scroll indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  <span>Swipe to see more events</span>
                </div>
              </div>
            </div>
          </div>

          {/* Show All Events Button */}
          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
              <Eye className="w-5 h-5" />
              Show All Events
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Chapter Highlights Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-[#A7B77F] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Chapter Highlights
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-16">
            Explore Our IEEE Societies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* IEEE RAS */}
            <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#3d8499] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80"
                  alt="Robotics & Automation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">Robotics & Automation Society</h3>
                  <p className="text-sm mt-2 text-white/95 line-clamp-4">
                    Advancing the theory and practice of robotics, automation, and intelligent systems through our ROBO TIDING newsletter and cutting-edge workshops.
                  </p>
                </div>
                <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* IEEE WIE */}
            <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#5b6a9a] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80"
                  alt="Women in Engineering"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">Women in Engineering</h3>
                  <p className="text-sm mt-2 text-white/95 line-clamp-4">
                    Empowering women in technology through SHESCRIPTS newsletter, mentorship programs, and professional development opportunities.
                  </p>
                </div>
                <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* IEEE PES */}
            <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#8a9a5b] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1524749292158-7540c2494485?auto=format&fit=crop&w=800&q=80"
                  alt="Power & Energy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">Power & Energy Society</h3>
                  <p className="text-sm mt-2 text-white/95 line-clamp-4">
                    Focusing on sustainable energy solutions, power systems, and electrical engineering innovations for a greener future.
                  </p>
                </div>
                <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                  Learn More →
                </button>
              </div>
            </div>
            
            {/* IEEE Computer Society */}
            <div className="group relative rounded-2xl h-96 p-6 flex flex-col justify-between bg-[#a96e58] text-white shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&w=800&q=80"
                  alt="Computer Society"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 z-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="relative z-10 flex flex-col justify-between h-full" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.4)'}}>
                <div>
                  <h3 className="font-serif text-3xl font-bold leading-tight">Computer Society</h3>
                  <p className="text-sm mt-2 text-white/95 line-clamp-4">
                    Advancing computing and information technology through programming competitions, AI workshops, and software development projects.
                  </p>
                </div>
                <button className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20 self-start">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Each chapter provides unique opportunities for learning, networking, and professional development in specialized engineering fields.
            </p>
          </div>
        </div>
      </section>

      {/* Hackathons & Winners Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#C84C31] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Hackathons & Winners
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
              Innovation Through Competition
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celebrating the brilliant minds and innovative solutions from our flagship hackathons and programming competitions.
            </p>
          </div>

          {/* Past Hackathons */}
          <div className="mb-16">
            <h3 className="text-2xl font-serif text-black mb-8 text-center">Past Hackathons</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* TechnoVation Hackathon 2024 */}
              <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#C84C31] transition-all duration-500">
                {/* Header with platform link */}
                <div className="relative bg-gradient-to-br from-[#FAF8F3] to-white border-b border-gray-100 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-serif text-black group-hover:text-[#C84C31] transition-colors">
                          TechnoVation 2024
                        </h3>
                        <a 
                          href="https://dorahacks.io/hackathon/technovation-2024" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          DoraHacks
                        </a>
                      </div>
                      <p className="text-gray-600 font-medium">Social Impact Hackathon</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-[#C84C31] text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                        48 Hours
                      </div>
                      <p className="text-xs text-gray-500">March 15-17, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#C84C31]" />
                      <span>Innovation Hub, MSIT</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-[#C84C31]" />
                      <span>₹2,00,000 Prize Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-[#C84C31]" />
                      <span>150+ Participants</span>
                    </div>
                  </div>
                </div>
                
                {/* Winners Section */}
                <div className="p-8">
                  <h4 className="text-xl font-serif text-black mb-6">🏆 Winning Teams</h4>
                  
                  {/* Winner 1 - Gold */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-4 border border-amber-200 group/winner hover:shadow-md transition-all">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="font-serif text-lg text-black">Team EcoSmart</span>
                        <span className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">1st Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">Smart Waste Management System</p>
                      <p className="text-sm text-amber-700 font-semibold">Prize: ₹1,00,000</p>
                    </div>
                    <a 
                      href="https://dorahacks.io/buidl/12345/project-ecosmart" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C84C31] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Winner 2 - Silver */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl mb-4 border border-gray-200 group/winner hover:shadow-md transition-all">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-gray-600" />
                        <span className="font-serif text-lg text-black">Team HealthTech</span>
                        <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">2nd Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">AI-Powered Health Monitoring</p>
                      <p className="text-sm text-gray-700 font-semibold">Prize: ₹60,000</p>
                    </div>
                    <a 
                      href="https://dorahacks.io/buidl/12346/project-healthtech" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C84C31] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Winner 3 - Bronze */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 group/winner hover:shadow-md transition-all">
                    <div className="flex -space-x-3">
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-12 h-12 rounded-full border-3 border-white shadow-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-orange-600" />
                        <span className="font-serif text-lg text-black">Team EduFlow</span>
                        <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">3rd Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">Interactive Learning Platform</p>
                      <p className="text-sm text-orange-700 font-semibold">Prize: ₹40,000</p>
                    </div>
                    <a 
                      href="https://dorahacks.io/buidl/12347/project-eduflow" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#C84C31] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CodeFest 2024 */}
              <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#3d8499] transition-all duration-500">
                {/* Header with platform link */}
                <div className="relative bg-gradient-to-br from-[#FAF8F3] to-white border-b border-gray-100 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-serif text-black group-hover:text-[#3d8499] transition-colors">
                          CodeFest 2024
                        </h3>
                        <a 
                          href="https://devfolio.co/projects/codefest-2024" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-purple-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          Devfolio
                        </a>
                      </div>
                      <p className="text-gray-600 font-medium">Programming Marathon</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-[#3d8499] text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                        5 Hours
                      </div>
                      <p className="text-xs text-gray-500">September 10, 2024</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#3d8499]" />
                      <span>Computer Labs A & B</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-[#3d8499]" />
                      <span>₹50,000 Prize Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-[#3d8499]" />
                      <span>80+ Coders</span>
                    </div>
                  </div>
                </div>
                
                {/* Winners Section */}
                <div className="p-8">
                  <h4 className="text-xl font-serif text-black mb-6">🏆 Top Performers</h4>
                  
                  {/* Winner 1 - Gold */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-4 border border-amber-200 group/winner hover:shadow-md transition-all">
                    <div className="w-14 h-14 rounded-full border-3 border-amber-400 shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" alt="Winner" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="font-serif text-lg text-black">Arjun Sharma</span>
                        <span className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">1st Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">95% Problems Solved • CSE Final Year</p>
                      <p className="text-sm text-amber-700 font-semibold">Prize: ₹25,000</p>
                    </div>
                    <div className="text-3xl">🥇</div>
                  </div>

                  {/* Winner 2 - Silver */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl mb-4 border border-gray-200 group/winner hover:shadow-md transition-all">
                    <div className="w-14 h-14 rounded-full border-3 border-gray-400 shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=150&q=80" alt="Winner" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-gray-600" />
                        <span className="font-serif text-lg text-black">Priya Patel</span>
                        <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">2nd Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">87% Problems Solved • ECE 3rd Year</p>
                      <p className="text-sm text-gray-700 font-semibold">Prize: ₹15,000</p>
                    </div>
                    <div className="text-3xl">🥈</div>
                  </div>

                  {/* Winner 3 - Bronze */}
                  <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 group/winner hover:shadow-md transition-all">
                    <div className="w-14 h-14 rounded-full border-3 border-orange-400 shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Winner" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Award className="w-5 h-5 text-orange-600" />
                        <span className="font-serif text-lg text-black">Rohit Kumar</span>
                        <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">3rd Place</span>
                      </div>
                      <p className="text-gray-700 mb-1">82% Problems Solved • IT 2nd Year</p>
                      <p className="text-sm text-orange-700 font-semibold">Prize: ₹10,000</p>
                    </div>
                    <div className="text-3xl">🥉</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Hackathons */}
          <div>
            <h3 className="text-2xl font-serif text-black mb-8 text-center">Upcoming Hackathons</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* TechnoVation 2025 */}
              <div className="group bg-gradient-to-br from-[#C84C31] to-[#A7441C] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    Registration Opens Soon
                  </span>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-serif text-white">
                        TechnoVation 2025
                      </h3>
                      <a 
                        href="https://dorahacks.io/hackathon/technovation-2025" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        DoraHacks
                      </a>
                    </div>
                    <p className="text-white/90 font-medium mb-4">AI & Sustainability Focus</p>
                    <p className="text-sm text-white/80">October 5-7, 2025 • Innovation Hub, MSIT</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 mb-8">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span>₹3,00,000 Prize Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>200+ Expected</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>48 Hours</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="bg-white text-[#C84C31] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Get Notified
                    </button>
                    <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* CodeFest 2025 */}
              <div className="group bg-gradient-to-br from-[#3d8499] to-[#2a5f6f] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative">
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                    Coming November
                  </span>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-3xl font-serif text-white">
                        CodeFest 2025
                      </h3>
                      <a 
                        href="https://devfolio.co/projects/codefest-2025" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Devfolio
                      </a>
                    </div>
                    <p className="text-white/90 font-medium mb-4">Advanced Algorithms & Data Structures</p>
                    <p className="text-sm text-white/80">November 15, 2025 • Computer Labs & Online</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 mb-8">
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span>₹75,000 Prize Pool</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>100+ Expected</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>6 Hours</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="bg-white text-[#3d8499] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      Get Notified
                    </button>
                    <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Execom Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#A7B77F] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
              Achievements & Leadership
            </h2>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 p-1 rounded-lg flex flex-wrap">
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'achievements2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2025')}
              >
                Achievements 2025
              </button>
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'achievements2024' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2024')}
              >
                Achievements 2024
              </button>
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'execom2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2025')}
              >
                Execom 2025
              </button>
              <button 
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'execom2024' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2024')}
              >
                Execom 2024
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="relative">
            {/* Achievements 2025 */}
            {activeTab === 'achievements2025' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-yellow-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">IEEE Student Branch Excellence Award</h3>
                      <p className="text-yellow-700 text-sm font-medium">National Level • 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Achieved outstanding performance in technical events, community outreach, and membership growth, ranking among top 10 IEEE student branches in India.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">TechnoVation Hackathon Champion</h3>
                      <p className="text-blue-700 text-sm font-medium">Regional Winner • 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Successfully organized and executed the largest student hackathon in Delhi NCR with 200+ participants and ₹3L+ prize pool.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">WIE Outstanding Chapter Award</h3>
                      <p className="text-green-700 text-sm font-medium">International • 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Recognized globally for exceptional initiatives in promoting women in engineering and STEM education outreach programs.
                  </p>
                </div>
              </div>
            )}

            {/* Achievements 2024 */}
            {activeTab === 'achievements2024' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-purple-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">Best Innovation Project Award</h3>
                      <p className="text-purple-700 text-sm font-medium">IEEE India Council • 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    AI-powered smart campus management system won the national IEEE competition, showcasing cutting-edge IoT and machine learning integration.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-red-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">Community Impact Excellence</h3>
                      <p className="text-red-700 text-sm font-medium">IEEE Region 10 • 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Impacted 5000+ students through tech workshops, digital literacy programs, and rural education initiatives across Delhi NCR.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Trophy className="w-8 h-8 text-cyan-600 mr-3" />
                    <div>
                      <h3 className="font-serif text-lg text-black">CodeFest Programming Championship</h3>
                      <p className="text-cyan-700 text-sm font-medium">Inter-University • 2024</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Organized the most competitive programming contest in the region with 100+ universities participating and industry mentorship.
                  </p>
                </div>
              </div>
            )}

            {/* Execom 2025 */}
            {activeTab === 'execom2025' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* President */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#C84C31] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#C84C31] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                        alt="Rajesh Kumar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Rajesh Kumar</h3>
                    <p className="text-[#C84C31] font-medium text-sm mb-2">President</p>
                    <p className="text-gray-600 text-xs mb-4">CSE • Final Year</p>
                    <a 
                      href="https://linkedin.com/in/rajesh-kumar-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Vice President */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#A7B77F] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#A7B77F] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=200&q=80"
                        alt="Priya Sharma"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Priya Sharma</h3>
                    <p className="text-[#A7B77F] font-medium text-sm mb-2">Vice President</p>
                    <p className="text-gray-600 text-xs mb-4">ECE • Final Year</p>
                    <a 
                      href="https://linkedin.com/in/priya-sharma-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Technical Secretary */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#3d8499] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#3d8499] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
                        alt="Arjun Patel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Arjun Patel</h3>
                    <p className="text-[#3d8499] font-medium text-sm mb-2">Technical Secretary</p>
                    <p className="text-gray-600 text-xs mb-4">CSE • 3rd Year</p>
                    <a 
                      href="https://linkedin.com/in/arjun-patel-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* General Secretary */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#8a9a5b] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#8a9a5b] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80"
                        alt="Sneha Gupta"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Sneha Gupta</h3>
                    <p className="text-[#8a9a5b] font-medium text-sm mb-2">General Secretary</p>
                    <p className="text-gray-600 text-xs mb-4">IT • 3rd Year</p>
                    <a 
                      href="https://linkedin.com/in/sneha-gupta-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Treasurer */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#a96e58] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#a96e58] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                        alt="Vikram Singh"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Vikram Singh</h3>
                    <p className="text-[#a96e58] font-medium text-sm mb-2">Treasurer</p>
                    <p className="text-gray-600 text-xs mb-4">ME • 3rd Year</p>
                    <a 
                      href="https://linkedin.com/in/vikram-singh-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Event Coordinator */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#5b6a9a] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#5b6a9a] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80"
                        alt="Ananya Reddy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Ananya Reddy</h3>
                    <p className="text-[#5b6a9a] font-medium text-sm mb-2">Event Coordinator</p>
                    <p className="text-gray-600 text-xs mb-4">EE • 2nd Year</p>
                    <a 
                      href="https://linkedin.com/in/ananya-reddy-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* PR & Marketing Head */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#C84C31] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#C84C31] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
                        alt="Rohit Verma"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Rohit Verma</h3>
                    <p className="text-[#C84C31] font-medium text-sm mb-2">PR & Marketing Head</p>
                    <p className="text-gray-600 text-xs mb-4">CSE • 2nd Year</p>
                    <a 
                      href="https://linkedin.com/in/rohit-verma-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                {/* Web Development Lead */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#3d8499] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#3d8499] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=200&q=80"
                        alt="Kavya Joshi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Kavya Joshi</h3>
                    <p className="text-[#3d8499] font-medium text-sm mb-2">Web Development Lead</p>
                    <p className="text-gray-600 text-xs mb-4">IT • 2nd Year</p>
                    <a 
                      href="https://linkedin.com/in/kavya-joshi-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Execom 2024 */}
            {activeTab === 'execom2024' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* Previous Year Leadership */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#C84C31] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#C84C31] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=200&q=80"
                        alt="Amit Krishnan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Amit Krishnan</h3>
                    <p className="text-[#C84C31] font-medium text-sm mb-2">President (2024)</p>
                    <p className="text-gray-600 text-xs mb-4">CSE • Alumni</p>
                    <a 
                      href="https://linkedin.com/in/amit-krishnan-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#A7B77F] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#A7B77F] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&q=80"
                        alt="Divya Agarwal"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Divya Agarwal</h3>
                    <p className="text-[#A7B77F] font-medium text-sm mb-2">Vice President (2024)</p>
                    <p className="text-gray-600 text-xs mb-4">ECE • Alumni</p>
                    <a 
                      href="https://linkedin.com/in/divya-agarwal-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#3d8499] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#3d8499] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1566492031773-4f4e44671d66?auto=format&fit=crop&w=200&q=80"
                        alt="Karan Malhotra"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Karan Malhotra</h3>
                    <p className="text-[#3d8499] font-medium text-sm mb-2">Technical Secretary (2024)</p>
                    <p className="text-gray-600 text-xs mb-4">CSE • Alumni</p>
                    <a 
                      href="https://linkedin.com/in/karan-malhotra-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-[#8a9a5b] transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-[#8a9a5b] transition-colors">
                      <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                        alt="Meera Nair"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-lg text-black mb-1">Meera Nair</h3>
                    <p className="text-[#8a9a5b] font-medium text-sm mb-2">General Secretary (2024)</p>
                    <p className="text-gray-600 text-xs mb-4">IT • Alumni</p>
                    <a 
                      href="https://linkedin.com/in/meera-nair-ieee" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-3 h-3" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            )}
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
      {/* <section className="py-20 px-6 bg-gradient-to-br from-[#FAF8F3] to-[#F5F2E8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-black mb-8 leading-relaxed">
            We like helping <em className="text-[#C84C31]">good people</em> do <em className="text-[#A7B77F]">great things</em>. Got an extra minute? We have more to say.
          </h2>
          
          <button className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium">
            Why Do What We Do
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-16 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">IEEE MSIT</h2>
            <p className="text-lg text-gray-400">Advancing Technology for Humanity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Our Community */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Our Community</h3>
              <ul className="space-y-3 text-gray-400">
                <li>MSIT, New Delhi</li>
                <li>IEEE Delhi Section</li>
                <li>IEEE Region 10 (Asia-Pacific)</li>
                <li>IEEE India Council</li>
              </ul>
            </div>
            
            {/* Page Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Page Links</h3>
              <ul className="space-y-3">
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
                <li><a href="#chapters" className="hover:text-white transition-colors">Chapters</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#newsletters" className="hover:text-white transition-colors">Newsletters</a></li>
                <li><a href="#join" className="hover:text-white transition-colors">Join</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Stay Connected */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Stay Connected</h3>
              <p className="text-gray-400 mb-4">Subscribe for IEEE MSIT Updates and Highlights.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-l-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-black px-5 py-3 rounded-r-full hover:bg-gray-200 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 6c-.8.35-1.65.58-2.5.68.9-.54 1.6-1.4 1.9-2.4-.85.5-1.8 .86-2.8 1.07C18.2 4.4 17.1 4 16 4c-2.2 0-4 1.8-4 4 0 .3.04.6.1.9-3.3-.17-6.2-1.7-8.2-4.1-.35.6-.55 1.3-.55 2.1 0 1.4.7 2.6 1.8 3.3-.65-.02-1.25-.2-1.8-.5v.05c0 1.9 1.4 3.5 3.2 3.9-.33.1-.68.15-1.04.15-.25 0-.5-.02-.74-.07.5 1.6 1.9 2.7 3.6 2.7-1.4 1.1-3.1 1.7-5 1.7-.32 0-.64-.02-.95-.05 1.8 1.15 3.9 1.8 6.1 1.8 7.3 0 11.3-6.05 11.3-11.3v-.5c.8-.58 1.5-1.3 2-2.1z" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.42 9.88V15.17H8.03v-3.1h2.39v-2.3c0-2.36 1.4-3.66 3.56-3.66 1.02 0 2.05.18 2.05.18v2.64h-1.3c-1.14 0-1.5.68-1.5 1.44v1.7h2.96l-.48 3.1h-2.48v6.71C18.34 21.13 22 16.99 22 12z" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500">
            <p>&copy; 2025 IEEE MSIT. Advancing Technology for Humanity.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;