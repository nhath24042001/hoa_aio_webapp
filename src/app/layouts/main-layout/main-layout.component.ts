import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeService } from '~/services/theme.service';

import { HeaderComponent } from '../../components/common/header/header.component';
import { SidebarComponent } from '../../components/common/sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, SidebarComponent, RouterModule, CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidebarElement', { read: ElementRef }) sidebarElement!: ElementRef;

  isSidebarOpen = false;
  sidebarWidth: number = 0;
  private resizeObserver!: ResizeObserver;

  constructor(private themeService: ThemeService) {}

  onSidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }

  ngAfterViewInit() {
    this.initSidebarObserver();
    this.updateSidebarWidth();
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSidebarWidth();
  }

  private initSidebarObserver() {
    if (this.sidebarElement) {
      this.resizeObserver = new ResizeObserver(() => {
        this.updateSidebarWidth();
      });

      this.resizeObserver.observe(this.sidebarElement.nativeElement);
    }
  }

  private updateSidebarWidth() {
    if (this.sidebarElement?.nativeElement) {
      this.sidebarWidth = this.sidebarElement.nativeElement.offsetWidth;
      localStorage.setItem('sidebarWidth', this.sidebarWidth.toString());
      this.themeService.setSidebarWidth(this.sidebarWidth);
    }
  }
}
