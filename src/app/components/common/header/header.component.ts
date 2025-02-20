import { Component, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { MENU_DROPDOWN } from '../../../constants/header';
import { THEME } from '../../../constants';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PopoverModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('op') op!: Popover;
  @ViewChild('op_notify') op_notify!: Popover;

  menu_dropdowns = MENU_DROPDOWN;
  THEME = THEME;
  currentMode: string = '';

  constructor(
    private themeService: ThemeService,
    private router: Router
  ) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });
  }

  onOpenMenu(event: any) {
    this.op.toggle(event);
  }

  onOpenNotify(event: any) {
    this.op_notify.toggle(event);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
