import { ExternalLink, Trophy, Users, MapPin, Clock, Award } from 'lucide-react';

const Hackathons = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* TechnoVation Hackathon 2024 */}
            <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-[#C84C31] transition-all duration-500">
              {/* Header with platform link */}
              <div className="relative bg-gradient-to-br from-[#FAF8F3] to-white border-b border-gray-100 p-4 md:p-8">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <h3 className="text-xl md:text-3xl font-serif text-black group-hover:text-[#C84C31] transition-colors">
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
                    <p className="text-gray-600 font-medium text-sm md:text-base">Social Impact Hackathon</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-[#C84C31] text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2">
                      48 Hours
                    </div>
                    <p className="text-xs text-gray-500">March 15-17, 2024</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
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
              <div className="p-4 md:p-8">
                <h4 className="text-lg md:text-xl font-serif text-black mb-4 md:mb-6">🏆 Winning Teams</h4>
                
                {/* Winner 1 - Gold */}
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-3 md:mb-4 border border-amber-200 group/winner hover:shadow-md transition-all">
                  <div className="flex -space-x-2 md:-space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1494790108755-2616b4b03069?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                      <span className="font-serif text-base md:text-lg text-black">Team EcoSmart</span>
                      <span className="text-xs md:text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">1st Place</span>
                    </div>
                    <p className="text-gray-700 mb-1 text-sm md:text-base">Smart Waste Management System</p>
                    <p className="text-xs md:text-sm text-amber-700 font-semibold">Prize: ₹1,00,000</p>
                  </div>
                  <a 
                    href="https://dorahacks.io/buidl/12345/project-ecosmart" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#C84C31] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>

                {/* Winner 2 - Silver */}
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl mb-3 md:mb-4 border border-gray-200 group/winner hover:shadow-md transition-all">
                  <div className="flex -space-x-2 md:-space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                      <span className="font-serif text-base md:text-lg text-black">Team HealthTech</span>
                      <span className="text-xs md:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-medium">2nd Place</span>
                    </div>
                    <p className="text-gray-700 mb-1 text-sm md:text-base">AI-Powered Health Monitoring</p>
                    <p className="text-xs md:text-sm text-gray-700 font-semibold">Prize: ₹60,000</p>
                  </div>
                  <a 
                    href="https://dorahacks.io/buidl/12346/project-healthtech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#C84C31] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>

                {/* Winner 3 - Bronze */}
                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl border border-orange-200 group/winner hover:shadow-md transition-all">
                  <div className="flex -space-x-2 md:-space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&w=150&q=80" alt="Team member" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                      <span className="font-serif text-base md:text-lg text-black">Team EduFlow</span>
                      <span className="text-xs md:text-sm bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">3rd Place</span>
                    </div>
                    <p className="text-gray-700 mb-1 text-sm md:text-base">Interactive Learning Platform</p>
                    <p className="text-xs md:text-sm text-orange-700 font-semibold">Prize: ₹40,000</p>
                  </div>
                  <a 
                    href="https://dorahacks.io/buidl/12347/project-eduflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#C84C31] transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            
            {/* TechnoVation 2025 */}
            <div className="group bg-gradient-to-br from-[#C84C31] to-[#A7441C] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                {/* <span className="bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                  Registration Opens Soon
                </span> */}
              </div>
              
              <div className="p-4 md:p-8">
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-3">
                    <h3 className="text-xl md:text-3xl font-serif text-white">
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
                  <p className="text-white/90 font-medium mb-2 md:mb-4 text-sm md:text-base">AI & Sustainability Focus</p>
                  <p className="text-xs md:text-sm text-white/80">October 5-7, 2025 • Innovation Hub, MSIT</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-white/90 mb-6 md:mb-8">
                  <div className="flex items-center">
                    <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>₹3,00,000 Prize Pool</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>200+ Expected</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>48 Hours</span>
                  </div>
                </div>
                
                <div className="flex gap-2 md:gap-3">
                  <button className="bg-white text-[#C84C31] px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition-colors">
                    Get Notified
                  </button>
                  <button className="border-2 border-white/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* CodeFest 2025 */}
            <div className="group bg-gradient-to-br from-[#3d8499] to-[#2a5f6f] text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative">
              <div className="absolute top-3 md:top-4 right-3 md:right-4">
                {/* <span className="bg-white/20 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full text-xs font-medium">
                  Coming November
                </span> */}
              </div>
              
              <div className="p-4 md:p-8">
                <div className="mb-4 md:mb-6">
                  <div className="flex items-center gap-2 md:gap-3 mb-3">
                    <h3 className="text-xl md:text-3xl font-serif text-white">
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
                  <p className="text-white/90 font-medium mb-2 md:mb-4 text-sm md:text-base">Advanced Algorithms & Data Structures</p>
                  <p className="text-xs md:text-sm text-white/80">November 15, 2025 • Computer Labs & Online</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-white/90 mb-6 md:mb-8">
                  <div className="flex items-center">
                    <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>₹75,000 Prize Pool</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>100+ Expected</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                    <span>6 Hours</span>
                  </div>
                </div>
                
                <div className="flex gap-2 md:gap-3">
                  <button className="bg-white text-[#3d8499] px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition-colors">
                    Get Notified
                  </button>
                  <button className="border-2 border-white/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
