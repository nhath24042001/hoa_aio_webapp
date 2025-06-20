/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-request-estimate-dialog',
  imports: [DynamicDialog],
  templateUrl: './request-estimate-dialog.component.html',
  styleUrl: './request-estimate-dialog.component.scss'
})
export class RequestEstimateDialog {
  // TODO: Fix type any
  data: any;
  type = '';

  list_columns: DynamicField[] = [
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
      icon: 'thunder',
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
    return this.type === 'create' ? 'Request an Estimate' : 'Estimate Details';
  }

  get formData() {
    return this.config.data;
  }
}
