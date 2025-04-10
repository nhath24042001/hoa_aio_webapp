/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'app-project-dialog',
  imports: [DynamicDialog],
  templateUrl: './project-dialog.component.html',
  styleUrl: './project-dialog.component.scss'
})
export class ProjectDialog {
  // TODO: Fix type any
  data: any;
  type = '';

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
          code: 'renovation'
        },
        {
          name: 'Maintenance',
          code: 'maintenance'
        },
        {
          name: 'New construction',
          code: 'new_construction'
        },
        {
          name: 'Inspection',
          code: 'inspection'
        },
        {
          name: 'Other',
          code: 'other'
        }
      ],
      placeholder: 'Select'
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
          code: 'low'
        },
        {
          name: 'Medium',
          code: 'medium'
        },
        {
          name: 'High',
          code: 'high'
        },
        {
          name: 'Critical',
          code: 'critical'
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
          code: 'new'
        },
        {
          name: 'Planning',
          code: 'planning'
        },
        {
          name: 'In Progress',
          code: 'in_progress'
        },
        {
          name: 'On Hold',
          code: 'on_hold'
        },
        {
          name: 'Completed',
          code: 'completed'
        },
        {
          name: 'Cancelled',
          code: 'canceled'
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

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;

    if (this.type !== 'create') {
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
      this.list_columns.unshift(
        {
          icon: 'loading',
          field: 'status',
          label: 'Status',
          type: 'custom-select',
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
        },
        {
          icon: 'perspective',
          field: 'project_manager',
          label: 'Project Manager',
          type: 'input',
          placeholder: 'Me (enter name to change)',
          position: 'right'
        }
      );

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

  get title() {
    return this.type === 'create' ? 'Create New Project' : 'Project Details';
  }

  get formData() {
    return this.config.data;
  }
}
