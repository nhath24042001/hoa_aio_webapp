import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { MessageModule } from 'primeng/message';

import { BaseComponent } from '../../../components/common/base/base.component';
import { CustomInputComponent } from '../../../components/shared/custom-input/custom-input.component';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    CheckboxModule,
    CustomInputComponent,
    MessageModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent {
  loginForm: FormGroup;
  isSubmitting = false;
  loading = false;
  isShowError = false;
  messageError = signal<string>('');

  rememberMe = signal<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    themeService: ThemeService
  ) {
    super(themeService);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.isSubmitting = true;

      // if (email === 'admin@gmail.com' && password === '123123') {
      //   this.isShowError = false;
      // } else {
      //   this.isShowError = true;
      //   this.messageError.set('Your username or password is incorrect');
      // }
      this.router.navigate(['main/overview']);
    }, 2000);
  }

  onRouteForgotPassword = () => {
    this.router.navigate(['auth/forgot-password']);
  };
}
