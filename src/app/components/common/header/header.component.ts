import { Component, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { MENU_DROPDOWN } from '../../../constants/header';
import { THEME } from '../../../constants';

@Component({
  selector: 'app-header',
  imports: [PopoverModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('op') op!: Popover;

  menu_dropdowns = MENU_DROPDOWN;
  THEME = THEME;
  currentMode = THEME.LIGHT;

  toggle(event: any) {
    this.op.toggle(event);
  }

  toggleTheme() {
    const element = document.querySelector('html');
    if (element != null) {
      element.classList.toggle('my-app-dark');
    }
    this.currentMode = this.currentMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
  }
}
