import { CustomInputComponent } from './../../../components/shared/custom-input/custom-input.component';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BaseComponent } from '../../../components/common/base/base.component';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CustomInputComponent, ButtonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent extends BaseComponent {
  forgotPswForm: FormGroup;
  isSubmitting = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    themeService: ThemeService
  ) {
    super(themeService);
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
