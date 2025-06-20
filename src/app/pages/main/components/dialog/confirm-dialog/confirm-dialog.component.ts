import { Component, computed } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ConfirmDialogInterface } from '~/@types';
import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-confirm-dialog',
  imports: [ButtonDirective, ButtonModule],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss'
})
export class ConfirmDialog extends BaseComponent {
  data: ConfirmDialogInterface;

  icon = computed(() => {
    return `assets/images/common/${this.data.icon}.svg`;
  });

  constructor(
    themeService: ThemeService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    super(themeService);

    this.data = config.data;
  }

  public onConfirm(): void {
    this.ref.close({
      confirmed: true
    });
  }

  public onCancel(): void {
    this.ref.close();
  }
}
