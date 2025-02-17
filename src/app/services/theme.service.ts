import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ThemeService {
  private lightTheme = 'node_modules/primeng/resources/themes/lara-light-blue/theme.css';
  private darkTheme = 'node_modules/primeng/resources/themes/lara-dark-blue/theme.css';

  setTheme(isDarkMode: boolean) {
    const theme = isDarkMode ? this.darkTheme : this.lightTheme;
    this.updateTheme(theme);
  }

  private updateTheme(theme: string) {
    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = 'app-theme';
      themeLink.rel = 'stylesheet';
      document.head.appendChild(themeLink);
    }
    themeLink.href = theme;
  }
}
