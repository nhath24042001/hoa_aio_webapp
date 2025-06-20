import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';

import { BaseComponent } from '~/components/common/base/base.component';
import { CustomInputComponent } from '~/components/shared/custom-input/custom-input.component';
import { InputFile } from '~/components/shared/input-file/input-file.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';
import { ToastService } from '~/services/toast.service';

@Component({
  selector: 'app-account',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    SelectModule,
    InputFile,
    CustomInputComponent,
    ButtonDirective
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent extends BaseComponent {
  profileInfo: FormGroup;
  roles = [
    {
      name: 'Admin',
      value: 'admin'
    },
    {
      name: 'Manager',
      value: 'manager'
    }
  ];
  constructor(
    themeService: ThemeService,
    private fb: FormBuilder,
    private toastService: ToastService
  ) {
    super(themeService);
    this.profileInfo = this.fb.group({
      avatar: [''],
      role: ['admin'],
      fullName: ['Robert Graph'],
      email: ['rgraph123@gmail.com'],
      password: ['']
    });
  }

  async openDeleteAccountDialog() {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/user-x-lg.svg',
      title: 'Delete Account',
      buttonText: 'Delete',
      type: 'error',
      description: 'Are you sure? Proceeding will delete the account from the system, and can not be undone.'
    });

    if (confirmed) {
      console.log('Account deleted');
    }
  }
}
