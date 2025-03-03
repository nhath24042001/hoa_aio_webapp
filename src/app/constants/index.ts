import { Priority } from '~/enums';

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
  RESOLVED: 'Resolved',
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

export const tasks = [
  {
    task_id: '12321',
    type_icon: 'action_item',
    task_name: 'Sign contract with plumbing vendor',
    task_type: 'Maintenance',
    priority: Priority.URGENT,
    created: '2023-08-01',
    status: 'new',
    assigned_to: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://images.pexels.com/photos/8721322/pexels-photo-8721322.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar:
          'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    task_id: '12322',
    type_icon: 'action_item',
    task_name: 'Trim entrance area trees',
    task_type: 'Landscape',
    priority: Priority.IMPORTANT,
    created: '2024-01-24',
    status: 'accepted',
    assigned_to: [
      {
        id: 1,
        name: 'Urgon Tuya',
        avatar:
          'https://images.pexels.com/photos/7046685/pexels-photo-7046685.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jonathan Wick',
        avatar:
          'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    task_id: '12323',
    type_icon: 'claim',
    task_name: 'Create About Page for Company Profile',
    task_type: 'Accounting',
    priority: Priority.IMPORTANT,
    created: '2024-02-03',
    status: 'accepted',
    assigned_to: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://images.pexels.com/photos/8638618/pexels-photo-8638618.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar:
          'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    task_id: '12324',
    type_icon: 'action_item',
    task_name: 'Create UI Stock Mobile',
    task_type: 'Design change request',
    priority: Priority.NORMAL,
    created: '2024-12-24',
    status: 'resolved',
    assigned_to: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://images.pexels.com/photos/8721322/pexels-photo-8721322.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar:
          'https://images.pexels.com/photos/7046685/pexels-photo-7046685.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    task_id: '12325',
    type_icon: 'claim',
    task_name: 'Usability Testing POS Mobile Apps',
    task_type: 'Hearing',
    priority: Priority.IMPORTANT,
    created: '2024-01-02',
    status: 'rejected',
    assigned_to: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar:
          'https://images.pexels.com/photos/7862484/pexels-photo-7862484.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  }
];
