export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
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
