import { IHeaderTable } from '~/@types/task';

export const userHeader: IHeaderTable[] = [
  {
    field: 'full_name',
    name: 'Full Name',
    sortable: true,
    width: 200
  },
  {
    field: 'user_type',
    name: 'Type'
  },
  {
    field: 'phone',
    name: 'Phone'
  },
  {
    field: 'email',
    name: 'Email'
  },
  {
    field: 'creation_date',
    name: 'Creation Date',
    width: 120
  },
  {
    field: 'status',
    name: 'Status',
    width: 150
  },
  {
    field: 'updated_date',
    name: 'Updated'
  },
  {
    field: 'vendor_id',
    name: 'Owner/Vendor ID'
  },
  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const activeUserList = [
  {
    full_name: 'Livia Lipshutz',
    user_type: 'Owner',
    phone: '123-456-7890',
    email: 'address@email.com',
    creation_date: '2/2/2021',
    status: 'active',
    updated_date: '2/2/2021',
    vendor_id: '5456789'
  },
  {
    full_name: 'Dulce Aminoff',
    user_type: 'Manager',
    phone: '555-456-7898',
    email: 'address@email.com',
    creation_date: '2/2/2021',
    status: 'new',
    updated_date: '2/2/2021',
    vendor_id: '-'
  }
];

export const inactiveUserList = [
  {
    full_name: 'Jocelyn Botosh',
    user_type: 'Owner',
    phone: '123-456-7890',
    email: 'address@email.com',
    creation_date: '2/2/2021',
    status: 'inactive',
    updated_date: '2/2/2021',
    vendor_id: '5456789'
  },
  {
    full_name: 'Jocelyn Botosh',
    user_type: 'Owner',
    phone: '123-456-7890',
    email: 'address@email.com',
    creation_date: '2/2/2021',
    status: 'inactive',
    updated_date: '2/2/2021',
    vendor_id: '5456789'
  }
];

export const activeAction = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-3'
  },
  {
    label: 'Deactivate',
    icon: 'user-x',
    actionKey: 'deactivate',
    className: '--pointer mb-3'
  }
];

export const inactiveAction = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-3'
  },
  {
    label: 'Deactivate',
    icon: 'user-x',
    actionKey: 'deactivate',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];
