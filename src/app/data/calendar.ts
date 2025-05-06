import { EventType } from '~/enums';

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
