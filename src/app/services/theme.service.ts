import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { THEME } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(localStorage.getItem('theme') || THEME.LIGHT);
  theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    this.themeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme);

    const element = document.querySelector('html');
    if (element != null) {
      element.classList.toggle('my-app-dark', newTheme === THEME.DARK);
    }
  }

  getCurrentTheme() {
    return this.themeSubject.value;
  }
}
