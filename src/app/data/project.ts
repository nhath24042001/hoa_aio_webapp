import { IHeaderTable } from '~/@types/index.d';

export const PROJECT_HEADER: IHeaderTable[] = [
  {
    field: 'type_icon',
    name: '',
    width: 20
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
