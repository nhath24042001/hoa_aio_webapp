import { Component, forwardRef, Input } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { DatePipe } from '@angular/common';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  imports: [SelectModule, InputTextModule, DatePicker, DatePipe, FormsModule],
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
export class FormField {
  @Input() icon = '';
  @Input() label = '';
  @Input() type = '';
  @Input() field = '';
  @Input() width: string | undefined = '';
  @Input() placeholder: string | undefined = '';
  @Input() options: any[] | undefined = [];
  @Input() value: any = '';
  @Input() currentMode = '';
  @Input() dialogType = '';
  @Input() ACTION_DIALOG: any;
  @Input() isCreateMode = false;
  @Input() formControl!: FormControl | any;

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
}
