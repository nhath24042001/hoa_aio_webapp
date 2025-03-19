import { IHeaderTable } from '~/@types/task';

export const propertiesHeader: IHeaderTable[] = [
  {
    field: 'property_address',
    name: 'Property Address',
    sortable: true,
    width: '200px'
  },
  {
    field: 'owner',
    name: 'Owner'
  },
  {
    field: 'Property_type',
    name: 'Property Type'
  },
  {
    field: 'purchase_date',
    name: 'Purchase date',
    width: '150px'
  },
  {
    field: 'end_date',
    name: 'End date',
    width: '120px'
  },
  {
    field: 'occupancy_status',
    name: 'Occupancy Status',
    width: '150px'
  },
  {
    field: 'tenant_names',
    name: 'Tenant Names',
    width: '150px'
  },
  {
    field: 'action',
    name: '',
    width: '20px'
  }
];

export const propertiesList = [
  {
    property_address: '123 Abbey Rd., Unit 2',
    owner: 'Marilyn Siphron',
    Property_type: 'Single family',
    purchase_date: '2/2/2021',
    end_date: '2/2/2021',
    occupancy_status: 'Owner-occupied',
    tenant_names: 'Cristofer Kenter'
  },
  {
    property_address: '23 Rose St., Unit 1',
    owner: 'Alfonso Vetrovs',
    Property_type: 'Apartment',
    purchase_date: '2/2/2021',
    end_date: '2/2/2021',
    occupancy_status: 'Rented',
    tenant_names: '-'
  },
  {
    property_address: '23 Rose St., Unit 1',
    owner: 'John Doe',
    Property_type: 'Apartment',
    purchase_date: '2/2/2021',
    end_date: '2/2/2021',
    occupancy_status: 'Occupied',
    tenant_names: '-'
  }
];

export const propertiesActions = [
  {
    label: 'Edit',
    icon: 'edit',
    actionKey: 'edit',
    className: '--pointer mb-3'
  },
  {
    label: 'Upload a document',
    icon: 'upload-cloud-02',
    actionKey: 'upload_document',
    className: '--pointer mb-3'
  },
  {
    label: 'Send Letter to Owner',
    icon: 'mail-plus-03',
    actionKey: 'send_letter',
    className: '--pointer mb-3'
  },
  {
    label: 'Delete',
    icon: 'trash',
    actionKey: 'delete',
    className: '--delete-action --pointer'
  }
];

export const homeOwnerHeader: IHeaderTable[] = [
  {
    field: 'owner_name',
    name: 'Owner Name',
    sortable: true,
    width: '200px'
  },
  {
    field: 'mobile_number',
    name: 'Mobile Number',
    width: '150px'
  },
  {
    field: 'email_address',
    name: 'Email Address'
  },
  {
    field: 'purchase_date',
    name: 'Purchase date',
    width: '150px'
  },
  {
    field: 'status',
    name: 'Status'
  },
  {
    field: 'properties',
    name: 'Properties',
    width: '150px'
  },
  {
    field: 'registration_date',
    name: 'Registration date',
    width: '150px'
  },
  {
    field: 'action',
    name: '',
    width: '20px'
  }
];

export const homeOwnerList = [
  {
    owner_name: 'Marilyn Siphron',
    mobile_number: '213-545-6789',
    email_address: 'marilyn.123@email.com',
    purchase_date: '2/2/2021',
    status: 'active',
    properties: '4567890',
    registration_date: '2/2/2021'
  },
  {
    owner_name: 'Erin Franci',
    mobile_number: '213-545-6789',
    email_address: 'marilyn.123@email.com',
    purchase_date: '2/2/2021',
    status: 'inactive',
    properties: '4567890',
    registration_date: '2/2/2021'
  },
  {
    owner_name: 'Alfonso Vetrovs',
    mobile_number: '213-545-6789',
    email_address: 'marilyn.123@email.com',
    purchase_date: '2/2/2021',
    status: 'active',
    properties: '4567890',
    registration_date: '2/2/2021'
  }
];

export const homeInputFields = [
  {
    icon: 'location',
    field: 'address',
    label: 'Address',
    type: 'input',
    position: 'left',
    placeholder: 'Enter address'
  },
  {
    icon: 'location',
    field: 'city',
    label: 'City',
    type: 'select',
    position: 'left',
    placeholder: 'Select',
    list: [
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
      }
    ]
  },
  {
    icon: 'location',
    field: 'state',
    label: 'State',
    type: 'select',
    position: 'left',
    placeholder: 'Select',
    list: [
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
      }
    ]
  },
  {
    icon: 'location',
    field: 'zip_code',
    label: 'Zip Code',
    type: 'input',
    position: 'left',
    placeholder: 'Enter name'
  },
  {
    icon: 'home-owner',
    field: 'owner',
    label: 'Owner',
    type: 'select',
    position: 'left',
    placeholder: 'Select',
    list: [
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
      }
    ]
  },
  {
    icon: 'location',
    field: 'mail_address',
    label: 'Mailing Address',
    type: 'input',
    position: 'left',
    placeholder: 'Enter address'
  },
  {
    icon: 'phone',
    field: 'phone',
    label: 'Owner Phone no.',
    type: 'phone',
    position: 'left',
    placeholder: '555-556-789'
  },
  {
    icon: 'home-owner',
    field: 'primary_residence',
    label: 'Primary Residence',
    type: 'select',
    position: 'left',
    placeholder: 'Select',
    list: [
      {
        name: 'Owner',
        code: 'owner'
      }
    ]
  },
  {
    icon: 'home-owner',
    field: 'occupancy_status',
    label: 'Occupancy Status',
    type: 'select',
    position: 'left',
    placeholder: 'Select',
    list: [
      {
        name: 'Owner-occupied',
        code: 'Owner-occupied'
      }
    ]
  },
  {
    icon: 'home-owner',
    field: 'tenant_names',
    label: 'Tenant Names',
    type: 'input',
    position: 'left',
    placeholder: 'Enter name if other than owner'
  },
  {
    icon: 'phone',
    field: 'tenant_phone',
    label: 'Tenant Phone no.',
    type: 'phone',
    position: 'left',
    placeholder: '555-556-789'
  },
  {
    icon: 'at-sign',
    field: 'tenant_email',
    label: 'Tenant Email',
    type: 'input',
    position: 'left',
    placeholder: 'Enter Email if other than owner'
  },
  {
    icon: 'calendar',
    field: 'purchase_date',
    label: 'Purchase date',
    type: 'date',
    position: 'right',
    placeholder: 'Set date'
  },
  {
    icon: 'hourglass',
    field: 'end_date',
    label: 'End date',
    type: 'date',
    position: 'right',
    placeholder: 'Set date'
  },
  {
    icon: 'hourglass',
    field: 'ownership_type',
    label: 'Ownership Type',
    type: 'date',
    position: 'right',
    placeholder: 'Select',
    list: [
      {
        name: 'Individual',
        code: 'in'
      }
    ]
  },
  {
    icon: 'home-sm',
    field: 'property_type',
    label: 'Property Type',
    type: 'select',
    position: 'right',
    placeholder: 'Single family',
    list: [
      {
        name: 'Individual',
        code: 'in'
      }
    ]
  },
  {
    icon: 'ruler',
    field: 'square_footage',
    label: 'Square Footage',
    type: 'input',
    position: 'right',
    placeholder: 'Enter number'
  },
  {
    icon: 'ruler',
    field: 'number_of_bedrooms',
    label: 'Number of Bedrooms/Bathrooms',
    type: 'input',
    position: 'right',
    placeholder: '#Beds / #Baths',
    width: '270px'
  },
  {
    icon: 'car',
    field: 'parking_space',
    label: 'Parking Space Assignments',
    type: 'select',
    position: 'right',
    placeholder: 'Select',
    list: [
      {
        name: 'Yes',
        code: 'yes'
      },
      {
        name: 'No',
        code: 'no'
      }
    ],
    width: '270px'
  },
  {
    icon: 'package',
    field: 'storage_unit',
    label: 'Storage Unit Assignment',
    type: 'select',
    position: 'right',
    placeholder: 'Select',
    list: [
      {
        name: 'Yes',
        code: 'yes'
      },
      {
        name: 'No',
        code: 'no'
      }
    ],
    width: '270px'
  }
];
