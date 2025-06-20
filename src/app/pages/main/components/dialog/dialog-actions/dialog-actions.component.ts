import { Component, input } from '@angular/core';

import { ButtonDirective } from '~/directives/button.directive';
@Component({
  selector: 'app-dialog-actions',
  imports: [ButtonDirective],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss'
})
export class DialogActions {
  readonly moduleName = input('');
  readonly formID = input('');
  readonly isCreateMode = input(false);
  readonly buttonText = input('');
  readonly buttonIcon = input('file-plus');
}
