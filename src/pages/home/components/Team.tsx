import { useState } from 'react';
import { Award, Trophy, Linkedin } from 'lucide-react';
import { team, achievements } from '../../../data/data';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

interface Member {
  name: string;
  position: string;
  branch: string;
  image: string;
  linkedin: string;
}

const Team = () => {
  const [activeTab, setActiveTab] = useState('execom2025');

  const renderAchievement = (achievement: Achievement, index: number) => (
    <div key={index} className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-center mb-4">
        {achievement.icon === 'Award' ? <Award className="w-8 h-8 text-yellow-600 mr-3" /> : <Trophy className="w-8 h-8 text-blue-600 mr-3" />}
        <div>
          <h3 className="font-serif text-lg text-black">{achievement.title}</h3>
          <p className="text-yellow-700 text-sm font-medium">{achievement.subtitle}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">
        {achievement.description}
      </p>
    </div>
  );

  const renderMember = (member: Member, index: number) => (
    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-primary transition-colors">
          <img 
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-serif text-lg text-black mb-1">{member.name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
        <p className="text-gray-600 text-xs mb-4">{member.branch}</p>
        <a 
          href={member.linkedin}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors"
        >
          <Linkedin className="w-3 h-3" />
          LinkedIn
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-tertiary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Achievements & Leadership
          </h2>
        </div>
        
        <div className="flex justify-center mb-8 px-4">
          <div className="bg-gray-100 p-1 rounded-lg w-full max-w-2xl">
            <div className="hidden sm:flex flex-wrap justify-center gap-1">
              <button className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'achievements2025' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setActiveTab('achievements2025')}>Achievements 2025</button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'achievements2024' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setActiveTab('achievements2024')}>Achievements 2024</button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'execom2025' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setActiveTab('execom2025')}>Execom 2025</button>
              <button className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeTab === 'execom2024' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'}`} onClick={() => setActiveTab('execom2024')}>Execom 2024</button>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {activeTab === 'achievements2025' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{achievements[2025].map(renderAchievement)}</div>}
          {activeTab === 'achievements2024' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{achievements[2024].map(renderAchievement)}</div>}
          {activeTab === 'execom2025' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{team.execom2025.map(renderMember)}</div>}
          {activeTab === 'execom2024' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{team.execom2024.map(renderMember)}</div>}
        </div>
      </div>
    </section>
  );
};

export default Team;
