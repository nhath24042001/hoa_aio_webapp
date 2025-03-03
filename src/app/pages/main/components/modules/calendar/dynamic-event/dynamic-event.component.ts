import { Component, ElementRef, ViewChild } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { ChipModule } from 'primeng/chip';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { ThemeService } from '~/services/theme.service';
import { eventList } from '~/data/calendar';
import { ACTION_DIALOG } from '~/enums';
import { DialogHeader } from '~/pages/main/components/dialog/dialog-header/dialog-header.component';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { FormParticipantSelector } from '~/pages/main/components/dialog/form-participant-selector/form-participant-selector.component';

@Component({
  selector: 'dynamic-event',
  imports: [
    DividerModule,
    SelectModule,
    FormsModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    ChipModule,
    ButtonPrimary,
    DialogHeader,
    FormField,
    FormParticipantSelector
  ],
  templateUrl: './dynamic-event.component.html',
  styleUrl: './dynamic-event.component.scss'
})
export class DynamicEvent extends BaseComponent {
  @ViewChild('chipInput') chipInput!: ElementRef;
  eventList = eventList;
  dialogType = '';
  tags: string[] = [];
  inputValue: string = '';
  isBackspacePressed = false;
  ACTION_DIALOG = ACTION_DIALOG;
  eventData: any;

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService);
    this.dialogType = this.config.data.type;
    this.eventData = this.config.data.event ?? {};
  }

  get isCreateMode() {
    return this.dialogType === this.ACTION_DIALOG.CREATE;
  }

  left_box = [
    {
      icon: 'list-sm',
      field: 'event_type',
      label: 'Event Type',
      type: 'select',
      list: this.eventList,
      placeholder: 'Select'
    },
    {
      icon: 'clock',
      field: 'start_date',
      label: 'Start',
      type: 'date',
      placeholder: 'Set date & time'
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
      width: '280px'
    }
  ];

  right_box = [
    {
      icon: 'location',
      field: 'location',
      label: 'Location',
      type: 'input',
      list: [],
      placeholder: 'Enter location or video meeting link'
    },
    {
      icon: 'clock',
      field: 'end_date',
      label: 'End',
      type: 'date',
      placeholder: 'Set date & time'
    },
    {
      icon: 'coins-hand',
      field: 'price',
      label: 'Price',
      type: 'input',
      placeholder: 'Leave empty for free events'
    }
  ];

  closeDialog() {
    this.ref.close();
  }

  addTag(event: any) {
    event.preventDefault();

    const newTag = this.inputValue.trim();
    if (newTag && !this.tags.includes(newTag)) {
      this.tags.push(newTag);
      this.inputValue = '';
    }
  }

  removeTag(index: any) {
    this.tags.splice(index, 1);
  }

  focusInput() {
    this.chipInput.nativeElement.focus();
  }
}
