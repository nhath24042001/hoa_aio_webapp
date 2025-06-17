import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverDirective, PopoverModule } from 'ngx-bootstrap/popover';

import { IListView } from '~/@types';
import { IAnnouncement } from '~/@types/announcement';
import { AnnouncementService } from '~/pages/main/pages/announcements/announcement.service';
import { TitleCasePipe } from '~/pipes/title-case.pipe';

import { THEME } from '../../../constants';
import { MENU_DROPDOWN } from '../../../constants/header';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-header',
  imports: [PopoverModule, CommonModule, TitleCasePipe, DatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @ViewChild('popover1', { static: false }) popover?: PopoverDirective;
  menu_dropdowns = MENU_DROPDOWN;
  THEME = THEME;
  currentMode: string = '';
  lastSegment: string = '';

  announcements: IAnnouncement[] = [];

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
    private themeService: ThemeService,
    private announcementService: AnnouncementService
  ) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });

    this.router.events.subscribe(() => {
      const urlSegments = this.router.url.split('/');
      this.lastSegment = urlSegments[urlSegments.length - 1];
    });
  }

  ngOnInit(): void {
    this.announcementService.getActiveAnnouncements('', []).subscribe((response) => {
      if (response.rc === 0) {
        this.announcements = response.announcements;
      }
    });
  }

  onOpenNotify() {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }

  onMenuClick(menu: IListView) {
    this.router.navigate(['/main/' + menu.routerLink]);
  }

  onRouteChange(route: string) {
    this.router.navigate(['/main/' + route]);
  }
}
