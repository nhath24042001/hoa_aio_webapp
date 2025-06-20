import { Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { BaseComponent } from '~/components/common/base/base.component';
import { homeOwnerInputFields } from '~/data/home-owner';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

import { FormField } from '../../../dialog/form-field/form-field.component';
@Component({
  selector: 'app-new-owner',
  imports: [Divider, FormField, ButtonDirective],
  templateUrl: './new-owner.component.html',
  styleUrl: './new-owner.component.scss'
})
export class NewOwner extends BaseComponent {
  formFields = homeOwnerInputFields;

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef
  ) {
    super(themeService);
  }

  closeDialog() {
    this.ref.close();
  }
}
