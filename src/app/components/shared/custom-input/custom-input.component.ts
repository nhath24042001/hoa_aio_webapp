import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NG_VALUE_ACCESSOR } from '@angular/forms'
import { FormsModule } from '@angular/forms'
import { FormControl } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password'

@Component({
  selector: 'app-custom-input',
  imports: [CommonModule, PasswordModule, InputTextModule, FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomInputComponent,
      multi: true
    }
  ]
})
export class CustomInputComponent {
  @Input() type: 'text' | 'password' = 'text'
  @Input() icon = ''
  @Input() placeholder = ''
  @Input() mode = ''
  @Input() isError = false
  @Input() formControl!: FormControl
  @Input() value: string = ''
  @Output() valueChange = new EventEmitter<string>()

  isPasswordVisible = false

  onChange: any = () => {}
  onTouched: any = () => {}

  onValueChange(event: any) {
    this.valueChange.emit(this.value)
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle disabled state if needed
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement
    this.value = input.value
    this.onChange(this.value)
  }
}
