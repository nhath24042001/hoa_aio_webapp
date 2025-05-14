/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { eventList } from '~/data/calendar';
import { DynamicDialog } from '~/pages/main/components/dialog/dynamic-dialog/dynamic-dialog.component';

@Component({
  selector: 'dynamic-event',
  imports: [DynamicDialog],
  templateUrl: './dynamic-event.component.html',
  styleUrl: './dynamic-event.component.scss'
})
export class DynamicEvent {
  data: any;
  type = '';

  eventList = eventList;
  tags: string[] = [];
  inputValue: string = '';

  list_columns: DynamicField[] = [
    {
      icon: 'list-sm',
      field: 'event_type',
      label: 'Event Type',
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
      icon: 'check-circle-broken',
      field: 'registration_required',
      label: 'Registration required',
      type: 'select',
      list: [
        { name: 'Yes', code: 'yes' },
        { name: 'No', code: 'no' }
      ],
      placeholder: 'Select',
      position: 'left'
    },
    {
      icon: 'location',
      field: 'location',
      label: 'Location',
      type: 'input',
      placeholder: 'Enter location or video meeting link',
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
      icon: 'coins-hand',
      field: 'price',
      label: 'Price',
      type: 'input',
      placeholder: 'Leave empty for free events',
      position: 'right'
    },
    {
      icon: 'user-group',
      field: 'participants',
      label: 'Participants',
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

    if (this.type === 'detail') {
      this.list_textarea.push(
        {
          title: 'RSVP Approved',
          field: 'rsvp',
          placeholder: 'Add RSVP approved',
          value: ''
        },
        {
          title: 'Attachments',
          field: 'attachments',
          placeholder: 'Add attachments',
          value: ''
        }
      );
    }
  }

  get title() {
    return this.type === 'create' ? 'Create New Event' : 'Event Detail';
  }

  get formData() {
    return this.config.data;
  }
}
