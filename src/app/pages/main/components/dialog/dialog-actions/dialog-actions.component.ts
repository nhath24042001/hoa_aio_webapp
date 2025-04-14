import { Component, Input } from '@angular/core';

import { ButtonDirective } from '~/directives/button.directive';
@Component({
  selector: 'app-dialog-actions',
  imports: [ButtonDirective],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss'
})
export class DialogActions {
  @Input() moduleName = '';
  @Input() formID = '';
  @Input() isCreateMode = false;
  @Input() buttonText = '';
  @Input() buttonIcon = 'file-plus';
}
