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
  IN_PROGRESS: 'In progress',
  ON_HOLD: 'On hold',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled'
} as const;
