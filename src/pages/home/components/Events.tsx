import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin, Eye, Trophy, Users, Award, ExternalLink } from 'lucide-react';
import { events, pastHackathons } from '../../../data/data';
import type { HackathonWinner } from '../../../types';

const Events = () => {
  const eventsCarouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400; // Define scroll amount in pixels

  const scrollEventsCarousel = (direction: 'left' | 'right') => {
    if (eventsCarouselRef.current) {
      const currentScroll = eventsCarouselRef.current.scrollLeft;
      const targetScroll =
        direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount;

      eventsCarouselRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Events & Hackathons
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-6">
            Join Our <span className="text-primary">Technical</span> Events &{' '}
            <span className="text-tertiary">Hackathons</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From hands-on workshops to competitive hackathons, discover opportunities to learn,
            network, build innovative solutions, and advance your engineering career.
          </p>
        </div>

        <div className="relative">
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

          <div
            ref={eventsCarouselRef}
            className="hidden lg:block overflow-x-auto scrollbar-hide mx-12"
          >
            <div className="flex gap-6 pb-4 w-max">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 w-[580px] flex-shrink-0`}
                >
                  <div className="flex">
                    <div
                      className={`bg-gradient-to-br ${event.featured ? 'from-primary to-primary-dark' : 'from-tertiary to-tertiary-dark'} text-white p-6 flex flex-col items-center justify-center min-w-[120px]`}
                    >
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">
                        {event.date.month}
                      </div>
                      <div className="text-4xl font-bold">{event.date.day}</div>
                      <div className="text-xs font-medium opacity-90">{event.date.year}</div>
                    </div>
                    <div className="flex-1 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1 pr-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium flex-shrink-0 ${event.featured ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}
                          >
                            {event.category}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 gap-2 mb-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-2 text-primary" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-4 h-4 mr-2 text-primary" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-primary">
                            {event.society}
                          </span>
                          <span className="text-xs text-gray-500">{event.prize}</span>
                        </div>
                        <button
                          className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-md hover:shadow-lg ${event.featured ? 'bg-primary text-white hover:bg-primary-dark' : 'border-tertiary text-tertiary hover:bg-tertiary hover:text-white'}`}
                        >
                          {event.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide px-4 -mx-4">
              <div className="flex gap-4 pb-4 w-max">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[320px] flex-shrink-0"
                  >
                    <div
                      className={`h-40 bg-gradient-to-br ${event.featured ? 'from-primary to-primary-dark' : 'from-tertiary to-tertiary-dark'} text-white p-4 flex flex-col justify-center relative`}
                    >
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                          {event.category}
                        </span>
                      </div>
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">
                        {event.date.month} {event.date.day}, {event.date.year}
                      </div>
                      <h3 className="text-lg font-bold mt-1 mb-1 leading-tight">{event.title}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                        {event.description}
                      </p>
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1 text-primary" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-xs font-semibold text-primary">
                            {event.society}
                          </span>
                          <span className="text-xs text-gray-500">{event.prize}</span>
                        </div>
                        <button
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${event.featured ? 'bg-primary text-white hover:bg-primary-dark' : 'border-tertiary text-tertiary hover:bg-tertiary hover:text-white'}`}
                        >
                          {event.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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

        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors font-medium flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl">
            <Eye className="w-5 h-5" />
            Show All Events
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Past Hackathon Winners Section */}
        <div className="mt-20 border-t border-gray-200 pt-20">
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Past Champions
            </div>
            <h3 className="text-3xl sm:text-4xl font-serif text-black mb-6">
              Hackathon <span className="text-primary">Winners</span> & <span className="text-tertiary">Innovations</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Celebrating the brilliant minds and innovative solutions from our flagship hackathons and programming competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastHackathons.map((hackathon, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-500"
              >
                <div className="relative bg-gradient-to-br from-background to-white border-b border-gray-100 p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-2xl font-serif text-black group-hover:text-primary transition-colors">
                          {hackathon.name}
                        </h4>
                        <a
                          href={hackathon.platformLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          {hackathon.platform}
                        </a>
                      </div>
                      <p className="text-gray-600 font-medium">
                        {hackathon.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-2">
                        {hackathon.duration}
                      </div>
                      <p className="text-xs text-gray-500">{hackathon.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      <span>{hackathon.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-4 h-4 mr-2 text-primary" />
                      <span>{hackathon.prize}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      <span>{hackathon.participants}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-serif text-black mb-6">
                    🏆 Winning Teams
                  </h5>
                  {hackathon.winners.map((winner, winnerIndex) => (
                    <div
                      key={winnerIndex}
                      className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-4 border border-amber-200 group/winner hover:shadow-md transition-all"
                    >
                      <div className="flex -space-x-2">
                        {winner.members.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="w-10 h-10 rounded-full border-2 border-white shadow-lg overflow-hidden"
                          >
                            <img
                              src={member}
                              alt="Team member"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Award className="w-4 h-4 text-amber-600" />
                          <span className="font-serif text-lg text-black">
                            {winner.team}
                          </span>
                          <span className="bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full text-xs font-medium">
                            {winner.place}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{winner.project}</p>
                        <p className="text-xs font-semibold text-primary">{winner.prize}</p>
                      </div>
                      {(winner as HackathonWinner).projectLink && (
                        <a
                          href={(winner as HackathonWinner).projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-amber-600 hover:text-amber-800 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
