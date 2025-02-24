import { Component } from '@angular/core';
import { some } from 'lodash-es';
import { TabsModule } from 'primeng/tabs';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimaryComponent } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { AnnouncementListComponent } from '~/pages/main/components/modules/announcement/announcement-list/announcement-list.component';
import { IAnnouncement } from '~/@types/announcement';

@Component({
  selector: 'app-announcements',
  imports: [TabsModule, EmptyContentComponent, ButtonPrimaryComponent, AnnouncementListComponent],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {
  announcements: IAnnouncement = {
    active: [
      {
        title: 'Announcement that was saved as draft',
        type: 'Draft',
        created: '2025-02-24',
        personSent: 'Kerry Gant'
      },
      {
        title: 'Announcement with Some Content',
        created: '2025-02-24',
        personSent: 'Larry Birch'
      }
    ],
    expired: [
      {
        title: 'Announcement with Some Content',
        created: '2025-02-24',
        personSent: 'Larry Birch'
      }
    ]
  };

  checkAnnouncementExists(): boolean {
    return some([...this.announcements.active, ...this.announcements.expired]);
  }
}
