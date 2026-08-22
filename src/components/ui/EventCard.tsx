import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Share2 } from 'lucide-react';
import type { Event } from '../../types';

interface EventCardProps {
  event: Event;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
  const isCompleted = String((event && event.status) || '').toLowerCase() === 'completed';
  const handlePrimary = () => {
    const registerLink = event.actionLinks
      ?.find((l: string) => l.startsWith('register:'))
      ?.split('register:')[1]
      ?.trim();
    const livestreamLink = event.actionLinks
      ?.find((l: string) => l.startsWith('livestream:'))
      ?.split('livestream:')[1]
      ?.trim();
    if (registerLink) window.open(registerLink, '_blank');
    else if (livestreamLink) window.open(livestreamLink, '_blank');
    else window.alert('No external link available for this event.');
  };

  const handleShare = () => {
    if (isCompleted) {
      return;
    }

    if (navigator.share) {
      navigator.share({ title: event.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      className={`${className} overflow-hidden rounded-xl bg-white flex flex-col group shadow-sm hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100/90`}
    >
      <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%' }}>
        <img
          src={event.cloudinary_url || '/event.webp'}
          alt={event.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-800 shadow-md transition-transform duration-200 group-hover:scale-105">
            {event.organisedBy || event.category || ''}
          </span>
        </div>
        <div className="absolute top-3 left-3">
          <div className="bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium text-center shadow-md transition-transform duration-200 group-hover:scale-105">
            <div className="text-lg font-bold leading-none">
              {(() => {
                const dateStr = event.endDate || '';
                const match = dateStr.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)/);
                return match ? match[1] : '';
              })()}
            </div>
            <div className="text-[10px] uppercase tracking-wide">
              {(() => {
                const dateStr = event.endDate || '';
                const match = dateStr.match(/(\d{1,2})(?:st|nd|rd|th)?\s+([A-Za-z]+)/);
                return match ? match[2].slice(0, 3).toUpperCase() : '';
              })()}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight tracking-tight group-hover:text-primary transition-colors duration-200">
          {event.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
          {event.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Clock className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span>{event.endDate || ''}</span>
        </div>

        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
          <span className="truncate">{event.venue || ''}</span>
        </div>

        <div className="mt-auto flex gap-2">
          <motion.button
            whileHover={!isCompleted ? { scale: 1.02 } : {}}
            whileTap={!isCompleted ? { scale: 0.97 } : {}}
            className={`w-full py-2 rounded-full transition-colors font-medium text-sm ${
              isCompleted
                ? 'bg-gray-200 text-gray-600 cursor-default'
                : 'bg-primary text-white hover:bg-primary-hover hover:shadow-md'
            }`}
            onClick={isCompleted ? undefined : handlePrimary}
            disabled={isCompleted}
          >
            {isCompleted
              ? 'Event Ended'
              : event.actionLinks?.some((l: string) => l.startsWith('register:'))
                ? 'Register'
                : event.actionLinks?.some((l: string) => l.startsWith('livestream:'))
                  ? 'Join Livestream'
                  : 'View Details'}
          </motion.button>

          <motion.button
            whileHover={!isCompleted ? { scale: 1.08 } : {}}
            whileTap={!isCompleted ? { scale: 0.92 } : {}}
            className={`bg-primary/10 text-primary px-3 py-2 rounded-full transition-colors font-medium text-sm flex items-center gap-1 ${
              isCompleted ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white'
            }`}
            title={isCompleted ? 'Sharing disabled for ended events' : 'Share Event'}
            onClick={isCompleted ? undefined : handleShare}
            aria-disabled={isCompleted}
            disabled={isCompleted}
          >
            <Share2 className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
