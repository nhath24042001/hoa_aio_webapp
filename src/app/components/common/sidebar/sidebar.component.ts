import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, inject, Input, output, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { DividerModule } from 'primeng/divider';

import { AppModule } from '~/core/permissions/module.enum';
import { PermissionService } from '~/core/permissions/permissions.service';
import { UserRole } from '~/core/permissions/role.enum';

import { THEME } from '../../../constants';
import { LIST_SIDEBAR } from '../../../constants/sidebar';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, DividerModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() isOpen = false;
  toggle = output<boolean>();

  userRole = UserRole.MANAGER;
  modulesToShow: AppModule[] = [];
  THEME = THEME;
  listSidebar = LIST_SIDEBAR;
  currentMode: string = '';
  showAdminTool = signal(true);

  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router);
  private themeService = inject(ThemeService);
  private permissionService = inject(PermissionService);

  constructor() {
    this.themeService.theme$.pipe(takeUntilDestroyed()).subscribe((theme) => {
      this.currentMode = theme;
    });

    this.modulesToShow = this.permissionService.getAccessibleModules(this.userRole);

    this.listSidebar.listView = this.listSidebar.listView.filter((item) =>
      this.modulesToShow.includes(item.name as AppModule)
    );

    this.listSidebar.adminTool = this.listSidebar.adminTool.filter((item) =>
      this.modulesToShow.includes(item.name as AppModule)
    );

    this.breakpointObserver
      .observe(['(max-width: 1200px)'])
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        const shouldBeOpen = !result.matches;
        this.isOpen = shouldBeOpen;
        this.toggle.emit(this.isOpen);
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

  onBackHome() {
    this.router.navigate(['main/overview']);
  }
}
