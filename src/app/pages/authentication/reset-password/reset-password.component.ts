import { Component, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputOtpModule } from 'primeng/inputotp';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputComponentOptions, NgxOtpInputComponent } from 'ngx-otp-input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [ButtonModule, InputOtpModule, FormsModule, NgxOtpInputComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  isSubmitting = false;
  loading = false;
  email = signal('fajar@gmail.com');
  value = '1111';
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 6,
    autoBlur: false,
    autoFocus: true,
    showBlinkingCursor: true
  };

  otpValues: string[] = ['-', '-', '-', '-', '-', '-'];

  onOtpChange(event: string, index: number) {
    this.otpValues[index] = event || '-';
  }

  constructor(private router: Router) {}

  onBackPreviousStep() {
    this.router.navigate(['/auth/forgot-password']);
  }

  onSubmit() {
    this.isSubmitting = true;
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/auth/set-new-password']);
    }, 2000);
  }
}
