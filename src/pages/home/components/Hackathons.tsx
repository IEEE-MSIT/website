import { ExternalLink, Trophy, Users, MapPin, Clock, Award } from 'lucide-react';
import { hackathons } from '../../../data/data';
import type { HackathonWinner } from '../../../types';

const Hackathons = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Hackathons & Winners
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Innovation Through Competition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the brilliant minds and innovative solutions from our flagship hackathons
            and programming competitions.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-black mb-8 text-center">Past Hackathons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {hackathons.past.map((hackathon, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-500"
              >
                <div className="relative bg-gradient-to-br from-background to-white border-b border-gray-100 p-4 md:p-8">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <h3 className="text-xl md:text-3xl font-serif text-black group-hover:text-primary transition-colors">
                          {hackathon.name}
                        </h3>
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
                      <p className="text-gray-600 font-medium text-sm md:text-base">
                        {hackathon.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="bg-primary text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium mb-2">
                        {hackathon.duration}
                      </div>
                      <p className="text-xs text-gray-500">{hackathon.date}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-600">
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
                <div className="p-4 md:p-8">
                  <h4 className="text-lg md:text-xl font-serif text-black mb-4 md:mb-6">
                    🏆 Winning Teams
                  </h4>
                  {hackathon.winners.map((winner, winnerIndex) => (
                    <div
                      key={winnerIndex}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-3 md:mb-4 border border-amber-200 group/winner hover:shadow-md transition-all"
                    >
                      <div className="flex -space-x-2 md:-space-x-3">
                        {winner.members.map((member, memberIndex) => (
                          <div
                            key={memberIndex}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-3 border-white shadow-lg overflow-hidden"
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
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-amber-600" />
                          <span className="font-serif text-base md:text-lg text-black">
                            {winner.team}
                          </span>
                          <span className="text-xs md:text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-medium">
                            {winner.place}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-1 text-sm md:text-base">{winner.project}</p>
                        <p className="text-xs md:text-sm text-amber-700 font-semibold">
                          Prize: {winner.prize}
                        </p>
                      </div>
                      {(winner as HackathonWinner).projectLink && (
                        <a
                          href={(winner as HackathonWinner).projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-black mb-8 text-center">Upcoming Hackathons</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {hackathons.upcoming.map((hackathon, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative"
              >
                <div className="p-4 md:p-8">
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-3">
                      <h3 className="text-xl md:text-3xl font-serif text-white">
                        {hackathon.name}
                      </h3>
                      <a
                        href={hackathon.platformLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {hackathon.platform}
                      </a>
                    </div>
                    <p className="text-white/90 font-medium mb-2 md:mb-4 text-sm md:text-base">
                      {hackathon.tagline}
                    </p>
                    <p className="text-xs md:text-sm text-white/80">
                      {hackathon.date} • {hackathon.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-white/90 mb-6 md:mb-8">
                    <div className="flex items-center">
                      <Trophy className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span>{hackathon.prize}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span>{hackathon.participants}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                      <span>{hackathon.duration}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 md:gap-3">
                    <button className="bg-white text-primary px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100 transition-colors">
                      Get Notified
                    </button>
                    <button className="border-2 border-white/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
