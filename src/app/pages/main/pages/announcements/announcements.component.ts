import { Component } from '@angular/core';
import { some } from 'lodash-es';
import { TabsModule } from 'primeng/tabs';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { AnnouncementListComponent } from '~/pages/main/components/modules/announcement/announcement-list/announcement-list.component';
import { MainHeader } from '../../components/shared/main-header/main-header.component';
import { IAnnouncement } from '~/@types/announcement';

@Component({
  selector: 'app-announcements',
  imports: [
    TabsModule,
    EmptyContentComponent,
    ButtonPrimary,
    AnnouncementListComponent,
    MainHeader
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {
  announcements: IAnnouncement = {
    active: [
      {
        title: 'Announcement that was saved as draft',
        type: 'Draft',
        created: '2025-10-16 08:46:00',
        personSent: 'Kerry Gant'
      },
      {
        title: 'Announcement with Some Content',
        created: '2025-02-24: 08:46:00',
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

  userTypes = [
    {
      label: 'Residents',
      value: 'residents',
      isChecked: false
    },
    {
      label: 'Managers',
      value: 'managers',
      isChecked: false
    },
    {
      label: 'Board members',
      value: 'boardMembers',
      isChecked: false
    },
    {
      label: 'Vendors',
      value: 'vendors',
      isChecked: false
    }
  ];

  checkAnnouncementExists(): boolean {
    return some([...this.announcements.active, ...this.announcements.expired]);
  }

  onSearchAnnouncement(e: any): void {
    console.log(e);
  }

  onOpenAnnouncement(): void {}
}
