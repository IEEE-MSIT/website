import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin, Eye, Users, Trophy } from 'lucide-react';
import { events } from '../../../data/data';

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
            Upcoming Events
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-6">
            Join Our <span className="text-primary">Technical</span> Events &{' '}
            <span className="text-tertiary">Workshops</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            From hands-on workshops to industry conferences, discover opportunities to learn,
            network, and advance your engineering career.
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

          {/* Desktop View */}
          <div
            ref={eventsCarouselRef}
            className="hidden lg:block overflow-x-auto scrollbar-hide mx-12"
          >
            <div className="flex gap-6 pb-4 w-max">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[400px] h-[500px] flex-shrink-0 shadow-lg group"
                >
                  {/* Full Height Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/400x500/e5e7eb/6b7280?text=Event+Image';
                    }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Top Content */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="text-white">
                      <div className="text-xs font-medium opacity-90 uppercase tracking-wide">
                        {event.date.month}
                      </div>
                      <div className="text-2xl font-bold">{event.date.day}</div>
                      <div className="text-xs font-medium opacity-90">{event.date.year}</div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        event.featured 
                          ? 'bg-primary/90 text-white' 
                          : 'bg-white/90 text-gray-800'
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-lg font-bold mb-2 leading-tight line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-1 mb-4">
                      <div className="flex items-center text-sm text-white/80">
                        <Clock className="w-4 h-4 mr-2 text-white flex-shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <MapPin className="w-4 h-4 mr-2 text-white flex-shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-white/80">
                        <Users className="w-4 h-4 mr-2 text-white flex-shrink-0" />
                        <span className="truncate">{event.society}</span>
                      </div>
                      <div className="flex items-center text-sm text-secondary font-medium">
                        <Trophy className="w-4 h-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{event.prize}</span>
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      className={`w-full py-3 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-sm ${
                        event.featured
                          ? 'bg-primary/90 text-white hover:bg-primary shadow-md hover:shadow-lg'
                          : 'bg-tertiary/90 text-white hover:bg-tertiary shadow-md hover:shadow-lg'
                      }`}
                    >
                      {event.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide px-4 -mx-4">
              <div className="flex gap-4 pb-4 w-max">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 w-[300px] h-[400px] flex-shrink-0 shadow-lg group"
                  >
                    {/* Full Height Image */}
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/300x400/e5e7eb/6b7280?text=Event+Image';
                      }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    
                    {/* Top Content */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <div className="text-white">
                        <div className="text-xs font-medium opacity-90 uppercase tracking-wide">
                          {event.date.month} {event.date.day}
                        </div>
                        <div className="text-xs font-medium opacity-90">{event.date.year}</div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                          event.featured 
                            ? 'bg-primary/90 text-white' 
                            : 'bg-white/90 text-gray-800'
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>

                    {/* Bottom Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base font-bold mb-2 leading-tight line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-white/90 text-xs mb-3 leading-relaxed line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-xs text-white/80">
                          <Clock className="w-3 h-3 mr-1 text-white flex-shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                        <div className="flex items-center text-xs text-white/80">
                          <MapPin className="w-3 h-3 mr-1 text-white flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                        <div className="flex items-center text-xs text-secondary font-medium">
                          <Trophy className="w-3 h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{event.prize}</span>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        className={`w-full py-2 rounded-lg text-xs font-medium transition-all duration-300 backdrop-blur-sm ${
                          event.featured
                            ? 'bg-primary/90 text-white hover:bg-primary'
                            : 'bg-tertiary/90 text-white hover:bg-tertiary'
                        }`}
                      >
                        {event.buttonText}
                      </button>
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
      </div>
    </section>
  );
};

export default Events;
