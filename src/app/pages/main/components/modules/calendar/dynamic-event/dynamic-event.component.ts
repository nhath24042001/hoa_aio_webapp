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
  // TODO: Fix type any
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
        { name: 'Yes', code: 'Y' },
        { name: 'No', code: 'N' }
      ],
      // width: '280px',
      placeholder: 'Select',
      position: 'left'
    },
    {
      icon: 'location',
      field: 'location',
      label: 'Location',
      type: 'input',
      list: [],
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
    }
  ];

  list_textarea = [
    {
      title: 'Event Description',
      placeholder: 'Enter description',
      value: ''
    }
  ];

  constructor(public config: DynamicDialogConfig) {
    this.data = config.data;
    this.type = this.data.type;
  }

  get title() {
    return this.type === 'create' ? 'Create New Event' : 'Event Detail';
  }

  get formData() {
    return this.config.data;
  }

  // addTag(event: any) {
  //   event.preventDefault();

  //   const newTag = this.inputValue.trim();
  //   if (newTag && !this.tags.includes(newTag)) {
  //     this.tags.push(newTag);
  //     this.inputValue = '';
  //   }
  // }

  // removeTag(index: any) {
  //   this.tags.splice(index, 1);
  // }

  // focusInput() {
  //   this.chipInput.nativeElement.focus();
  // }
}
