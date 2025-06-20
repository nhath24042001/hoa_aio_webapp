import { Component, input, output } from '@angular/core';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-empty-content',
  imports: [],
  templateUrl: './empty-content.component.html',
  styleUrl: './empty-content.component.scss'
})
export class EmptyContentComponent extends BaseComponent {
  readonly icon = input<string>('');
  readonly iconDark = input<string>('');
  readonly title = input<string>('');
  readonly createText = input<string>('');
  readonly isShowBtn = input<boolean>(true);
  readonly showUpload = input<boolean>(false);
  readonly moduleName = input('');
  actionEmitter = output<void>();

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  onCreate() {
    this.actionEmitter.emit();
  }
}
