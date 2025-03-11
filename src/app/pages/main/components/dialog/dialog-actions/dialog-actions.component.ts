import { Component } from '@angular/core';

import { ButtonPrimary } from '../../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-dialog-actions',
  imports: [ButtonPrimary],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss'
})
export class DialogActions {}
