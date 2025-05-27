/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePipe } from '@angular/common';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { CustomSelect } from '~/components/shared/custom-select/custom-select.component';
import { InputFile } from '~/components/shared/input-file/input-file.component';
import { InputPhone } from '~/components/shared/input-phone/input-phone.component';

import { FormParticipant } from '../form-participant-selector/form-participant-selector.component';

@Component({
  selector: 'app-form-field',
  imports: [
    SelectModule,
    InputTextModule,
    DatePicker,
    DatePipe,
    FormsModule,
    AvatarModule,
    AvatarGroupModule,
    InputFile,
    CustomSelect,
    InputPhone,
    FormParticipant
  ],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormField),
      multi: true
    }
  ]
})
export class FormField implements OnInit {
  @Input() icon = '';
  @Input() label = '';
  @Input() type = '';
  @Input() field = '';
  @Input() width: string | undefined = '';
  @Input() placeholder: string = '';
  @Input() options: any[] | undefined = [];
  @Input() customIcon: string | undefined = '';
  @Input() value: any = '';
  @Input() currentMode = '';
  @Input() dialogType = '';
  @Input() ACTION_DIALOG: any;
  @Input() isCreateMode = false;
  @Input() formControl!: FormControl | any;
  @Input() required: boolean | undefined = false;

  tags: string[] = [];
  chipInput: any;

  classField = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(): void {}

  updateValue(event: any) {
    this.value = event;
    this.onChange(event);
  }

  onStatusChange(event: any) {
    this.classField = `--${event.value.code}`;
  }

  addTag(event: any) {
    event.preventDefault();

    const newTag = event.target.value.trim();

    if (newTag && !this.tags.includes(newTag)) {
      this.tags.push(newTag);
    }
  }

  removeTag(index: any) {
    this.tags.splice(index, 1);
  }

  focusInput() {
    this.chipInput.nativeElement.focus();
  }

  ngOnInit(): void {
    if (this.dialogType !== 'create' && this.field === 'custom-status') {
      if (this.options && this.options.length > 0) {
        this.formControl = this.options[0];
        this.classField = `--${this.options[0].code}`;
      }
    }
  }
}
