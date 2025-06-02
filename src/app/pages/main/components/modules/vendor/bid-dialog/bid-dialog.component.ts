/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-bid-dialog',
  imports: [DynamicDialog],
  templateUrl: './bid-dialog.component.html',
  styleUrl: './bid-dialog.component.scss'
})
export class BidDialog {
  // TODO: Fix type any
  data: any;
  type = '';

  list_columns: DynamicField[] = [
    {
      icon: 'loading',
      field: 'status',
      label: 'Status',
      type: 'custom-select',
      position: 'left',
      list: [
        {
          name: 'Draft',
          code: 'draft',
          icon: 'red-thunder'
        },
        {
          name: 'Open',
          code: 'open',
          icon: 'announcement-01'
        },
        {
          name: 'Under Review',
          code: 'under_review',
          icon: 'microscope-01'
        },
        {
          name: 'Clarification Requested',
          code: 'clarification_requested',
          icon: 'hand-03'
        },
        {
          name: 'Evaluated',
          code: 'evaluated',
          icon: 'loading-01'
        },
        {
          name: 'Awarded',
          code: 'awarded',
          icon: 'check-circle-broken-01'
        },
        {
          name: 'Canceled',
          code: 'canceled',
          icon: 'x-circle'
        }
      ],
      placeholder: 'Select'
    },
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
        }
      ],
      placeholder: 'Select'
    },
    {
      icon: 'ruler',
      field: 'scope_work',
      label: 'Scope of Work',
      type: 'input',
      position: 'left',
      placeholder: 'Enter scope'
    },
    {
      icon: 'award',
      field: 'req_quality',
      label: 'Req. Qualifications',
      type: 'input',
      position: 'left',
      placeholder: 'Enter required qualifications'
    },
    {
      icon: 'file',
      field: 'rfp_file',
      label: 'RFP',
      type: 'file',
      position: 'left',
      placeholder: 'Upload file'
    },
    {
      icon: 'coins-hand',
      field: 'budget',
      label: 'Budget',
      type: 'input',
      position: 'left',
      placeholder: 'Enter estimated budget range'
    },
    {
      icon: 'hourglass',
      field: 'open_date',
      label: 'Opening date',
      type: 'date',
      position: 'right',
      placeholder: 'Set opening date'
    },
    {
      icon: 'hourglass',
      field: 'close_date',
      label: 'Closing date',
      type: 'date',
      position: 'right',
      placeholder: 'Set closing date'
    },
    {
      icon: 'hourglass',
      field: 'response_due',
      label: 'Response due',
      type: 'date',
      position: 'right',
      placeholder: 'Set responses due date'
    },
    {
      icon: 'thunder-01',
      field: 'expected_start_date',
      label: 'Expected start date',
      type: 'date',
      position: 'right',
      placeholder: 'Set start date'
    },
    {
      icon: 'flag-2',
      field: 'expected_end_date',
      label: 'Expected end date',
      type: 'date',
      position: 'right',
      placeholder: 'Set end date'
    },
    {
      icon: 'microscope',
      field: 'evaluation_criteria',
      label: 'Evaluation Criteria',
      type: 'input',
      position: 'extra',
      placeholder:
        'Enter criteria e.g. price, capability, past performance, compliance requirements, separated by comma'
    }
  ];

  list_textarea = [
    {
      title: 'Submission Instructions',
      placeholder: 'Enter instructions',
      value: '',
      field: 'description'
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;
  }

  get title() {
    return this.type === 'create' ? 'Create New Bid' : 'Bid Details';
  }

  get formData() {
    return this.config.data;
  }
}
