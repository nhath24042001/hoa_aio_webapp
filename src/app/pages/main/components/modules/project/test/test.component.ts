import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';

import { CustomSelect } from '~/components/shared/custom-select/custom-select.component';
import { InputFile } from '~/components/shared/input-file/input-file.component';
import { InputPhone } from '~/components/shared/input-phone/input-phone.component';

@Component({
  selector: 'app-test',
  imports: [SelectModule, DatePicker, InputTextModule, CustomSelect, InputFile, InputPhone, ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent {
  form: FormGroup;
  isSubmitted = false;

  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  customSelectOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      selectedCity: [null, [Validators.required]],
      date: [null, [Validators.required]],
      text: [''],
      phone: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    // this.form.markAllAsTouched();

    if (this.form.valid) {
      console.log('✅ Form submitted:', this.form.value);
      // Optional: reset isSubmitted và form nếu muốn
      // this.isSubmitted = false;
      // this.form.reset();
    } else {
      console.warn('❌ Invalid form');
    }
  }
}
