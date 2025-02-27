import { Component, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';
import { CommonModule } from '@angular/common';
import { MENU_DROPDOWN } from '../../../constants/header';
import { THEME } from '../../../constants';
import { ThemeService } from '../../../services/theme.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TitleCasePipe } from '~/pipes/title-case.pipe';

@Component({
  selector: 'app-header',
  imports: [PopoverModule, CommonModule, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('op') op!: Popover;
  @ViewChild('op_notify') op_notify!: Popover;

  menu_dropdowns = MENU_DROPDOWN;
  THEME = THEME;
  currentMode: string = '';
  lastSegment: string = '';

  constructor(
    private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });

    this.router.events.subscribe(() => {
      const urlSegments = this.router.url.split('/');
      this.lastSegment = urlSegments[urlSegments.length - 1];
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
