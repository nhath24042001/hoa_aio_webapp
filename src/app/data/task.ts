import { IHeaderTable } from '~/@types/index.d';
import { Priority } from '~/enums';

export const TASK_HEADER: IHeaderTable[] = [
  {
    field: 'type_icon',
    name: '',
    width: 20
  },
  {
    field: 'task_name',
    name: 'Task Name',
    sortable: true
  },
  {
    field: 'task_type',
    name: 'Type'
  },
  {
    field: 'priority',
    name: 'Priority'
  },
  {
    field: 'created',
    name: 'Created'
  },
  {
    field: 'assigned_to',
    name: 'Assigned To'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const TASK_LIST = [
  {
    task_id: '12321',
    type_icon: 'clipboard-sm',
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
    type_icon: 'claim',
    task_name: 'Trim entrance area trees',
    task_type: 'Landscape',
    priority: Priority.IMPORTANT,
    created: '2023-08-01',
    status: 'accepted',
    assigned_to: [
      {
        id: 1,
        name: 'John Doe',
        avatar:
          'https://images.pexels.com/photos/7561957/pexels-photo-7561957.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar:
          'https://images.pexels.com/photos/7562349/pexels-photo-7562349.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  }
];

export const TASK_ACTIONS = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-2'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];
