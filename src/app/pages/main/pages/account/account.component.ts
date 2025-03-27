import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';

import { BaseComponent } from '~/components/common/base/base.component';
import { InputFile } from '~/components/shared/input-file/input-file.component';
import { CustomInputComponent } from '~/components/shared/custom-input/custom-input.component';
import { ThemeService } from '~/services/theme.service';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { ButtonDirective } from '~/directives/button.directive';

@Component({
  selector: 'app-account',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DividerModule,
    SelectModule,
    InputFile,
    CustomInputComponent,
    ButtonPrimary,
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
    private fb: FormBuilder
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
}
