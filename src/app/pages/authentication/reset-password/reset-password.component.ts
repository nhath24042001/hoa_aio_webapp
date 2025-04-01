import { Component, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxOtpInputComponent, NgxOtpInputComponentOptions } from 'ngx-otp-input'
import { ButtonModule } from 'primeng/button'
import { InputOtpModule } from 'primeng/inputotp'

import { BaseComponent } from '../../../components/common/base/base.component'
import { ThemeService } from '../../../services/theme.service'

@Component({
  selector: 'app-reset-password',
  imports: [ButtonModule, InputOtpModule, FormsModule, NgxOtpInputComponent],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent extends BaseComponent {
  isSubmitting = false
  loading = false
  email = signal('fajar@gmail.com')
  value = '1111'
  otpOptions: NgxOtpInputComponentOptions = {
    otpLength: 6,
    autoBlur: false,
    autoFocus: true,
    showBlinkingCursor: true
  }
  isOtpComplete = false

  onOtpChange(event: string[]) {
    this.isOtpComplete = event.every((value) => value !== '')
  }

  constructor(
    private router: Router,
    themeService: ThemeService
  ) {
    super(themeService)
  }

  onBackPreviousStep() {
    this.router.navigate(['/auth/forgot-password'])
  }

  onSubmit() {
    this.isSubmitting = true
    this.loading = true

    setTimeout(() => {
      this.loading = false
      this.router.navigate(['/auth/set-new-password'])
    }, 2000)
  }
}
