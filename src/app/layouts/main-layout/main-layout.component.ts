import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  onSidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }

  ngAfterViewInit() {
    if (this.sidebarElement) {
      this.resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          this.sidebarWidth = entry.contentRect.width;
          localStorage.setItem('sidebarWidth', this.sidebarWidth.toString());
        }
      });

      this.resizeObserver.observe(this.sidebarElement.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
