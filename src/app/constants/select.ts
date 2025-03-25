import { ISelect } from '~/@types';
import { REPORT_TYPE, SUB_REPORT_TYPE } from '~/enums/types';

export const report_types: ISelect[] = [
  {
    name: REPORT_TYPE.FACILITIES_BOOKING,
    code: 'facilities_booking',
  },
  {
    name: REPORT_TYPE.FINANCIAL_REPORT,
    code: 'financial_report',
  },
  {
    name: REPORT_TYPE.MAINTENANCE_REPORT,
    code: 'maintenance_report',
  },
  {
    name: REPORT_TYPE.VIOLATION_TRACKING,
    code: 'violation_tracking',
  },
  {
    name: REPORT_TYPE.ARCHITECTURAL_REVIEW,
    code: 'architectural_review',
  },
  {
    name: REPORT_TYPE.RESIDENT_REPORT,
    code: 'resident_report',
  },
];

export const sub_report_types: ISelect[] = [
  {
    name: SUB_REPORT_TYPE.MONTHLY_FINANCIAL,
    code: 'monthly_financial',
  },
  {
    name: SUB_REPORT_TYPE.DUES_COLLECTION,
    code: 'dues_collection_report',
  },
  {
    name: SUB_REPORT_TYPE.VENDOR_PAYMENT_ANALYSIS,
    code: 'vendor_payment_analysis',
  },
];
