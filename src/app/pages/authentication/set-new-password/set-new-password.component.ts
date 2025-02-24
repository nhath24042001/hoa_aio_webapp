/* eslint-disable no-undef */
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CustomInputComponent } from '../../../components/shared/custom-input/custom-input.component';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../components/common/base/base.component';
import { ThemeService } from '../../../services/theme.service';
import { ToastService } from '../../../services/toast.service';

@Component({
  selector: 'app-set-new-password',
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CheckboxModule,
    CustomInputComponent
  ],
  templateUrl: './set-new-password.component.html',
  styleUrl: './set-new-password.component.scss'
})
export class SetNewPasswordComponent extends BaseComponent {
  newPasswordForm: FormGroup;
  isSubmitting = false;
  loading = false;

  constructor(
    themeService: ThemeService,
    public fb: FormBuilder,
    private router: Router,
    private toastService: ToastService
  ) {
    super(themeService);
    this.newPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  isMatchingPasswords() {
    if (!this.newPasswordForm.value.newPassword || !this.newPasswordForm.value.confirmPassword) {
      return false;
    }
    const { password, confirmPassword } = this.newPasswordForm.value;
    return password === confirmPassword;
  }

  onBackPreviousStep() {
    this.router.navigate(['/auth/reset-password']);
  }

  async onSubmit() {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/check-full.svg',
      title: 'Password updated successfully',
      description: 'Your password has been successfully updated, please log in first',
      type: 'primary',
      buttonText: 'Login now'
    })

    if (confirmed) {
      this.router.navigate(['/auth/login']);
    }
  }
}
