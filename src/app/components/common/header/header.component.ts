import { Component, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { MENU_DROPDOWN } from '../../../constants/header';
import { THEME } from '../../../constants';
import { ThemeService } from '../../../services/theme.service';

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
  currentMode: string = '';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });
  }

  toggle(event: any) {
    this.op.toggle(event);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
