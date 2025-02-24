import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastComponent } from './components/shared/toast/toast.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toggleDarkMode() {
    const htmlElement = document.querySelector('html');

    if (htmlElement !== null) {
      htmlElement.classList.toggle('my-app-dark');
    }
  }
}
