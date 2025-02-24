import { Component } from '@angular/core';
import { ToastService } from './../../../services/toast.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-toast',
  imports: [ButtonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent<T> {
  icon = '';
  title = '';
  description = '';
  type = '';
  buttonText = '';
  data!: T;
  visible: boolean = false;

  private callback: ((confirmed: boolean) => void) | null = null;

  constructor(private toastService: ToastService) {
    this.toastService.confirmState$.subscribe(state => {
      this.title = state.title;
      this.description = state.description;
      this.buttonText = state.buttonText;
      this.icon = state.icon;
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
