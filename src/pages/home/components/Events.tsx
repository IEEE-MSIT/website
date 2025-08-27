import { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, MapPin, Eye } from 'lucide-react';
import { events } from '../../../data/data';

const Events = () => {
  const eventsCarouselRef = useRef<HTMLDivElement>(null);

  const scrollEventsCarousel = (direction: 'left' | 'right') => {
    if (eventsCarouselRef.current) {
      const scrollAmount = 620; // Width of card + gap
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

        {/* Desktop Carousel + Mobile Grid */}
        <div className="relative">
          {/* Navigation Arrows - Desktop Only */}
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

          {/* Desktop Carousel Container */}
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

          {/* Mobile/Tablet Horizontal Scroll Layout */}
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
      </div>
    </section>
  );
};

export default Events;
