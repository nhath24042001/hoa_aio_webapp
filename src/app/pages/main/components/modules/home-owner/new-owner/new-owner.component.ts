import { Component, computed } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Divider } from 'primeng/divider';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { FormField } from '../../../dialog/form-field/form-field.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { homeOwnerInputFields } from '~/data/home-owner';
@Component({
  selector: 'app-new-owner',
  imports: [Divider, FormField, ButtonPrimary],
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
