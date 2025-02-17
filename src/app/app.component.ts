import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePickerModule } from 'primeng/datepicker';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePickerModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';

  toggleDarkMode() {
    const htmlElement = document.querySelector('html');

    if (htmlElement !== null) {
      htmlElement.classList.toggle('my-app-dark');
    }
  }
}
