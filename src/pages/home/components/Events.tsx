import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { events } from '../../../data/data';
import EventCard from '../../../components/ui/EventCard';

const Events = () => {
  const eventsCarouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 400;

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

          {}
          <div
            ref={eventsCarouselRef}
            className="hidden lg:block overflow-x-auto scrollbar-hide mx-12"
          >
            <div className="flex gap-6 pb-4 w-max">
              {events.map((event, index) => (
                <div key={index} className="w-[280px]">
                  <EventCard event={event} />
                </div>
              ))}
            </div>
          </div>

          {}
          <div className="lg:hidden">
            <div className="overflow-x-auto scrollbar-hide px-4 -mx-4">
              <div className="flex gap-4 pb-4 w-max">
                {events.map((event, index) => (
                  <div key={index} className="w-[200px] h-[440px]">
                    <EventCard event={event} />
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
          <Link
            to="/events"
            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center gap-2 mx-auto w-max"
          >
            <Eye className="w-4 h-4" />
            Show All Events
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
