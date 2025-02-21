import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { LIST_SIDEBAR } from '../../../constants/sidebar';
import { Router } from '@angular/router';
import { THEME } from '../../../constants';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Output() toggle = new EventEmitter<boolean>();

  THEME = THEME;
  listSidebar = LIST_SIDEBAR;
  currentMode: string = '';
  showAdminTool = signal(true);

  constructor(
    private router: Router,
    private themeService: ThemeService
  ) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentMode = theme;
    });
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.toggle.emit(this.isOpen);
  }

  toggleAdminTools() {
    this.showAdminTool.update((prev) => !prev);
  }

  isActiveRoute(routerLink: string) {
    return location.pathname.includes(routerLink);
  }

  navigateTo(routerLink: string) {
    this.router.navigate([`main/${routerLink}`]);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
