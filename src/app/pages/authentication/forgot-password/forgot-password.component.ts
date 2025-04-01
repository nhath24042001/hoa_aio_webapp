import { Component } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { MessageModule } from 'primeng/message'

import { BaseComponent } from '../../../components/common/base/base.component'
import { ThemeService } from '../../../services/theme.service'
import { CustomInputComponent } from './../../../components/shared/custom-input/custom-input.component'

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CustomInputComponent, ButtonModule, MessageModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent extends BaseComponent {
  forgotPswForm: FormGroup
  isSubmitting = false
  loading = false
  isShowError = false
  messageError = ''

  constructor(
    private fb: FormBuilder,
    private router: Router,
    themeService: ThemeService
  ) {
    super(themeService)
    this.forgotPswForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit() {
    this.isSubmitting = true
    this.loading = true

    setTimeout(() => {
      this.loading = false

      const { email } = this.forgotPswForm.value

      if (email !== 'admin@gmail.com') {
        this.isShowError = true
        this.messageError = 'Your email is incorrect'
      } else {
        this.isShowError = false
        this.messageError = ''
        this.router.navigate(['/auth/reset-password'])
      }
    }, 2000)
  }

  onBackLogin() {
    this.router.navigate(['/auth/login'])
  }
}
