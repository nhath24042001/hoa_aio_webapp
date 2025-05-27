import { Component, computed, signal } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { PROJECT_CUSTOM_SELECT } from '~/constants/select';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-project-dialog',
  imports: [DynamicDialog],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialog {
  data: any;
  type = signal<string>('');
  title = computed(() => {
    return this.type() === 'create' ? 'Create New Project' : 'Project Details';
  });

  formData = computed(() => {
    return this.data.data.formData;
  });

  list_columns: DynamicField[] = [
    {
      icon: 'list-sm',
      field: 'project_type',
      label: 'Type',
      type: 'select',
      position: 'left',
      list: [
        {
          name: 'Renovation',
          code: 2
        },
        {
          name: 'Maintenance',
          code: 1
        },
        {
          name: 'New construction',
          code: 3
        },
        {
          name: 'Inspection',
          code: 4
        },
        {
          name: 'Other',
          code: 5
        }
      ],
      placeholder: 'Select',
      required: true,
      validators: [{ type: 'required' }, { type: 'pattern', value: '^[0-9]+$' }]
    },
    {
      icon: 'flag',
      field: 'priority',
      label: 'Priority',
      type: 'select',
      placeholder: 'Low',
      position: 'left',
      list: [
        {
          name: 'Low',
          code: 0
        },
        {
          name: 'Medium',
          code: 1
        },
        {
          name: 'High',
          code: 2
        },
        {
          name: 'Critical',
          code: 3
        }
      ]
    },
    {
      icon: 'sticker-circle',
      field: 'status',
      label: 'Status',
      type: 'select',
      placeholder: 'Select',
      position: 'left',
      list: [
        {
          name: 'New',
          code: 0
        },
        {
          name: 'Planning',
          code: 1
        },
        {
          name: 'In Progress',
          code: 2
        },
        {
          name: 'On Hold',
          code: 3
        },
        {
          name: 'Completed',
          code: 4
        },
        {
          name: 'Cancelled',
          code: 5
        }
      ]
    },
    {
      icon: 'finger',
      field: 'bid',
      label: 'Bid',
      type: 'input',
      placeholder: 'Select',
      position: 'left'
    },
    {
      icon: 'hourglass',
      field: 'eta_time',
      label: 'ETA',
      type: 'date',
      placeholder: 'Set ETA date',
      position: 'right'
    },
    {
      icon: 'receipt',
      field: 'cost',
      label: 'Estimated Cost',
      type: 'input',
      placeholder: 'Enter estimate',
      position: 'right'
    },
    {
      icon: 'perspective',
      field: 'project_manager',
      label: 'Project Manager',
      type: 'input',
      placeholder: 'Me (enter name to change)',
      position: 'right'
    },
    {
      icon: 'truck-sm',
      field: 'vendor_name',
      label: 'Vendors',
      type: 'input',
      placeholder: 'Enter names of possible vendors, separated by comma',
      position: 'extra'
    },
    {
      icon: 'clipboard-check-sm',
      field: 'action_items',
      label: 'Action Items',
      type: 'input',
      placeholder: 'Enter action items, separated by comma',
      position: 'extra'
    }
  ];
  list_textarea = [
    {
      title: 'Project Description',
      placeholder: 'Enter description',
      value: '',
      field: 'detail'
    }
  ];
  project_custom_select = PROJECT_CUSTOM_SELECT;

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type.set(this.data.type);

    if (this.type() !== 'create') {
      this.list_columns = this.list_columns.filter((col) => col.field !== 'document');
      this.list_columns = this.list_columns.filter(
        (col) =>
          col.field !== 'status' && col.field !== 'bid' && col.field !== 'eta_time' && col.field !== 'project_manager'
      );
      this.list_columns.push(
        {
          icon: 'hourglass',
          field: 'eta_time',
          label: 'ETA',
          type: 'date',
          placeholder: 'Set ETA date',
          position: 'left'
        },
        {
          icon: 'user-square',
          label: 'Resident name',
          field: 'resident_name',
          type: 'input',
          position: 'right',
          placeholder: 'If opened on behalf of resident'
        },
        {
          icon: 'finger',
          field: 'bid',
          label: 'Bid',
          type: 'input',
          placeholder: 'Select',
          position: 'right'
        }
      );
      this.list_columns.unshift(this.project_custom_select, {
        icon: 'perspective',
        field: 'project_manager',
        label: 'Project Manager',
        type: 'input',
        placeholder: 'Me (enter name to change)',
        position: 'right'
      });

      this.list_columns = this.list_columns.map((column) => {
        return {
          ...column,
          value: this.data.data.formData[column.field]
        };
      });

      this.list_textarea.push({
        title: 'Attachments',
        field: 'attachments',
        placeholder: 'Add attachments',
        value: ''
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
