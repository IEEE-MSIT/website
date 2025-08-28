import { useState } from 'react';
import { Linkedin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { team } from '../../../data/data';
import { TEAM_PATH } from '../../../constants/paths';

interface Member {
  name: string;
  position: string;
  branch: string;
  image: string;
  linkedin: string;
}

const Team = () => {
  const [activeTab, setActiveTab] = useState('execom2025');

  const renderMember = (member: Member, index: number) => (
    <div
      key={index}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all duration-300 group"
    >
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-200 group-hover:border-primary transition-colors">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-serif text-lg text-black mb-1">{member.name}</h3>
        <p className="text-primary text-sm font-medium mb-1">{member.position}</p>
        <p className="text-gray-500 text-xs mb-4">{member.branch}</p>
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-colors text-primary"
        >
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Executive Committee
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated leaders driving innovation and excellence at IEEE MSIT
          </p>
        </div>

        <div className="flex justify-center mb-8 px-4">
          <div className="bg-gray-100 p-1 rounded-lg w-full max-w-2xl">
            <div className="flex flex-wrap justify-center gap-1">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'execom2025' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2025')}
              >
                Execom 2025
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'execom2024' ? 'bg-black text-white' : 'text-gray-600 hover:text-black'
                }`}
                onClick={() => setActiveTab('execom2024')}
              >
                Execom 2024
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-[400px]">
          {activeTab === 'execom2025' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.execom2025.map(renderMember)}
            </div>
          )}
          {activeTab === 'execom2024' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {team.execom2024.map(renderMember)}
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <Link
            to={TEAM_PATH}
            className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 w-fit mx-auto"
          >
            <Users className="w-4 h-4" />
            View All Execom Members
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
