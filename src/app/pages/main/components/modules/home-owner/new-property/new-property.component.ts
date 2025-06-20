import { Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { BaseComponent } from '~/components/common/base/base.component';
import { propertiesInputFields } from '~/data/home-owner';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

import { FormField } from '../../../dialog/form-field/form-field.component';

@Component({
  selector: 'app-new-property',
  imports: [Divider, FormField, ButtonDirective],
  templateUrl: './new-property.component.html',
  styleUrl: './new-property.component.scss'
})
export class NewProperty extends BaseComponent {
  formFields = propertiesInputFields;

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
