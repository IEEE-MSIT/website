import React from 'react';
import { ArrowLeft, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Member } from '../../components/ui/MemberCard';
import MemberCard from '../../components/ui/MemberCard';
import EventCard from '../../components/ui/EventCard';
import type { Event } from '../../types';
import { HOME_PATH } from '../../constants/paths';
import Chapter from './ChapterTypes';

interface ChapterPageProps {
  chapter: Chapter;
  chaptersList: { name: string; shortName: string; path: string }[];
}

const ChapterPage: React.FC<ChapterPageProps> = ({ chapter, chaptersList }) => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section>
        <div
          className={`relative bg-gradient-to-b ${chapter.bgColor} text-white shadow-lg border-b-8 ${chapter.borderColor}`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)',
          }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 pb-32">
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
              <div
                className="mx-auto mb-6 inline-block rounded-full p-4 shadow-lg border-4 border-white/30"
                style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(6px)' }}
              >
                <div className={`${chapter.accentColor} rounded-full p-4 inline-block mb-0`}>
                  <img
                    src={chapter.logo}
                    alt={`${chapter.name} Logo`}
                    className="w-auto max-w-[96px] h-auto block"
                  />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif mb-4" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.5)' }}>
                {chapter.name}
              </h1>
              <p className="text-lg md:text-xl italic max-w-3xl mx-auto" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}>
                {chapter.theme}
              </p>
            </div>
          </div>
        </div>
      </section>

      <nav className="bg-white border-b border-gray-200 -mt-16 relative z-10">
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
            <div className={`bg-white border-l-4 ${chapter.borderColor} p-6 rounded-r-lg shadow-md`}>
              <p className="text-gray-700 leading-relaxed italic">{chapter.mission}</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-black mb-10">Executive Committee</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {chapter.members.map((member: Member, index: number) => (
                <MemberCard key={index} member={member} />
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-serif text-center text-black mb-10">Achievements</h2>
            {chapter.achievements.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {chapter.achievements.map((achievement: string, index: number) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center mb-4">
                      <Trophy className="w-8 h-8 text-yellow-600 mr-3" />
                      <div>
                        <h3 className="font-serif text-lg text-black">{achievement}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      A notable accomplishment by the {chapter.name} chapter, showcasing their dedication and excellence.
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 col-span-full">This chapter's achievements will be updated soon.</p>
            )}
          </section>

          <section>
            <h2 className="text-3xl font-serif text-center text-black mb-10">Our Events</h2>
              {(() => {
                const upcoming = chapter.events.filter((e) => String((e as any).status).toLowerCase() !== 'completed');
                const completed = chapter.events.filter((e) => String((e as any).status).toLowerCase() === 'completed');

                return (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                      {upcoming.length > 0 ? (
                        upcoming.map((event: Event, index: number) => (
                          <div key={`up-${index}`} className="h-full flex">
                            <EventCard event={event} className="flex-1" />
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-gray-500 col-span-full">No upcoming events for this chapter.</p>
                      )}
                    </div>

                    {completed.length > 0 && (
                      <div className="mt-12">
                        <h3 className="text-2xl font-serif text-center text-gray-700 mb-6">Past Events</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {completed.map((event: Event, index: number) => (
                            <div key={`past-${index}`} className="h-full flex opacity-90">
                              <EventCard event={event} className="flex-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ChapterPage;
