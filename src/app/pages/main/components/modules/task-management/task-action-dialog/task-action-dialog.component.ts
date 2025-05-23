/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { LIST_TASK_STATUS, PRIORITY_LIST, PROJECT_TYPES } from '~/constants';
import { TASK_CUSTOM_SELECT } from '~/constants/select';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-task-action-dialog',
  imports: [DynamicDialog],
  templateUrl: './task-action-dialog.component.html',
  styleUrl: './task-action-dialog.component.scss'
})
export class TaskActionDialogComponent {
  data: any;
  type = '';
  project_types = PROJECT_TYPES;
  priority_list = PRIORITY_LIST;
  status_list = LIST_TASK_STATUS;
  custom_select_list = TASK_CUSTOM_SELECT;
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
      value: '',
      field: 'description'
    }
  ];

  dialogTitle = computed(() => {
    return this.type === 'create' ? 'Create New Task' : 'Action Items';
  });

  formData = computed(() => {
    return this.config.data;
  });

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;

    if (this.type !== 'create') {
      this.list_columns.unshift(this.custom_select_list);
      this.list_columns = this.list_columns.filter(
        (col) => col.field !== 'resident_name' && col.field !== 'property_address' && col.field !== 'eta'
      );
      this.list_columns.push(
        {
          icon: 'hourglass',
          label: 'ETA',
          field: 'eta',
          type: 'date',
          position: 'left',
          placeholder: 'Set ETA date'
        },
        {
          icon: 'user-square',
          label: 'Resident name',
          field: 'resident_name',
          type: 'input',
          position: 'right',
          list: [],
          placeholder: 'If opened on behalf of resident'
        },
        {
          icon: 'home-sm',
          label: 'Property Address',
          field: 'property_address',
          type: 'input',
          position: 'right',
          list: [],
          placeholder: 'Enter address'
        }
      );

      this.list_textarea.push(
        {
          title: 'Comments',
          field: 'comments',
          placeholder: 'Add comments',
          value: ''
        },
        {
          title: 'Attachments',
          field: 'attachments',
          placeholder: 'Add attachments',
          value: ''
        }
      );

      this.list_columns = this.list_columns.map((column) => {
        return {
          ...column,
          value: this.data.data.formData[column.field]
        };
      });

      this.list_textarea = this.list_textarea.map((textarea) => {
        return {
          ...textarea,
          value: this.data.data.formData[textarea.field]
        };
      });
    }
  }
}
