import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Clock, MapPin, Tag, Users, X, ExternalLink } from 'lucide-react';
import type { Event } from '../../types';
import { getVtoolHref } from '../../utils/vtool';

interface EventDetailsModalProps {
  event: Event;
  onClose: () => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ event, onClose }) => {
  const vtoolHref = getVtoolHref(event.vtool);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  const contacts =
    event.actionLinks?.filter((link) => link.toLowerCase().startsWith('contact:')) ?? [];
  const otherLinks =
    event.actionLinks?.filter((link) => !link.toLowerCase().startsWith('contact:')) ?? [];

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="event-details-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Close event details"
        onClick={onClose}
      />

      <div className="relative z-10 w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl">
        <div className="relative w-full overflow-hidden" style={{ paddingTop: '42%' }}>
          <img
            src={event.cloudinary_url || '/event.webp'}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white shadow-md"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="absolute bottom-4 left-4 right-16">
            <p className="text-white/90 text-xs uppercase tracking-wide mb-1">
              {event.type}
              {event.status ? ` · ${event.status}` : ''}
            </p>
            <h2 id="event-details-title" className="text-2xl md:text-3xl font-serif text-white">
              {event.title}
            </h2>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">{event.description}</p>

          <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>
                {event.startDate && event.endDate && event.startDate !== event.endDate
                  ? `${event.startDate} – ${event.endDate}`
                  : event.endDate || event.startDate || 'Date TBA'}
              </span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>{event.venue || 'Venue TBA'}</span>
            </div>
            <div className="flex items-start gap-2">
              <Tag className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>{event.category || 'General'}</span>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
              <span>
                {Array.isArray(event.organisedBy)
                  ? event.organisedBy.join(', ')
                  : event.organisedBy || 'IEEE MSIT'}
              </span>
            </div>
          </div>

          {event.prizes && event.prizes.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Prizes</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-0.5">
                {event.prizes.map((prize) => (
                  <li key={prize}>{prize}</li>
                ))}
              </ul>
            </div>
          )}

          {contacts.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">Contacts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                {contacts.map((contact) => (
                  <li key={contact}>{contact.replace(/^contact:\s*/i, '')}</li>
                ))}
              </ul>
            </div>
          )}

          {otherLinks.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {otherLinks.map((link) => {
                const registerUrl = link.startsWith('register:')
                  ? link.split('register:')[1]?.trim()
                  : null;
                const livestreamUrl = link.startsWith('livestream:')
                  ? link.split('livestream:')[1]?.trim()
                  : null;
                const href = registerUrl || livestreamUrl || (/^https?:\/\//i.test(link) ? link : null);
                if (!href) return null;
                return (
                  <a
                    key={link}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {registerUrl ? 'Register' : livestreamUrl ? 'Livestream' : 'Open link'}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          )}

          {vtoolHref ? (
            <a
              href={vtoolHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 py-2.5 rounded-full bg-primary text-white font-medium text-sm hover:bg-primary-hover shadow-md"
            >
              Open in vTools
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <p className="text-center text-sm text-gray-400">vTools link not available yet.</p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default EventDetailsModal;
