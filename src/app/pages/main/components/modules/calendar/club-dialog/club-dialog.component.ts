/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { eventList } from '~/data/calendar';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';
@Component({
  selector: 'app-club-dialog',
  imports: [DynamicDialog],
  templateUrl: './club-dialog.component.html',
  styleUrl: './club-dialog.component.scss'
})
export class ClubDialog {
  data: any;
  type = '';

  eventList = eventList;
  registered_users: string[] = [];
  inputValue: string = '';

  list_columns: DynamicField[] = [
    {
      icon: 'list-sm',
      field: 'activity_type',
      label: 'Activity Type',
      type: 'select',
      list: this.eventList,
      placeholder: 'Select',
      position: 'left'
    },
    {
      icon: 'clock',
      field: 'start_date',
      label: 'Start',
      type: 'date',
      placeholder: 'Set date & time',
      position: 'left'
    },
    {
      icon: 'whistle',
      field: '  trainer',
      label: 'Trainer Name',
      type: 'input',
      placeholder: 'Trainer Name',
      position: 'left'
    },
    {
      icon: 'currency-dollar-circle',
      field: 'cost',
      label: 'Cost',
      type: 'input',
      placeholder: 'Cost',
      position: 'left'
    },
    {
      icon: 'location',
      field: 'location',
      label: 'Location',
      type: 'input',
      placeholder: 'Select room or club name',
      position: 'right'
    },
    {
      icon: 'clock',
      field: 'end_date',
      label: 'End',
      type: 'date',
      placeholder: 'Set date & time',
      position: 'right'
    },
    {
      icon: 'user-group',
      field: 'max_number_of_participants',
      label: 'Max. participants',
      type: 'input',
      placeholder: 'Enter number',
      position: 'right'
    },
    {
      icon: 'user-group',
      field: 'registered_users',
      label: 'Registered users (invitees)',
      type: 'participants',
      placeholder: 'Enter names or groups, separated by comma',
      position: 'extra'
    }
  ];

  list_textarea = [
    {
      title: 'Event Description',
      field: 'description',
      placeholder: 'Enter description',
      value: ''
    },
    {
      title: 'Additional Information',
      field: 'additional_information',
      placeholder: 'Enter info',
      value: ''
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;

    if (this.type !== 'create') {
      this.list_columns = this.list_columns.map((column) => {
        let value = this.data.data.formData[column.field];

        if (column.type === 'date' && typeof value === 'string') {
          value = new Date(value);
        }

        return {
          ...column,
          value
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

  get title() {
    return this.type === 'create' ? 'Create New Club Event' : 'Club Event Detail';
  }

  get formData() {
    return this.config.data;
  }
}
