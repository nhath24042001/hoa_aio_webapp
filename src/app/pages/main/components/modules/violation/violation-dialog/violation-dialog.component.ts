import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicField } from '~/@types';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-violation-dialog',
  imports: [DynamicDialog],
  templateUrl: './violation-dialog.component.html',
  styleUrl: './violation-dialog.component.scss'
})
export class ViolationDialog {
  data: any;
  type = '';

  list_columns: DynamicField[] = [
    {
      icon: 'loading',
      field: 'status',
      label: 'Status',
      type: 'custom-select',
      position: 'left',
      placeholder: 'Select',
      list: [
        {
          name: 'First notice',
          code: 'first_notice',
          icon: 'violation-first'
        },
        {
          name: 'Second notice',
          code: 'second_notice',
          icon: 'violation-second'
        },
        {
          name: 'Hearing',
          code: 'hearing',
          icon: 'hearing-2'
        },
        {
          name: 'Closed',
          code: 'closed',
          icon: 'violation-closed'
        }
      ]
    },
    {
      icon: 'list-sm',
      field: 'violation_type',
      label: 'Type',
      type: 'select',
      position: 'left',
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
      ],
      placeholder: 'Select'
    },
    {
      icon: 'clipboard',
      field: 'hoa_rule',
      label: 'HOA Rule',
      type: 'input',
      position: 'left',
      placeholder: 'Enter rule number or title'
    },
    {
      icon: 'location',
      field: 'property_address',
      label: 'Property Address',
      type: 'input',
      position: 'left',
      placeholder: 'Enter address'
    },
    {
      icon: 'home-owner',
      field: 'home_owner',
      label: 'House owner',
      type: 'input',
      position: 'left',
      placeholder: 'Enter name '
    },
    {
      icon: 'mail',
      field: 'letter_file',
      label: 'Letter to owner',
      type: 'file',
      position: 'left',
      placeholder: 'Write a letter'
    },
    {
      icon: 'file',
      field: 'subject',
      label: 'Subject',
      type: 'input',
      position: 'extra',
      placeholder: 'Enter title of the violation report'
    },
    {
      icon: 'calendar',
      field: 'date',
      label: 'Date and time',
      type: 'date',
      position: 'right',
      placeholder: 'Set date + time'
    },
    {
      icon: 'hourglass',
      field: 'due_date',
      label: 'Date and time',
      type: 'date',
      position: 'right',
      placeholder: 'Set date'
    },
    {
      icon: 'calendar',
      field: 'follow_up_date',
      label: 'Follow up date',
      type: 'date',
      position: 'right',
      placeholder: 'Set date'
    },
    {
      icon: 'hearing',
      field: 'hearing_date',
      label: 'Hearing date',
      type: 'date',
      position: 'right',
      placeholder: 'Set date'
    },
    {
      icon: 'location',
      field: 'hearing_location',
      label: 'Hearing location',
      type: 'input',
      position: 'right',
      placeholder: 'Enter address or link to meeting'
    }
  ];

  list_textarea = [
    {
      title: 'Violation Description',
      placeholder: 'Enter description',
      value: ''
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;
  }

  get title() {
    return this.type === 'create' ? 'Create New Violation Report' : 'Violation Report Details';
  }

  get formData() {
    return this.config.data;
  }
}
