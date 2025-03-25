import { Component, Input } from '@angular/core';

import { ButtonPrimary } from '../../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-dialog-actions',
  imports: [ButtonPrimary],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss'
})
export class DialogActions {
  @Input() moduleName = '';
  @Input() formID = '';
  @Input() isCreateMode = false;
  @Input() buttonText = '';
  @Input() buttonIcon = 'assets/images/common/white-file-plus.svg';
}
