import { Event, EventStatus, EventType, CTA, RegistrationType, EventMode } from '../types';

export const generateEventCTA = (event: Event): CTA => {
  const now = new Date();
  const registrationDeadline = new Date(event.registration.deadline);
  const isRegistrationOpen =
    now < registrationDeadline &&
    event.status !== EventStatus.CANCELLED &&
    event.status !== EventStatus.COMPLETED;

  const isRegistrationFull =
    event.registration.maxParticipants &&
    event.registration.currentParticipants &&
    event.registration.currentParticipants >= event.registration.maxParticipants;

  let primary: CTA['primary'];
  let secondary: CTA['secondary'];

  switch (event.status) {
    case EventStatus.UPCOMING:
      if (isRegistrationOpen && !isRegistrationFull) {
        primary = {
          text:
            event.registration.type === RegistrationType.FREE
              ? 'Register Free'
              : event.registration.type === RegistrationType.PAID
                ? `Register - ${event.registration.fee}`
                : 'Register Now',
          action: 'register',
          link: event.registration.registrationLink || '#register',
          externalLink: !!event.registration.registrationLink,
          extractedData: {
            registrationLink: event.registration.registrationLink,
            formLink: event.registration.registrationLink,
          },
        };
        secondary = {
          text: 'Add to Calendar',
          action: 'calendar',
          link: generateCalendarLink(event),
          extractedData: {
            calendarData: {
              title: event.title,
              startDate: event.startDate,
              endDate: event.endDate,
              location:
                event.location.venue?.address || event.location.onlineDetails?.platform || 'Online',
              description: event.description,
            },
          },
        };
      } else if (isRegistrationFull && event.registration.waitlistAvailable) {
        primary = {
          text: 'Join Waitlist',
          action: 'join_waitlist',
          link: event.registration.registrationLink || '#waitlist',
          externalLink: !!event.registration.registrationLink,
          extractedData: {
            registrationLink: event.registration.registrationLink,
          },
        };
        secondary = {
          text: 'Learn More',
          action: 'learn_more',
          link: `#event-${event.id}`,
        };
      } else {
        primary = {
          text: 'Learn More',
          action: 'learn_more',
          link: `#event-${event.id}`,
        };
        secondary = {
          text: 'Remind Me',
          action: 'remind_me',
          link: '#remind',
        };
      }
      break;

    case EventStatus.ONGOING:
      if (event.location.mode === EventMode.ONLINE || event.location.mode === EventMode.HYBRID) {
        primary = {
          text: 'Join Live',
          action: 'join_live',
          link: event.location.onlineDetails?.link || event.media.livestreamLink || '#join',
          externalLink: true,
          extractedData: {
            liveStreamLink: event.location.onlineDetails?.link || event.media.livestreamLink,
            meetingDetails: event.location.onlineDetails
              ? {
                  platform: event.location.onlineDetails.platform,
                  meetingId: event.location.onlineDetails.meetingId,
                  password: event.location.onlineDetails.password,
                  link: event.location.onlineDetails.link,
                }
              : undefined,
          },
        };
      } else {
        primary = {
          text: 'View Details',
          action: 'learn_more',
          link: `#event-${event.id}`,
        };
      }
      secondary = {
        text: 'Share Event',
        action: 'share',
        link: `#share-${event.id}`,
        extractedData: {
          shareData: {
            title: event.title,
            description: event.shortDescription || event.description,
            url: `#event-${event.id}`,
            image: event.media.coverImage,
          },
        },
      };
      break;

    case EventStatus.COMPLETED:
      if (event.type === EventType.HACKATHON || event.type.includes('competition')) {
        primary = {
          text: 'View Results',
          action: 'view_results',
          link: `#results-${event.id}`,
        };
      } else if (event.media.recordingLink) {
        primary = {
          text: 'Watch Recording',
          action: 'watch_recording',
          link: event.media.recordingLink,
          externalLink: true,
          extractedData: {
            liveStreamLink: event.media.recordingLink,
          },
        };
      } else {
        primary = {
          text: 'View Summary',
          action: 'learn_more',
          link: `#summary-${event.id}`,
        };
      }

      if (event.media.gallery && event.media.gallery.length > 0) {
        secondary = {
          text: 'View Gallery',
          action: 'view_gallery',
          link: `#gallery-${event.id}`,
        };
      } else if (event.resources && event.resources.length > 0) {
        secondary = {
          text: 'Download Resources',
          action: 'download',
          link: `#resources-${event.id}`,
        };
      }
      break;

    case EventStatus.CANCELLED:
    case EventStatus.POSTPONED:
      primary = {
        text: 'Learn More',
        action: 'learn_more',
        link: `#event-${event.id}`,
      };
      secondary = {
        text: 'Contact Support',
        action: 'contact',
        link: '#contact',
      };
      break;

    default:
      primary = {
        text: 'Learn More',
        action: 'learn_more',
        link: `#event-${event.id}`,
      };
  }

  return { primary, secondary };
};

export const generateCalendarLink = (event: Event): string => {
  const startDate = new Date(event.startDate);
  const endDate = new Date(event.endDate);

  const formatDate = (date: Date) => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
  };

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
    details: event.description,
    location: event.location.venue?.address || event.location.onlineDetails?.platform || 'Online',
    sf: 'true',
    output: 'xml',
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

export const getEventStatusColor = (status: string): string => {
  switch (status) {
    case EventStatus.UPCOMING:
      return 'bg-blue-100 text-blue-800';
    case EventStatus.ONGOING:
      return 'bg-green-100 text-green-800';
    case EventStatus.COMPLETED:
      return 'bg-gray-100 text-gray-800';
    case EventStatus.CANCELLED:
      return 'bg-red-100 text-red-800';
    case EventStatus.POSTPONED:
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getEventTypeIcon = (type: string): string => {
  switch (type) {
    case EventType.WORKSHOP:
      return '🛠️';
    case EventType.HACKATHON:
      return '💻';
    case EventType.SEMINAR:
      return '🎓';
    case EventType.CONFERENCE:
      return '🏛️';
    case EventType.COMPETITION:
      return '🏆';
    case EventType.NETWORKING:
      return '🤝';
    case EventType.TECH_TALK:
      return '💬';
    case EventType.WEBINAR:
      return '🌐';
    case EventType.CAREER_FAIR:
      return '💼';
    case EventType.PROJECT_SHOWCASE:
      return '🚀';
    case EventType.STUDY_GROUP:
      return '📚';
    case EventType.SOCIAL:
      return '🎉';
    default:
      return '📅';
  }
};

export const formatEventDate = (
  startDate: string,
  endDate: string,
  options: { showTime?: boolean; showYear?: boolean } = {}
): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const { showTime = true, showYear = true } = options;

  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    ...(showYear && { year: 'numeric' }),
    ...(showTime && { hour: '2-digit', minute: '2-digit' }),
  };

  if (start.toDateString() === end.toDateString()) {
    const dateStr = start.toLocaleDateString('en-US', dateOptions);
    if (showTime) {
      const endTime = end.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      return `${dateStr} - ${endTime}`;
    }
    return dateStr;
  } else {
    const startStr = start.toLocaleDateString('en-US', dateOptions);
    const endStr = end.toLocaleDateString('en-US', dateOptions);
    return `${startStr} - ${endStr}`;
  }
};

export const canRegisterForEvent = (event: Event): { canRegister: boolean; reason?: string } => {
  const now = new Date();
  const registrationDeadline = new Date(event.registration.deadline);
  const startDate = new Date(event.startDate);

  if (event.status === EventStatus.CANCELLED) {
    return { canRegister: false, reason: 'Event has been cancelled' };
  }

  if (event.status === EventStatus.COMPLETED) {
    return { canRegister: false, reason: 'Event has already ended' };
  }

  if (now > registrationDeadline) {
    return { canRegister: false, reason: 'Registration deadline has passed' };
  }

  if (now > startDate) {
    return { canRegister: false, reason: 'Event has already started' };
  }

  if (event.registration.type === RegistrationType.CLOSED) {
    return { canRegister: false, reason: 'Registration is closed' };
  }

  if (event.registration.type === RegistrationType.INVITE_ONLY) {
    return { canRegister: false, reason: 'This is an invite-only event' };
  }

  if (
    event.registration.maxParticipants &&
    event.registration.currentParticipants &&
    event.registration.currentParticipants >= event.registration.maxParticipants
  ) {
    if (event.registration.waitlistAvailable) {
      return { canRegister: true, reason: 'Event is full, but you can join the waitlist' };
    }
    return { canRegister: false, reason: 'Event is full' };
  }

  return { canRegister: true };
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'advanced':
      return 'bg-red-100 text-red-800';
    case 'all_levels':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const getEventDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = end.getTime() - start.getTime();

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return `${days} day${days > 1 ? 's' : ''}${hours > 0 ? ` ${hours}h` : ''}`;
  } else if (hours > 0) {
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
  } else {
    return `${minutes}m`;
  }
};
