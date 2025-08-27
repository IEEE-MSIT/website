import { useState } from 'react';
import { Award, Trophy, Linkedin } from 'lucide-react';

const Team = () => {
  const [activeTab, setActiveTab] = useState('execom2025');

  return (
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
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-gray-100 p-1 rounded-lg w-full max-w-2xl">
            {/* Mobile: Stacked 2x2 Grid */}
            <div className="grid grid-cols-2 gap-1 sm:hidden">
              <button 
                className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'achievements2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2025')}
              >
                Achievements 2025
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'achievements2024' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2024')}
              >
                Achievements 2024
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'execom2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2025')}
              >
                Execom 2025
              </button>
              <button 
                className={`px-3 py-2 rounded-md text-xs font-medium transition-all ${
                  activeTab === 'execom2024' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2024')}
              >
                Execom 2024
              </button>
            </div>
            
            {/* Desktop: Single Row */}
            <div className="hidden sm:flex flex-wrap justify-center gap-1">
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'achievements2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2025')}
              >
                Achievements 2025
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'achievements2024' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('achievements2024')}
              >
                Achievements 2024
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'execom2025' 
                    ? 'bg-black text-white' 
                    : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2025')}
              >
                Execom 2025
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
