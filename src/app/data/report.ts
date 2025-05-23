import { IHeaderTable } from '~/@types/index.d';

export const reportHeader: IHeaderTable[] = [
  {
    field: 'report_type',
    name: 'Report Type',
    sortable: true
  },
  {
    field: 'sub_type',
    name: 'Sub-type'
  },
  {
    field: 'report_date',
    name: 'Report Date Range'
  },
  {
    field: 'created_date',
    name: 'Creation Date'
  },
  {
    field: 'action',
    name: '',
    width: 20
  }
];

export const reportList = [
  {
    report_type: 'Financial Report',
    sub_type: 'Monthly Financial Summary',
    report_date: '2/2/2021',
    created_date: '2/2/2021'
  }
];

export const reportActions = [
  {
    label: 'Print Report',
    icon: 'printer',
    actionKey: 'print',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];
