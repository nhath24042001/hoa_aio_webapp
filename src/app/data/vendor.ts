import { IHeaderTable } from '~/@types/task';

export const companyHeaders: IHeaderTable[] = [
  {
    field: 'company_name',
    name: 'Company Name',
    sortable: true
  },
  {
    field: 'title',
    name: 'Title'
  },
  {
    field: 'image',
    name: 'Image'
  },
  {
    field: 'industry',
    name: 'Industry'
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
] as const;

export const bidHeaders: IHeaderTable[] = [
  {
    field: 'title',
    name: 'Title',
    sortable: true
  },
  {
    field: 'description',
    name: 'Description'
  },
  {
    field: 'created_date',
    name: 'Created'
  },
  {
    field: 'expected_start',
    name: 'Expected start',
    width: '150px'
  },
  {
    field: 'status',
    name: 'Status',
    width: '220px'
  },
  {
    field: 'action',
    name: '',
    width: '20px'
  }
] as const;

export const companyList = [
  {
    company_name: 'AB Services Co.',
    title: 'General Maintenance Service Providers',
    image:
      'data:image/png;base64,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',
    industry: 'Maintenance',
    status: 'pending'
  },
  {
    company_name: 'HardHatters',
    title: 'Construction & Reconstruction',
    image:
      'data:image/png;base64,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',
    industry: 'Construction',
    status: 'approved'
  },
  {
    company_name: 'Monkey Biz & Co.',
    title: 'General Business',
    image:
      'data:image/jpeg;base64,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',
    industry: 'Maintenance',
    status: 'approved'
  },
  {
    company_name: 'AB Services Co.',
    title: 'General Maintenance Service Providers',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1sj430b2akyDaCLv14AsLMhMweXBQ8om7kg&s',
    industry: 'Maintenance',
    status: 'approved'
  }
];

export const bidList = [
  {
    title: 'Palm Springs General Maintenance ',
    description: 'General maintenance service provider for ongoing duties on premise.',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'draft'
  },
  {
    title: 'Open Bid Title',
    description: 'Construction & Reconstruction',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'open'
  },
  {
    title: 'Bid Title in a List ',
    description: 'General Businesss',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'under_review'
  },
  {
    title: 'Bid Title in a List ',
    description: 'General Businesss',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'clarification_requested'
  },
  {
    title: 'Bid Title in a List ',
    description: 'General Businesss',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'evaluated'
  },
  {
    title: 'Bid Title in a List ',
    description: 'General Businesss',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'awarded'
  }
];

export const estimateList = [
  {
    title: 'Palm Springs General Maintenance ',
    description: 'General maintenance service provider for ongoing duties on premise.',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'replied'
  },
  {
    title: 'Open Estimate',
    description: 'Construction & Reconstruction',
    created_date: '12/05/2024',
    expected_start: '02/05/2025',
    status: 'open'
  }
];

export const vendorActions = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-3'
  },
  {
    label: 'Approve',
    icon: 'green-check-circle-broken',
    actionKey: 'approve',
    className: '--pointer mb-3'
  },
  {
    label: 'Mark as pending',
    icon: 'orange-finger',
    actionKey: 'mask_as_pending',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const violationActions = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-3'
  },
  {
    label: 'Send Letter to Owner',
    icon: 'mail-plus',
    actionKey: 'send',
    className: '--pointer mb-3'
  },
  {
    label: 'Close',
    icon: 'violation-closed',
    actionKey: 'mask_as_pending',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const violationType = [
  {
    name: 'Noise',
    code: 'noise'
  },
  {
    name: 'Landscaping',
    code: 'landscaping'
  },
  {
    name: 'Pets',
    code: 'pets'
  },
  {
    name: 'Garbage',
    code: 'garbage'
  },
  {
    name: 'Illegal Rentals',
    code: 'illegal_rentals'
  },
  {
    name: 'Vehicles',
    code: 'vehicles'
  },
  {
    name: 'Design Change',
    code: 'design_change'
  }
];
