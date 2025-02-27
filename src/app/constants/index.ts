export const THEME = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const ACTIONS = {
  EDIT: 'Edit',
  APPROVE: 'Approve',
  PENDING: 'Make as pending',
  DELETE: 'Delete'
} as const;

export const STATUS_LIST = {
  NEW: 'New',
  PLANNING: 'Planning',
  ASSIGNED: 'Assigned',
  ACCEPTED: 'Accepted',
  RESOLVE: 'Resolve',
  IN_PROGRESS: 'In progress',
  ON_HOLD: 'On hold',
  COMPLETED: 'Completed',
  REJECT: 'Reject',
  CANCELLED: 'Cancelled',
  CANCEL: 'Cancel'
} as const;

export const TASK_STATUS = [
  {
    icon: 'status-new',
    name: STATUS_LIST.NEW
  },
  {
    icon: 'status-assigned',
    name: STATUS_LIST.ASSIGNED
  },
  {
    icon: 'status-accepted',
    name: STATUS_LIST.ACCEPTED
  },
  {
    icon: 'status-resolve',
    name: STATUS_LIST.RESOLVE
  },
  {
    icon: 'status-reject',
    name: STATUS_LIST.REJECT
  },
  {
    icon: 'status-cancel',
    name: STATUS_LIST.CANCEL
  }
];

export const PROJECT_TYPES = [
  { name: 'Maintenance', code: 'NY' },
  { name: 'Renovation', code: 'RM' },
  { name: 'New construction', code: 'LDN' },
  { name: 'Inspection', code: 'IST' },
  { name: 'Other', code: 'PRS' }
];

export const PRIORITY_LIST = [
  {
    name: 'Low',
    code: 'low'
  },
  {
    name: 'Medium',
    code: 'medium'
  },
  {
    name: 'High',
    code: 'high'
  },
  {
    name: 'Critical',
    code: 'critical'
  }
];

export const LIST_TASK_STATUS = [
  {
    name: STATUS_LIST.NEW,
    code: 'new'
  },
  {
    name: STATUS_LIST.PLANNING,
    code: 'planning'
  },
  {
    name: STATUS_LIST.IN_PROGRESS,
    code: 'in_progress'
  },
  {
    name: STATUS_LIST.ON_HOLD,
    code: 'on_hold'
  },
  {
    name: STATUS_LIST.COMPLETED,
    code: 'completed'
  },
  {
    name: STATUS_LIST.CANCELLED,
    code: 'cancelled'
  }
];
