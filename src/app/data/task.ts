import { IHeaderTable } from '~/@types/index.d';

export const TASK_HEADER: IHeaderTable[] = [
  // {
  //   field: 'type_icon',
  //   name: '',
  //   width: 20
  // },
  // {
  //   field: 'task_name',
  //   name: 'Task Name',
  //   sortable: true
  // },
  {
    field: 'type',
    name: 'Type'
  },
  {
    field: 'priority',
    name: 'Priority'
  },
  {
    field: 'created_at',
    name: 'Created'
  },
  {
    field: 'assigned_to_name',
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

export const TASK_DATA = [
  {
    task_id: '12321',
    type_icon: 'clipboard-sm',
    task_name: 'Sign contract with plumbing vendor',
    task_type: 'Maintenance',
    priority: 'urgent',
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
    priority: 'important',
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
  },
  {
    task_id: '12323',
    type_icon: 'clipboard-sm',
    task_name: 'Install new lighting in parking lot',
    task_type: 'Maintenance',
    priority: 'normal',
    created: '2023-08-02',
    status: 'in_progress',
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

export const EXTRA_DATA = [
  {
    task_id: 1,
    type: 1,
    description: 'More details can be seen in weekly view.',
    priority: 4,
    status: 4,
    assigned_to: 'deb892c613731e8eb943d625983f21bf3bb6e740154b2619e0672d35a149640d',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-04 02:11:10',
    last_update: '2025-06-04 06:48:58',
    media: '[]',
    video: null,
    project_id: null,
    assigned_to_name: 'other manager'
  },
  {
    task_id: 2,
    type: 3,
    description: 'description',
    priority: 1,
    status: 5,
    assigned_to: 'deb892c613731e8eb943d625983f21bf3bb6e740154b2619e0672d35a149640d',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-04 02:31:51',
    last_update: '2025-06-04 06:49:09',
    media: null,
    video: null,
    project_id: null,
    assigned_to_name: 'other manager'
  },
  {
    task_id: 3,
    type: 0,
    description: 'description',
    priority: 4,
    status: 1,
    assigned_to: 'deb892c613731e8eb943d625983f21bf3bb6e740154b2619e0672d35a149640d',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-04 02:32:54',
    last_update: '2025-06-04 06:42:37',
    media: '[]',
    video: '',
    project_id: null,
    assigned_to_name: 'other manager'
  },
  {
    task_id: 4,
    type: 2,
    description: '123',
    priority: 1,
    status: 1,
    assigned_to: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-04 02:40:40',
    last_update: '2025-06-04 02:40:40',
    media: null,
    video: null,
    project_id: null,
    assigned_to_name: 'Huy Nguyen Van Nhat'
  },
  {
    task_id: 5,
    type: 1,
    description: 'More details can be seen in weekly view.',
    priority: 4,
    status: 1,
    assigned_to: 'deb892c613731e8eb943d625983f21bf3bb6e740154b2619e0672d35a149640d',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-05 07:13:10',
    last_update: '2025-06-05 07:13:10',
    media: '[]',
    video: null,
    project_id: null,
    assigned_to_name: 'other manager'
  },
  {
    task_id: 6,
    type: 1,
    description: 'More details can be seen in weekly view.',
    priority: 4,
    status: 1,
    assigned_to: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-05 08:38:49',
    last_update: '2025-06-05 08:38:49',
    media: '[]',
    video: null,
    project_id: null,
    assigned_to_name: 'Huy Nguyen Van Nhat'
  },
  {
    task_id: 7,
    type: 1,
    description: '123',
    priority: 4,
    status: 1,
    assigned_to: 'deb892c613731e8eb943d625983f21bf3bb6e740154b2619e0672d35a149640d',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    created_at: '2025-06-05 08:39:16',
    last_update: '2025-06-05 08:44:15',
    media: '[]',
    video: '',
    project_id: null,
    assigned_to_name: 'other manager'
  }
];
