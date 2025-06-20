import { IClubCalendar, IGeneralCalendar } from '~/@types/calendar';
import { EventType } from '~/enums';

export const GENERAL_CALENDAR: IGeneralCalendar[] = [
  {
    event_id: 1,
    title: 'Event Title - Truncated if title is very long',
    event_type: 'community',
    start_date: '2025-05-08T18:00:00',
    end_date: '2025-05-07T19:30:00',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    participants: ['HOA Staff', 'Michelle Stockton'],
    registration_required: 'yes',
    organizer: 'johndoe@gmail.com',
    price: '$100',
    attachments: [
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
      },
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
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
    start_date: '2025-05-08T20:00:00',
    end_date: '2025-05-07T21:00:00',
    location: 'Swimming Pool',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: 'no',
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
      },
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
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
    start_date: '2025-05-08T16:00:00',
    end_date: '2025-05-08T18:00:00',
    location: 'Swimming Pool',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: 'yes',
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
      },
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
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
    start_date: '2025-05-07T07:00:00',
    end_date: '2025-05-06T07:00:00',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    participants: ['John Doe', 'Jane Smith'],
    registration_required: 'no',
    organizer: 'johndoe@gmail.com',
    attachments: [
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
      },
      {
        file_name: 'Video Capture 1.MP4',
        file_type: 'video/mp4',
        file_size: '2.5 MB'
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

export const CLUB_CALENDAR: IClubCalendar[] = [
  {
    event_id: 1,
    activity_type: 'community',
    title: 'Event Title - Truncated if title is very long',
    start_date: '2025-05-09T18:00:00',
    end_date: '2025-05-09T19:30:00',
    trainer: 'Michelle Stockton',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    max_participants: 20,
    number_of_registrations: 10,
    register_users: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ],
    cost: '$100',
    additional_info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    event_id: 2,
    activity_type: 'community',
    title: 'Event Title - Truncated if title is very long',
    start_date: '2025-05-09T18:00:00',
    end_date: '2025-05-09T19:30:00',
    trainer: 'Michelle Stockton',
    location: 'Main Auditorium',
    description: 'Conf. Room 2',
    max_participants: 20,
    number_of_registrations: 10,
    register_users: [
      {
        name: 'John Doe',
        status: 'accepted'
      },
      {
        name: 'Jane Smith',
        status: 'declined'
      }
    ],
    cost: '$100',
    additional_info:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

export const calendarHeader = [
  { field: 'event_id', name: 'ID' },
  { field: 'title', name: 'Event name' },
  { field: 'event_type', name: 'Event Type' },
  { field: 'description', name: 'Description' },
  { field: 'location', name: 'Location' },
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
