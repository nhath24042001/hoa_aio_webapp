import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { IAnnouncement } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { AnnouncementService } from '~/pages/main/pages/announcements/announcement.service';
import { ThemeService } from '~/services/theme.service';

import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component';

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonDirective, DatePipe],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent extends BaseComponent {
  announcements: IAnnouncement[] = [];

  constructor(
    themeService: ThemeService,
    private announcementService: AnnouncementService,
    private router: Router
  ) {
    super(themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.announcementService.getActiveAnnouncements('', []).subscribe((response) => {
      if (response.rc === 0) {
        this.announcements = response.announcements;
      }
    });
  }

  redirectToAnnouncement(): void {
    this.router.navigate(['/main/announcements']);
  }
}
