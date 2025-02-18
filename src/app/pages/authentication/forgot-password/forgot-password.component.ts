import { CustomInputComponent } from './../../../components/shared/custom-input/custom-input.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CustomInputComponent, ButtonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotPswForm: FormGroup;
  isSubmitting = false;
  loading = false;

  constructor(private fb: FormBuilder) {
    this.forgotPswForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.isSubmitting = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
