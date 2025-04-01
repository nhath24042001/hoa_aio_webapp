import { DatePipe } from '@angular/common'
import { Component } from '@angular/core'

import { IAnnouncementChild } from '~/@types/announcement'
import { BaseComponent } from '~/components/common/base/base.component'
import { ThemeService } from '~/services/theme.service'

import { ButtonPrimary } from '../../../shared/button-primary/button-primary.component'
import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component'

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonPrimary, DatePipe],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent extends BaseComponent {
  announcements: IAnnouncementChild[] = [
    {
      title: 'Long Announcement Title Can Be Truncated',
      type: 'Draft',
      created: '2025-10-16 08:46:00',
      personSent: 'Kerry Gant'
    },
    {
      title: 'Announcement with Some Content',
      created: '2025-02-24: 08:46:00',
      personSent: 'Larry Birch'
    },
    {
      title: 'Long Announcement Title Can Be Truncated',
      created: '2025-02-24: 08:46:00',
      personSent: 'Larry Birch'
    },
    {
      title: 'Long Announcement Title Can Be Truncated',
      created: '2025-02-24: 08:46:00',
      personSent: 'Larry Birch'
    }
  ]

  constructor(themeService: ThemeService) {
    super(themeService)
  }
}
