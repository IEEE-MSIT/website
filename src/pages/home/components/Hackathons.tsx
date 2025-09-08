import {
  ExternalLink,
  Trophy,
  Users,
  MapPin,
  Clock,
  Award,
  Info,
  X,
  ArrowRight,
  Eye,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { hackathons } from '../../../data/data';

const Hackathons = () => {
  const [selectedHackathon, setSelectedHackathon] = useState<any>(null);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Hackathons & Innovation
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
            Innovation Through Competition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating innovation and empowering women in technology through our successful HackWie
            3.0 - a women-centric hackathon that brought together brilliant minds for 24 hours of
            creativity and problem-solving.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-serif text-black mb-8 text-center">Our Hackathons</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
            {hackathons.past.map((hackathon, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-500 h-full relative"
              >
                <div className="relative bg-gradient-to-br from-background to-white border-b border-gray-100 p-4 md:p-8">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 md:gap-3 mb-2">
                        <h3 className="text-xl md:text-3xl font-serif text-black group-hover:text-primary transition-colors">
                          {hackathon.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 font-medium text-sm md:text-base">
                        {hackathon.tagline}
                      </p>
                    </div>
                    <div className="text-right">
                      <a
                        href={hackathon.platformLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center  gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors mb-2"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {hackathon.platform}
                      </a>

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
                    {hackathon.organizer && (
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-primary" />
                        <span>{hackathon.organizer}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative p-4 md:p-8">
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <h4 className="text-lg md:text-xl font-serif text-black">Winning Teams</h4>
                    <button
                      onClick={() => setSelectedHackathon(hackathon)}
                      className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                    >
                      <Info className="w-4 h-4" />
                      More Details
                    </button>
                  </div>
                  {hackathon.winners.map((winner, winnerIndex) => (
                    <div
                      key={winnerIndex}
                      className="flex items-center gap-3 md:gap-4 p-3 md:p-5 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl mb-3 md:mb-4 border border-amber-200 group/winner hover:shadow-md transition-all"
                    >
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
                      {winner.projectLink && (
                        <a
                          href={winner.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary transition-colors"
                          title="View Project"
                        >
                          <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {hackathons.upcoming.map((hackathon, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 relative h-min"
              >
                <div className="absolute inset-0 opacity-10">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
                    alt="Hackathon background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative p-4 md:p-8 h-full flex flex-col">
                  <div className="mb-4 md:mb-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-3">
                      <h3 className="text-xl md:text-3xl font-serif text-white">
                        {hackathon.name}
                      </h3>
                      <div className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </div>
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
                    {hackathon.organizer && (
                      <div className="flex items-center">
                        <Award className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        <span>{hackathon.organizer}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-auto">
                    <div className="flex gap-2 md:gap-3 mb-4">
                      <button
                        className="border-2 border-white/30 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-medium opacity-90 cursor-not-allowed flex items-center gap-2"
                        disabled
                        title="Coming Soon"
                      >
                        <ExternalLink className="w-4 h-4 opacity-60" />
                        Coming Soon
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedHackathon && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-6 md:p-8">
              <button
                onClick={() => setSelectedHackathon(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="pr-8">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-serif text-black">{selectedHackathon.name}</h2>
                  <a
                    href={selectedHackathon.platformLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {selectedHackathon.platform}
                  </a>
                </div>

                <p className="text-gray-600 text-lg mb-6">{selectedHackathon.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-xl font-serif text-black mb-4">Event Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-primary" />
                        <span>
                          {selectedHackathon.duration} • {selectedHackathon.date}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-primary" />
                        <span>{selectedHackathon.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Trophy className="w-5 h-5 mr-3 text-primary" />
                        <span>{selectedHackathon.prize}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 mr-3 text-primary" />
                        <span>{selectedHackathon.participants}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-5 h-5 mr-3 text-primary" />
                        <span>{selectedHackathon.organizer}</span>
                      </div>
                    </div>
                  </div>

                  {selectedHackathon.technologies && (
                    <div>
                      <h3 className="text-xl font-serif text-black mb-4">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedHackathon.technologies.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedHackathon.judges && (
                  <div className="mb-8">
                    <h3 className="text-xl font-serif text-black mb-4">Our Amazing Judges</h3>
                    <div className="space-y-2">
                      {selectedHackathon.judges.map((judge: string, index: number) => (
                        <div key={index} className="text-gray-700 text-sm">
                          • {judge}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-serif text-black mb-4">Winners</h3>
                  <div className="space-y-4">
                    {selectedHackathon.winners.map((winner: any, index: number) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-xl border border-amber-200"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Award className="w-5 h-5 text-amber-600" />
                              <span className="font-serif text-lg text-black">{winner.team}</span>
                              <span className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-sm font-medium">
                                {winner.place}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-2">{winner.project}</p>
                            <p className="text-amber-700 font-semibold">Prize: {winner.prize}</p>
                          </div>
                          {winner.projectLink && (
                            <a
                              href={winner.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-400 hover:text-primary transition-colors ml-4"
                              title="View Project"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedHackathon.images && (
                  <div className="mt-8">
                    <h3 className="text-xl font-serif text-black mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {selectedHackathon.images.map((image: string, index: number) => (
                        <div
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                        >
                          <img
                            src={image}
                            alt={`${selectedHackathon.name} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-12">
        <Link
          to="/events"
          className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 mx-auto w-max"
        >
          <Eye className="w-4 h-4" />
          Show All Events
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default Hackathons;
