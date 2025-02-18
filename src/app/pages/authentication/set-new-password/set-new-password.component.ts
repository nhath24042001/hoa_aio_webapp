import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { CustomInputComponent } from '../../../components/shared/custom-input/custom-input.component';

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
export class SetNewPasswordComponent {
  newPasswordForm: FormGroup;
  isSubmitting = false;
  loading = false;

  rememberMe = signal<boolean>(false);

  constructor(private fb: FormBuilder) {
    this.newPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.email]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
