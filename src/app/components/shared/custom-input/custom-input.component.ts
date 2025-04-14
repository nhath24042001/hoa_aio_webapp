/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, forwardRef, input, output } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, PasswordModule, InputTextModule, FormsModule, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  readonly type = input<'text' | 'password'>('text');
  readonly icon = input('');
  readonly placeholder = input('');
  readonly mode = input('');
  readonly isError = input(false);
  valueChange = output<string>();

  value: string = '';
  isPasswordVisible = false;
  disabled = false;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChange = (_value: string) => {};
  private onTouched = () => {};

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event | string) {
    this.value = typeof event === 'string' ? event : (event.target as HTMLInputElement).value;
    this.onChange(this.value);
    this.valueChange.emit(this.value);
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
}
