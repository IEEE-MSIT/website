import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Member } from '../../components/ui/MemberCard';
import MemberCard from '../../components/ui/MemberCard';
import EventCard from '../../components/ui/EventCard';
import { Event } from '../../types';
import { HOME_PATH } from '../../constants/paths';

interface ChapterPageProps {
  chapter: {
    name: string;
    shortName: string;
    logo: string;
    theme: string;
    mission: string;
    bgColor: string;
    borderColor: string;
    accentColor: string;
    textColor: string;
    members: Member[];
    events: Event[];
    achievements: string[];
  };
  chaptersList: { name: string; shortName: string; path: string }[];
}

const ChapterPage: React.FC<ChapterPageProps> = ({ chapter, chaptersList }) => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className={`py-20 px-4 md:px-6 ${chapter.bgColor} text-white`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Link
              to={HOME_PATH}
              className="inline-flex items-center gap-2 text-white hover:opacity-80 transition-opacity group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
          <div className="text-center">
            <img
              src={chapter.logo}
              alt={`${chapter.name} Logo`}
              className="w-24 h-24 mx-auto mb-6"
            />
            <h1 className="text-4xl md:text-6xl font-serif mb-4">{chapter.name}</h1>
            <p className="text-lg md:text-xl italic max-w-3xl mx-auto">{chapter.theme}</p>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center -mb-px">
            {chaptersList.map((c) => (
              <Link
                key={c.shortName}
                to={c.path}
                className={`py-4 px-6 text-sm font-medium border-b-2 transition-colors ${
                  c.shortName === chapter.shortName
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <main className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-black mb-6">Our Mission</h2>
            <div
              className={`bg-white border-l-4 ${chapter.borderColor} p-6 rounded-r-lg shadow-md`}
            >
              <p className="text-gray-700 leading-relaxed italic">{chapter.mission}</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-black mb-10">
              Executive Committee
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {chapter.members.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-black mb-10">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {chapter.achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <div className={`p-3 rounded-full ${chapter.bgColor} mr-4`}>
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-center text-black mb-10">Our Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chapter.events.length > 0 ? (
                chapter.events.map((event, index) => <EventCard key={index} event={event} />)
              ) : (
                <p className="text-center text-gray-500 col-span-full">No events to display.</p>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChapterPage;
