import { Component } from '@angular/core';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component';

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonDirective],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent extends BaseComponent {
  // announcements: IAnnouncement[] = [
  //   {
  //     title: 'Long Announcement Title Can Be Truncated',
  //     type: 'Draft',
  //     created: '2025-10-16 08:46:00',
  //     personSent: 'Kerry Gant'
  //   },
  //   {
  //     title: 'Announcement with Some Content',
  //     created: '2025-02-24: 08:46:00',
  //     personSent: 'Larry Birch'
  //   },
  //   {
  //     title: 'Long Announcement Title Can Be Truncated',
  //     created: '2025-02-24: 08:46:00',
  //     personSent: 'Larry Birch'
  //   },
  //   {
  //     title: 'Long Announcement Title Can Be Truncated',
  //     created: '2025-02-24: 08:46:00',
  //     personSent: 'Larry Birch'
  //   }
  // ];

  announcements = [];

  constructor(themeService: ThemeService) {
    super(themeService);
  }
}
