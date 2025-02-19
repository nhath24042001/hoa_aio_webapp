import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { LIST_SIDEBAR } from '../../../constants/sidebar';
import { Router } from '@angular/router';
import { THEME } from '../../../constants';

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
  currentMode = THEME.LIGHT;
  showAdminTool = signal(true);

  constructor(private router: Router) {}

  listSidebar = LIST_SIDEBAR;

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
    this.router.navigate([routerLink]);
  }

  toggleTheme() {
    const element = document.querySelector('html');
    if (element != null) {
      element.classList.toggle('my-app-dark');
    }
    this.currentMode = this.currentMode === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
  }
}
