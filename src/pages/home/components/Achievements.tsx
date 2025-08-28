import { useState } from 'react';
import { Award, Trophy } from 'lucide-react';
import { achievements } from '../../../data/data';

interface Achievement {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const Achievements = () => {
  const [activeTab, setActiveTab] = useState('2025');

  const renderAchievement = (achievement: Achievement, index: number) => (
    <div
      key={index}
      className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all"
    >
      <div className="flex items-center mb-4">
        {achievement.icon === 'Award' ? (
          <Award className="w-8 h-8 text-yellow-600 mr-3" />
        ) : (
          <Trophy className="w-8 h-8 text-blue-600 mr-3" />
        )}
        <div>
          <h3 className="font-serif text-lg text-black">{achievement.title}</h3>
          <p className="text-yellow-700 text-sm font-medium">{achievement.subtitle}</p>
        </div>
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">{achievement.description}</p>
    </div>
  );

  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Success Story
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating our milestones in technical excellence, community impact, and innovation
            leadership
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveTab('2025')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 will-change-transform ${
                activeTab === '2025'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:scale-105'
              }`}
            >
              Achievements 2025
            </button>
            <button
              onClick={() => setActiveTab('2024')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 will-change-transform ${
                activeTab === '2024'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary hover:text-primary hover:scale-105'
              }`}
            >
              Achievements 2024
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === '2025' && achievements[2025].map(renderAchievement)}
          {activeTab === '2024' && achievements[2024].map(renderAchievement)}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
