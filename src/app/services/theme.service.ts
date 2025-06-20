import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { THEME } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<string>(localStorage.getItem('theme') || THEME.LIGHT);
  theme$ = this.themeSubject.asObservable();

  private sidebarWidthSubject = new BehaviorSubject<number>(Number(localStorage.getItem('sidebarWidth')) || 0);
  sidebarWidth$ = this.sidebarWidthSubject.asObservable();

  constructor() {
    this.applyTheme(this.themeSubject.value);
  }

  toggleTheme() {
    const currentTheme = this.themeSubject.value;
    const newTheme = currentTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    this.themeSubject.next(newTheme);
    localStorage.setItem('theme', newTheme);
    this.applyTheme(newTheme);
  }

  getCurrentTheme() {
    return this.themeSubject.value;
  }

  private applyTheme(theme: string) {
    const element = document.querySelector('html');
    if (element != null) {
      if (theme === THEME.DARK) {
        element.classList.add('my-app-dark');
      } else {
        element.classList.remove('my-app-dark');
      }
    }
  }

  getSidebarWidth() {
    return this.sidebarWidthSubject.value;
  }

  setSidebarWidth(width: number) {
    this.sidebarWidthSubject.next(width);
    localStorage.setItem('sidebarWidth', width.toString());
  }
}
