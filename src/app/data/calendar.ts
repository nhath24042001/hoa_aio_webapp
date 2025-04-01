import { EventType } from '~/enums'

export const calendarData = [
  {
    task_name: 'Event Title - Truncated if title is very long',
    type: 'Community Event',
    location: 'Main Auditorium',
    startDate: '01/01/2023: 12:00 AM',
    createdDate: '01/01/2023'
  },
  {
    task_name: 'Trim entrance area trees',
    type: 'Facility Booking',
    location: 'Swimming Pool',
    startDate: '01/01/2023: 12:00 AM',
    createdDate: '01/01/2023'
  },
  {
    task_name: 'Create About Page for Company Profile',
    type: 'Maintenance Event',
    location: 'Main Entrance Gate',
    startDate: '01/01/2023: 12:00 AM',
    createdDate: '01/01/2023'
  },
  {
    task_name: 'Create UI Stock Mobile',
    type: 'Community Event',
    location: 'Swimming Pool',
    startDate: '01/01/2023: 12:00 AM',
    createdDate: '01/01/2023'
  },
  {
    task_name: 'Usability Testing POS Mobile Apps',
    type: 'Facility Booking',
    location: 'Swimming Pool',
    startDate: '01/01/2023: 12:00 AM',
    createdDate: '01/01/2023'
  }
]

export const calendarHeader = [
  { field: 'task_name', name: 'Task Name' },
  { field: 'type', name: 'Type' },
  { field: 'location', name: 'Location' },
  { field: 'startDate', name: 'Start' },
  { field: 'createdDate', name: 'Created' },
  { field: 'action', name: '' }
]

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
]
