import { IHeaderTable } from '~/@types/index.d';

export const accountHeader: IHeaderTable[] = [
  {
    field: 'property_address',
    name: 'Property Address',
    sortable: true,
    width: 200
  },
  {
    field: 'owner',
    name: 'Owner'
  },
  {
    field: 'payment_type',
    name: 'Payment Type'
  },
  {
    field: 'amount_due',
    name: 'Amount Due'
  },
  {
    field: 'due_date',
    name: 'Due Date'
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

export const accountList = [
  {
    property_address: '123 Abbey Rd., Unit 2',
    owner: 'Roger Rosser',
    payment_type: 'Monthly',
    amount_due: '$200',
    due_date: '2/2/2021',
    status: 'first_notice'
  },
  {
    property_address: '23 Rose St., Unit 1',
    owner: 'Marilyn Arcand',
    payment_type: 'Special charge',
    amount_due: '$87',
    due_date: '2/2/2021',
    status: 'second_notice'
  },
  {
    property_address: '123 Abbey Rd., Unit 2',
    owner: 'Kaylynn Schleifer',
    payment_type: 'Monthly',
    amount_due: '$200',
    due_date: '2/2/2021',
    status: 'hearing'
  }
];
