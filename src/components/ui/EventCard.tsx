import React, { useState } from 'react';
import { Clock, MapPin, Share2, X, Calendar, ArrowRight } from 'lucide-react';
import { events } from '../../data/events';

interface EventCardProps {
  event: any;
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
  const [showPastEventModal, setShowPastEventModal] = useState(false);
  
  const isPastEvent = event.status === 'completed';
  
  const upcomingEvents = events.filter(e => e.status === 'upcoming' || e.status === 'active').slice(0, 3);

  const handlePrimary = () => {
    if (isPastEvent) {
      setShowPastEventModal(true);
      return;
    }

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
    if (isPastEvent) {
      setShowPastEventModal(true);
      return;
    }

    if (navigator.share) {
      navigator.share({ title: event.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  const getActionButtonText = () => {
    if (isPastEvent) return 'Event Completed';
    
    if (event.actionLinks?.some((l: string) => l.startsWith('register:'))) {
      return 'Register';
    } else if (event.actionLinks?.some((l: string) => l.startsWith('livestream:'))) {
      return 'Join Livestream';
    } else {
      return 'View Details';
    }
  };

  return (
    <>
      <div
        className={`${className} overflow-hidden rounded-xl bg-white flex flex-col group transition-shadow duration-200 h-full border border-gray-100 hover:shadow-xl`}
      >
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%' }}>
          <img
            src={event.cloudinary_url || '/event.webp'}
            alt={event.title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* {isPastEvent && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                Event Completed
              </span>
            </div>
          )} */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-800 shadow-md">
              {event.organisedBy || event.category || ''}
            </span>
          </div>
          <div className="absolute top-3 left-3">
            <div className={`backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium text-center ${
              isPastEvent ? 'bg-gray-500/90' : 'bg-primary/90'
            }`}>
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
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight tracking-tight">
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
            <button
              className={`w-full py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                isPastEvent
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-primary text-white hover:bg-primary-hover hover:shadow-md'
              }`}
              onClick={handlePrimary}
            >
              {getActionButtonText()}
            </button>

            <button
              className={`px-3 py-2 rounded-full font-medium text-sm flex items-center gap-1 transition-all duration-200 ${
                isPastEvent
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
              }`}
              title={isPastEvent ? 'Event has ended' : 'Share Event'}
              onClick={handleShare}
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {showPastEventModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary-hover text-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Event Has Ended</h3>
                  <p className="text-primary-light text-sm">
                    This event took place on {event.endDate}
                  </p>
                </div>
                <button
                  onClick={() => setShowPastEventModal(false)}
                  className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">"{event.title}"</h4>
                <p className="text-gray-600 text-sm">
                  Thank you for your interest! This event has already concluded.
                </p>
              </div>

              {upcomingEvents.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Upcoming Events
                  </h4>
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {upcomingEvents.map((upcomingEvent, index) => (
                      <div key={index} className="border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                        <h5 className="font-medium text-sm text-gray-900 mb-1 line-clamp-1">
                          {upcomingEvent.title}
                        </h5>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {upcomingEvent.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {upcomingEvent.venue}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a
                      href="/events"
                      className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm flex items-center justify-center gap-2"
                      onClick={() => setShowPastEventModal(false)}
                    >
                      View All Events
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              )}

              {upcomingEvents.length === 0 && (
                <div className="text-center py-4">
                  <p className="text-gray-500 text-sm mb-4">
                    No upcoming events at the moment. Stay tuned for exciting new events!
                  </p>
                  <a
                    href="/events"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors text-sm font-medium"
                    onClick={() => setShowPastEventModal(false)}
                  >
                    Check Events Page
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventCard;
