import { Component, ViewChild } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import { DatePipe } from '@angular/common';

import { CommonModule } from '@angular/common';
import { MENU_DROPDOWN } from '../../../constants/header';
import { THEME } from '../../../constants';
import { ThemeService } from '../../../services/theme.service';
import { Router } from '@angular/router';
import { TitleCasePipe } from '~/pipes/title-case.pipe';

@Component({
  selector: 'app-header',
  imports: [PopoverModule, CommonModule, TitleCasePipe, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('popover1', { static: false }) popover?: PopoverDirective;
  menu_dropdowns = MENU_DROPDOWN;
  THEME = THEME;
  currentMode: string = '';
  lastSegment: string = '';

  notifications = [
    {
      title: 'Long Announcement Title Can Be Truncated',
      created: '2021-07-01: 12:00 PM'
    },
    {
      title: 'Announcement with Some Content',
      created: '2021-07-01: 12:00 PM'
    },
    {
      title: 'Long Announcement Title Can Be Truncated',
      created: '2021-07-01: 12:00 PM'
    }
  ];

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });

    this.router.events.subscribe(() => {
      const urlSegments = this.router.url.split('/');
      this.lastSegment = urlSegments[urlSegments.length - 1];
    });
  }

  onOpenNotify(event: any) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  onMenuClick(menu: any) {
    this.router.navigate(['/main/' + menu.routeLink]);
  }
}
