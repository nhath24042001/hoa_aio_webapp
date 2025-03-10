import { Component, Input } from '@angular/core';

import { BaseComponent } from '~/components/common/base/base.component';
import { DialogHeader } from '../dialog-header/dialog-header.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-dynamic-dialog',
  imports: [DialogHeader],
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialog extends BaseComponent {
  @Input() dialogTitle = '';
  @Input() iconCreate = '';
  @Input() iconEdit = '';
  @Input() dialogType = '';

  get isCreateMode() {
    return this.dialogType === 'create';
  }

  constructor(themeService: ThemeService) {
    super(themeService);
  }
}
