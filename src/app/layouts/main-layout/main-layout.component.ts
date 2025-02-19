import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/common/header/header.component';
import { SidebarComponent } from '../../components/common/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, SidebarComponent, RouterModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  isSidebarOpen = true;

  onSidebarToggle(isOpen: boolean) {
    this.isSidebarOpen = isOpen;
  }
}
