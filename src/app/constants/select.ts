import { DynamicField, ISelect } from '~/@types';
import { REPORT_TYPE, SUB_REPORT_TYPE } from '~/enums/types';

export const report_types: ISelect[] = [
  {
    name: REPORT_TYPE.FACILITIES_BOOKING,
    code: 'facilities_booking'
  },
  {
    name: REPORT_TYPE.FINANCIAL_REPORT,
    code: 'financial_report'
  },
  {
    name: REPORT_TYPE.MAINTENANCE_REPORT,
    code: 'maintenance_report'
  },
  {
    name: REPORT_TYPE.VIOLATION_TRACKING,
    code: 'violation_tracking'
  },
  {
    name: REPORT_TYPE.ARCHITECTURAL_REVIEW,
    code: 'architectural_review'
  },
  {
    name: REPORT_TYPE.RESIDENT_REPORT,
    code: 'resident_report'
  }
];

export const sub_report_types: ISelect[] = [
  {
    name: SUB_REPORT_TYPE.MONTHLY_FINANCIAL,
    code: 'monthly_financial'
  },
  {
    name: SUB_REPORT_TYPE.DUES_COLLECTION,
    code: 'dues_collection_report'
  },
  {
    name: SUB_REPORT_TYPE.VENDOR_PAYMENT_ANALYSIS,
    code: 'vendor_payment_analysis'
  }
];

export const TASK_CUSTOM_SELECT: DynamicField = {
  icon: 'loading',
  field: 'status',
  label: 'Status',
  type: 'custom-select',
  position: 'left',
  list: [
    {
      name: 'New',
      code: 'new',
      icon: 'red-thunder'
    },
    {
      name: 'assigned',
      code: 'assigned',
      icon: 'user-up-01'
    },
    {
      name: 'Accept',
      code: 'accept',
      icon: 'user-check-01'
    },
    {
      name: 'Resolve',
      code: 'resolve',
      icon: 'check-circle-broken-01'
    },
    {
      name: 'Reject',
      code: 'rejected',
      icon: 'slash-octagon'
    },
    {
      name: 'Cancel',
      code: 'cancel',
      icon: 'x-circle'
    }
  ],
  placeholder: 'Select'
};

export const PROJECT_CUSTOM_SELECT: DynamicField = {
  icon: 'loading',
  field: 'status',
  label: 'Status',
  type: 'custom-select',
  position: 'left',
  list: [
    {
      name: 'New',
      code: 'new',
      icon: 'red-thunder'
    },
    {
      name: 'Planning',
      code: 'planning',
      icon: 'compass'
    },
    {
      name: 'In Progress',
      code: 'in_progress',
      icon: 'loading-01'
    },
    {
      name: 'On Hold',
      code: 'on_hold',
      icon: 'hand'
    },
    {
      name: 'Completed',
      code: 'completed',
      icon: 'check-circle-broken-01'
    },
    {
      name: 'Cancelled',
      code: 'canceled',
      icon: 'x-circle'
    }
  ],
  placeholder: 'Select'
};

export const VENDOR_CUSTOM_SELECT: DynamicField = {
  icon: 'loading',
  field: 'status',
  label: 'Status',
  type: 'custom-select',
  position: 'left',
  list: [
    {
      name: 'Approved',
      code: 'approved',
      icon: 'check-circle-broken-01'
    },
    {
      name: 'Pending',
      code: 'pending',
      icon: 'hand'
    }
  ],
  placeholder: 'Select'
};

export const TYPE_OPTION = [
  {
    name: 'Maintenance',
    code: 1
  },
  {
    name: 'Landscape',
    code: 2
  },
  {
    name: 'Accounting',
    code: 3
  },
  {
    name: 'Design Change Request',
    code: 4
  },
  {
    name: 'Hearing',
    code: 5
  },
  {
    name: 'Meeting Action Item',
    code: 6
  },
  {
    name: 'Other',
    code: 7
  }
];

export const PRIORITY_OPTION = [
  {
    name: 'Urgent',
    code: 1
  },
  {
    name: 'Important',
    code: 2
  },
  {
    name: 'Normal',
    code: 3
  },
  {
    name: 'Low',
    code: 4
  }
];

export const CUSTOM_SELECT = [
  {
    name: 'New',
    code: 'new',
    icon: 'red-thunder'
  },
  {
    name: 'Assigned',
    code: 'assigned',
    icon: 'user-up-01'
  },
  {
    name: 'Accept',
    code: 'accept',
    icon: 'user-check-01'
  },
  {
    name: 'Resolve',
    code: 'resolved',
    icon: 'check-circle-broken-01'
  },
  {
    name: 'Reject',
    code: 'rejected',
    icon: 'slash-octagon'
  },
  {
    name: 'Cancel',
    code: 'cancel',
    icon: 'x-circle'
  }
];
