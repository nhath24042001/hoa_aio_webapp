import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicField } from '~/@types';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-vendor-dialog',
  imports: [DynamicDialog],
  templateUrl: './vendor-dialog.component.html',
  styleUrl: './vendor-dialog.component.scss'
})
export class VendorDialog {
  data: any;
  type = '';

  list_columns: DynamicField[] = [
    {
      icon: 'list-sm',
      field: 'industry_type',
      label: 'Industry',
      type: 'select',
      position: 'left',
      list: [
        {
          name: 'Maintenance',
          code: 'maintenance'
        },
        {
          name: '2',
          code: '2'
        },
        {
          name: '3',
          code: '3'
        },
        {
          name: '4',
          code: '4'
        }
      ],
      placeholder: 'Select'
    },
    {
      icon: 'user-up-sm',
      field: 'contact_person',
      label: 'Contact Person',
      type: 'input',
      position: 'left',
      placeholder: 'Enter name'
    },
    {
      icon: 'at-sign',
      field: 'contact_email',
      label: 'Contact Email',
      type: 'input',
      position: 'left',
      placeholder: 'Enter Email'
    },
    {
      icon: 'phone',
      field: 'phone',
      label: 'Contact Phone',
      type: 'input',
      position: 'left',
      placeholder: 'Enter phone number'
    },
    {
      icon: 'document',
      field: 'document',
      label: 'Documents',
      type: 'file',
      position: 'left',
      placeholder: 'Certificates, insurance, licenses'
    },
    {
      icon: 'hash',
      field: 'license_number',
      label: 'License Number',
      type: 'input',
      position: 'right',
      placeholder: 'Enter number'
    },
    {
      icon: 'image-upload',
      field: 'image',
      label: 'Image/Logo',
      type: 'file',
      position: 'right',
      placeholder: 'Upload file'
    },
    {
      icon: 'star',
      field: 'rating',
      label: 'Rating',
      type: 'select',
      position: 'right',
      placeholder: 'Select',
      list: [
        {
          name: '1',
          code: '1'
        },
        {
          name: '2',
          code: '2'
        },
        {
          name: '3',
          code: '3'
        },
        {
          name: '4',
          code: '4'
        }
      ]
    },
    {
      icon: 'hourglass',
      field: 'expiry_date',
      label: 'Expiration Date',
      type: 'date',
      position: 'right',
      placeholder: 'Set exp. date'
    },
    {
      icon: 'truck-sm',
      field: 'vendor_title',
      label: 'Title',
      type: 'input',
      position: 'extra',
      placeholder: 'Enter title of the vendor business type'
    }
  ];

  list_textarea = [
    {
      title: 'Vendor Description',
      placeholder: 'Enter description',
      value: ''
    },
    {
      title: 'Comments',
      placeholder: 'Enter comments',
      value: ''
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;

    if (this.type !== 'create') {
      this.list_columns = this.list_columns.filter((col) => col.field !== 'document');
      this.list_columns.unshift({
        icon: 'loading',
        field: 'status',
        label: 'Status',
        type: 'select',
        position: 'left',
        list: [
          {
            name: 'Pending',
            code: 'pending'
          },
          {
            name: 'Approved',
            code: 'approved'
          }
        ],
        placeholder: 'Select'
      });

      this.list_columns = this.list_columns.map((column) => {
        return {
          ...column,
          value: this.data.data.formData[column.field]
        };
      });
    }
  }

  get title() {
    return this.type === 'create' ? 'Create New Vendor' : 'Vendor Details';
  }

  get formData() {
    return this.config.data;
  }
}
