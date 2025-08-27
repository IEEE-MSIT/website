import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin, Eye } from 'lucide-react';

const Events = () => {
  const eventsCarouselRef = useRef<HTMLDivElement>(null);

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
  );
};

export default Events;
