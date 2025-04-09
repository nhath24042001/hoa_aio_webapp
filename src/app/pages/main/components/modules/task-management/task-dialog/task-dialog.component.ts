/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { LIST_TASK_STATUS, PRIORITY_LIST, PROJECT_TYPES } from '~/constants';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-task-dialog',
  imports: [DynamicDialog],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialog {
  data: any;
  type = '';
  project_types = PROJECT_TYPES;
  priority_list = PRIORITY_LIST;
  status_list = LIST_TASK_STATUS;

  list_columns: DynamicField[] = [
    {
      icon: 'list-sm',
      label: 'Type',
      field: 'type',
      type: 'select',
      position: 'left',
      list: this.project_types,
      placeholder: 'Select'
    },
    {
      icon: 'flag',
      label: 'Priority',
      field: 'priority',
      type: 'select',
      position: 'left',
      list: this.priority_list,
      placeholder: 'Select'
    },
    {
      icon: 'user-square',
      label: 'Resident name',
      field: 'resident_name',
      type: 'input',
      position: 'left',
      list: [],
      placeholder: 'If opened on behalf of resident'
    },
    {
      icon: 'home-sm',
      label: 'Property Address',
      field: 'property_address',
      type: 'input',
      position: 'left',
      list: [],
      placeholder: 'Enter address'
    },
    {
      icon: 'user-up-sm',
      label: 'Assigned to',
      field: 'assigned_to',
      type: 'input',
      position: 'right',
      list: [],
      placeholder: 'Enter names, separated by comma'
    },
    {
      icon: 'hourglass',
      label: 'ETA',
      field: 'eta',
      type: 'date',
      position: 'right',
      placeholder: 'Set ETA date'
    },
    {
      icon: 'perspective',
      label: 'Project',
      field: 'project',
      type: 'select',
      position: 'right',
      list: this.project_types,
      placeholder: 'Select'
    }
  ];

  list_textarea = [
    {
      title: 'Task Description',
      placeholder: 'Enter description',
      value: ''
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;

    if (this.type !== 'create') {
      this.list_columns = this.list_columns.map((column) => {
        return {
          ...column,
          value: this.data.data.formData[column.field]
        };
      });
    }
  }

  get title() {
    return this.type === 'create' ? 'Create New Task' : 'Action Items';
  }

  get formData() {
    return this.config.data;
  }
}
