import { Component } from '@angular/core'
import { DividerModule } from 'primeng/divider'
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog'
import { InputTextModule } from 'primeng/inputtext'
import { TextareaModule } from 'primeng/textarea'

import { BaseComponent } from '~/components/common/base/base.component'
import { left_project_box, right_project_box } from '~/data/project'
import { DialogHeader } from '~/pages/main/components/dialog/dialog-header/dialog-header.component'
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component'
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component'
import { ThemeService } from '~/services/theme.service'

@Component({
  selector: 'app-create-project',
  imports: [DividerModule, InputTextModule, TextareaModule, ButtonPrimary, DialogHeader, FormField],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProject extends BaseComponent {
  left_box = left_project_box
  right_box = right_project_box
  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService)
  }

  closeDialog() {
    this.ref.close()
  }
}
