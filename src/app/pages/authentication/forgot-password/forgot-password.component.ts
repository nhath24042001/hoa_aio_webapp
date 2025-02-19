import { CustomInputComponent } from './../../../components/shared/custom-input/custom-input.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.forgotPswForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    this.isSubmitting = true;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/auth/reset-password']);
    }, 2000);
  }

  onBackLogin() {
    this.router.navigate(['/auth/login']);
  }
}
