import React from 'react';
import { Clock, MapPin, Share2 } from 'lucide-react';

interface EventCardProps {
    event: any;
    className?: string;
}

const EventCard: React.FC<EventCardProps> = ({ event, className = '' }) => {
    const handlePrimary = () => {
        const registerLink = event.actionLinks?.find((l: string) => l.startsWith('register:'))?.split('register:')[1]?.trim();
        const livestreamLink = event.actionLinks?.find((l: string) => l.startsWith('livestream:'))?.split('livestream:')[1]?.trim();
        if (registerLink) window.open(registerLink, '_blank');
        else if (livestreamLink) window.open(livestreamLink, '_blank');
        else window.alert('No external link available for this event.');
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({ title: event.title, url: window.location.href });
        } else {
            navigator.clipboard.writeText(window.location.href);
            alert('Event link copied to clipboard!');
        }
    };

    return (
        <div className={`${className} overflow-hidden rounded-xl bg-white flex flex-col group transition-shadow duration-200 h-full border border-gray-100 hover:shadow-xl`}>
                <div className="relative w-full overflow-hidden" style={{ paddingTop: '75%' }}>
                    <img
                        src={event.cloudinary_url || '/event.webp'}
                        alt={event.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-800 shadow-md">
                        {event.organisedBy || event.category || ''}
                    </span>
                </div>
                <div className="absolute top-3 left-3">
                    <div className="bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs font-medium text-center">
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
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight tracking-tight">{event.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">{event.description}</p>

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
                        className="w-full bg-primary text-white py-2 rounded-full hover:bg-primary-hover transition-colors font-medium text-sm hover:shadow-md"
                        onClick={handlePrimary}
                    >
                        {event.actionLinks?.some((l: string) => l.startsWith('register:'))
                            ? 'Register'
                            : event.actionLinks?.some((l: string) => l.startsWith('livestream:'))
                            ? 'Join Livestream'
                            : 'View Details'}
                    </button>

                    <button
                        className="bg-primary/10 text-primary px-3 py-2 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-sm flex items-center gap-1"
                        title="Share Event"
                        onClick={handleShare}
                    >
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
