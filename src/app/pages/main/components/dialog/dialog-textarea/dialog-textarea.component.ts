/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, input } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';
@Component({
  selector: 'app-dialog-textarea',
  imports: [TextareaModule, ButtonDirective],
  templateUrl: './dialog-textarea.component.html',
  styleUrl: './dialog-textarea.component.scss'
})
export class DialogTextarea extends BaseComponent {
  // TODO: Fix type any
  readonly title = input.required<string>();
  readonly placeholder = input<string>();
  readonly value = input<string | any>('');
  readonly rows = input<number>(3);
  readonly disabled = input<boolean>(false);
  field = input<string>('description');
  isCreateMode = input<boolean>(false);

  constructor(themeService: ThemeService) {
    super(themeService);
  }
}
