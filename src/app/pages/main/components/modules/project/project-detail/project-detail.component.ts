import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { BaseComponent } from '~/components/common/base/base.component';
import { left_project_box, right_project_box } from '~/data/project';
import { DialogHeader } from '~/pages/main/components/dialog/dialog-header/dialog-header.component';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-project-detail',
  imports: [DialogHeader, DividerModule, FormField],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetail extends BaseComponent {
  left_box = left_project_box;
  right_box = right_project_box;
  constructor(
    public ref: DynamicDialogRef,
    themeService: ThemeService
  ) {
    super(themeService);
  }

  closeDialog() {
    this.ref.close();
  }
}
