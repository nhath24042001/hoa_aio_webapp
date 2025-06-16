import { IHeaderTable } from '~/@types/index.d';

export const PROJECT_HEADER: IHeaderTable[] = [
  // {
  //   field: 'type_icon',
  //   name: '',
  //   width: 20
  // },
  {
    field: 'name',
    name: 'Project Name'
  },
  {
    field: 'type',
    name: 'Type'
  },
  {
    field: 'priority',
    name: 'Priority'
  },
  {
    field: 'start_date',
    name: 'Start Date'
  },
  // {
  //   field: 'assigned_to',
  //   name: 'Assigned to'
  // },
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

export const PROJECT_DATA = [
  {
    task_id: '12321',
    type_icon: 'thunder',
    task_name: 'Fix main entrance watering system',
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
    type_icon: 'user-check',
    task_name: 'Trim entrance area trees',
    task_type: 'Renovation',
    priority: 'important',
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
    priority: 'important',
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
  }
];

export const EXTRA_PROJECT = [
  {
    project_id: 1,
    name: 'dev test',
    description: 'description',
    type: 1,
    priority: 4,
    status: 5,
    start_date: '2025-06-04 01:59:32',
    est_comp_date: null,
    act_comp_date: '2025-06-04',
    est_cost: null,
    act_cost: null,
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    manager: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    last_update: '2025-06-04 06:57:31',
    vendors: null,
    documents: null,
    action_items: null,
    bid_id: null
  },
  {
    project_id: 2,
    name: 'Fix main entrance watering system',
    description: 'description',
    type: 2,
    priority: 1,
    status: 1,
    start_date: '2025-06-04 02:46:03',
    est_comp_date: '2025-06-12',
    act_comp_date: null,
    est_cost: null,
    act_cost: null,
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    manager: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    last_update: '2025-06-04 02:46:03',
    vendors: null,
    documents: null,
    action_items: null,
    bid_id: null
  },
  {
    project_id: 3,
    name: 'Project Title',
    description: 'description',
    type: 1,
    priority: 2,
    status: 2,
    start_date: '2025-06-04 02:50:25',
    est_comp_date: '2025-06-06',
    act_comp_date: null,
    est_cost: '200.00',
    act_cost: null,
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    manager: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    last_update: '2025-06-04 02:50:25',
    vendors: null,
    documents: null,
    action_items: null,
    bid_id: null
  },
  {
    project_id: 4,
    name: 'IT Skills',
    description: 'description',
    type: 4,
    priority: 4,
    status: 2,
    start_date: '2025-06-04 03:12:14',
    est_comp_date: null,
    act_comp_date: null,
    est_cost: '200.00',
    act_cost: '100.00',
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    manager: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    last_update: '2025-06-04 03:18:20',
    vendors: null,
    documents: null,
    action_items: null,
    bid_id: null
  },
  {
    project_id: 5,
    name: 'test 1',
    description: '123',
    type: 4,
    priority: 4,
    status: 1,
    start_date: '2025-06-05 08:48:09',
    est_comp_date: null,
    act_comp_date: null,
    est_cost: null,
    act_cost: null,
    created_by: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    manager: 'a80bb5227367aa3209aa32ea5351ef6466452f26100a07b70459b74f1d307c9b',
    last_update: '2025-06-05 08:50:22',
    vendors: null,
    documents: null,
    action_items: null,
    bid_id: null
  }
];
