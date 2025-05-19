import { IHeaderTable } from '~/@types/task';

export const violationHeader: IHeaderTable[] = [
  {
    field: 'property_address',
    name: 'Property Address',
    sortable: true,
    width: 200
  },
  {
    field: 'violation_type',
    name: 'Violation Type'
  },
  {
    field: 'subject',
    name: 'Subject'
  },
  {
    field: 'date',
    name: 'Date & Time',
    width: 150
  },
  {
    field: 'due_date',
    name: 'Due Date',
    width: 120
  },
  {
    field: 'status',
    name: 'Status',
    width: 150
  },
  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const openViolationList = [
  {
    property_address: '123 Abbey Rd., Unit 2',
    violation_type: 'Noise',
    subject: 'Loud party noise. Too much fun being had.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'first_notice'
  },
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Landscaping',
    subject: 'Tree blocking neighbour’s window. Needs trimming.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'second_notice'
  },
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Pets',
    subject: 'Dog barking all day.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'hearing'
  },
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Vehicles',
    subject:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'first_notice'
  }
];

export const closedViolationList = [
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Vehicles',
    subject:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'closed'
  },
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Pets',
    subject: 'Dog barking all day.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'closed'
  },
  {
    property_address: '23 Rose St., Unit 1',
    violation_type: 'Vehicles',
    subject:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2/2/2021 2:00 PM',
    due_date: '2/2/2021',
    status: 'closed'
  }
];
