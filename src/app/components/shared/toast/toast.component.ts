import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

import { ToastService } from './../../../services/toast.service';

@Component({
  selector: 'app-toast',
  imports: [ButtonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent<T> extends BaseComponent {
  icon = '';
  title = '';
  description = '';
  type = '';
  buttonText = '';
  data!: T;
  buttonColor: string = '';
  visible: boolean = false;

  private callback: ((confirmed: boolean) => void) | null = null;

  constructor(
    private toastService: ToastService,
    themeService: ThemeService
  ) {
    super(themeService);
    this.toastService.confirmState$.subscribe((state) => {
      this.title = state.title;
      this.description = state.description;
      this.buttonText = state.buttonText;
      this.icon = state.icon;
      this.type = state.type;
      this.callback = state.callback;
      this.visible = true;
    });
  }

  confirm() {
    if (this.callback) this.callback(true);
    this.visible = false;
  }

  cancel() {
    if (this.callback) this.callback(false);
    this.visible = false;
  }
}
