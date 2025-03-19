import { Component, computed, output } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Divider } from 'primeng/divider';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { FormField } from '../../../dialog/form-field/form-field.component';
import { homeInputFields } from '~/data/home-owner';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-new-property',
  imports: [Divider, FormField, ButtonPrimary],
  templateUrl: './new-property.component.html',
  styleUrl: './new-property.component.scss'
})
export class NewProperty extends BaseComponent {
  formFields = homeInputFields;

  buttonIcon = computed(() => {
    return `assets/images/${this.currentMode}/home-plus-02.svg`;
  })

  constructor(themeService: ThemeService, public ref: DynamicDialogRef) {
    super(themeService);
  }

  closeDialog() {
    this.ref.close();
  }
}
