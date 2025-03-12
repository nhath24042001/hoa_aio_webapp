import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { DatePipe } from '@angular/common';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { InputFile } from '~/components/shared/input-file/input-file.component';

@Component({
  selector: 'app-form-field',
  imports: [SelectModule, InputTextModule, DatePicker, DatePipe, FormsModule, InputFile],
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
  @Input() value: any = '';
  @Input() currentMode = '';
  @Input() dialogType = '';
  @Input() ACTION_DIALOG: any;
  @Input() isCreateMode = false;
  @Input() formControl!: FormControl | any;

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

  setDisabledState?(isDisabled: boolean): void {}

  updateValue(event: any) {
    this.value = event;
    this.onChange(event);
  }

  onStatusChange(event: any) {
    this.classField = `--${event.value.code}`;
  }

  ngOnInit(): void {
    if (this.dialogType == 'edit' && this.field === 'status') {
      if (this.options && this.options.length > 0) {
        this.formControl = this.options[0];
        this.classField = `--${this.options[0].code}`;
      }
    }
  }
}
