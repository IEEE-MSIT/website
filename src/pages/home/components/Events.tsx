import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, ArrowRight, Eye } from 'lucide-react';
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
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Upcoming Events
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
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
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-300 items-center justify-center border border-gray-100 hover:shadow-xl hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scrollEventsCarousel('right')}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-3 hover:bg-white transition-all duration-300 items-center justify-center border border-gray-100 hover:shadow-xl hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
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
                  className="group relative rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 w-[280px] bg-white flex-shrink-0 shadow-lg transform hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
                >
                  {/* Event Image with Overlay */}
                  <div className="relative w-full h-[220px] overflow-hidden">
                    <img
                      src="/event.webp"
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-800 shadow-md">
                        {event.society}
                      </span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <div className="bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium">
                        <div className="text-center">
                          <div className="text-lg font-bold leading-none">{event.date.day}</div>
                          <div className="text-[10px] uppercase tracking-wide">
                            {event.date.month}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold text-black mb-2 line-clamp-2 leading-tight">
                      {event.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{event.location}</span>
                    </div>

                    <div className="mt-auto">
                      <button className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm hover:shadow-md">
                        {event.buttonText || 'View Details'}
                      </button>
                    </div>
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
                    className="group relative rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 w-[200px] h-[340px] bg-white flex-shrink-0 shadow-lg transform hover:-translate-y-1 border border-gray-100 hover:border-primary/20"
                  >
                    {/* Event Image with Overlay */}
                    <div className="relative w-full h-[160px] overflow-hidden">
                      <img
                        src="/event.webp"
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/95 backdrop-blur-sm text-gray-800 shadow-sm">
                          {event.society}
                        </span>
                      </div>
                      <div className="absolute top-2 left-2">
                        <div className="bg-primary/90 backdrop-blur-sm text-white px-1.5 py-1 rounded-md text-[10px] font-medium">
                          <div className="text-center">
                            <div className="text-sm font-bold leading-none">{event.date.day}</div>
                            <div className="text-[8px] uppercase tracking-wide">
                              {event.date.month}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="p-3 flex flex-col flex-1">
                      <h3 className="font-serif text-sm font-bold text-black mb-2 line-clamp-2 leading-tight">
                        {event.title}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-2 mb-3 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Clock className="w-3 h-3 mr-1 text-primary flex-shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>

                      <div className="mt-auto">
                        <button className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-xs hover:shadow-sm">
                          {event.buttonText || 'View Details'}
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
          <button className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 mx-auto">
            <Eye className="w-4 h-4" />
            Show All Events
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Events;
