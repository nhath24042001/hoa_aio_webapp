import { IGeneralCalendar } from '~/@types/calendar';
import { EventType } from '~/enums';

export const GENERAL_CALENDAR: IGeneralCalendar[] = [
  {
    event_id: 1,
    title: 'Event Title - Truncated if title is very long',
    event_type: 'community',
    start_date: '2025-05-07T18:00:00',
    end_date: '2025-05-07T19:30:00',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: true,
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        name: 'Event Agenda',
        url: 'https://example.com/agenda.pdf'
      },
      {
        name: 'Event Flyer',
        url: 'https://example.com/flyer.jpg'
      }
    ],
    rsvp: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ]
  },
  {
    event_id: 2,
    title: 'Trim entrance area trees',
    event_type: 'facility',
    start_date: '2025-05-07T20:00:00',
    end_date: '2025-05-07T21:00:00',
    location: 'Swimming Pool',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: true,
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        name: 'Event Agenda',
        url: 'https://example.com/agenda.pdf'
      },
      {
        name: 'Event Flyer',
        url: 'https://example.com/flyer.jpg'
      }
    ],
    rsvp: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ]
  },
  {
    event_id: 3,
    title: 'Create About Page for Company Profile',
    event_type: 'maintenance',
    start_date: '2025-05-06T16:00:00',
    end_date: '2025-05-06T18:00:00',
    location: 'Swimming Pool',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: true,
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        name: 'Event Agenda',
        url: 'https://example.com/agenda.pdf'
      },
      {
        name: 'Event Flyer',
        url: 'https://example.com/flyer.jpg'
      }
    ],
    rsvp: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ]
  },
  {
    event_id: 4,
    title: 'Create UI Stock Mobile',
    event_type: 'administrative',
    start_date: '2025-05-06T07:00:00',
    end_date: '2025-05-06T08:00:00',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: true,
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        name: 'Event Agenda',
        url: 'https://example.com/agenda.pdf'
      },
      {
        name: 'Event Flyer',
        url: 'https://example.com/flyer.jpg'
      }
    ],
    rsvp: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ]
  }
];

export const calendarHeader = [
  { field: 'event_id', name: 'ID' },
  { field: 'title', name: 'Event name' },
  { field: 'description', name: 'Description' },
  { field: 'event_date', name: 'Event Date' },
  { field: 'created_at', name: 'Created' },
  { field: 'action', name: '' }
];

export const CALENDAR_ACTION = [
  {
    label: 'Edit',
    icon: 'calendar-edit',
    actionKey: 'edit',
    className: '--pointer mb-2'
  },
  {
    label: 'Cancel Event',
    icon: 'calendar-x',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const eventList = [
  {
    name: EventType.COMMUNITY,
    code: 'community'
  },
  {
    name: EventType.FACILITY,
    code: 'facility'
  },
  {
    name: EventType.ADMINISTRATIVE,
    code: 'administrative'
  },
  {
    name: EventType.MAINTENANCE,
    code: 'maintenance'
  }
];
