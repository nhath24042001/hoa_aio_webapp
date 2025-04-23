import { IHeaderTable, ITask } from '~/@types/task';
import { Priority } from '~/enums';

export const PROJECT_DATA: ITask[] = [
  {
    task_id: '12321',
    type_icon: 'thunder',
    task_name: 'Fix main entrance watering system',
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
    type_icon: 'user-check',
    task_name: 'Trim entrance area trees',
    task_type: 'Renovation',
    priority: Priority.IMPORTANT,
    created: '2023-08-01',
    status: 'accepted',
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
    task_id: '12323',
    type_icon: 'user-up',
    task_name: 'Create About Page for Company Profile',
    task_type: 'New construction',
    priority: Priority.IMPORTANT,
    created: '2023-08-01',
    status: 'accepted',
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
    task_id: '12324',
    type_icon: 'circle-check',
    task_name: 'Create UI Stock Mobile',
    task_type: 'Inspection',
    priority: Priority.IMPORTANT,
    created: '2023-08-01',
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
          'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
    ]
  },
  {
    task_id: '12325',
    type_icon: 'annotation-alert-sm',
    task_name: 'Usability Testing POS Mobile Apps',
    task_type: 'Maintenance',
    priority: Priority.IMPORTANT,
    created: '2023-08-01',
    status: 'rejected',
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
    task_id: '12326',
    type_icon: 'user-up',
    task_name: 'Design Home UI Resto',
    task_type: 'Maintenance',
    priority: Priority.LOW,
    created: '2023-08-01',
    status: 'planning',
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
  }
];

export const PROJECT_HEADER: IHeaderTable[] = [
  {
    field: 'type_icon',
    name: '',
    width: '20px'
  },
  {
    field: 'task_name',
    name: 'Task Name'
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
    name: 'Assigned to'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'action',
    name: '',
    width: '20px'
  }
];

export const PROJECT_ACTIONS = [
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
