import { Component } from '@angular/core'

import { tasks } from '~/constants'
import { AnnouncementSectionComponent } from '~/pages/main/components/modules/overview/announcement-section/announcement-section.component'
import { BidSectionComponent } from '~/pages/main/components/modules/overview/bid-section/bid-section.component'
import { OverviewStasComponent } from '~/pages/main/components/modules/overview/overview-stas/overview-stas.component'
import { TaskSectionComponent } from '~/pages/main/components/modules/overview/task-section/task-section.component'

import { BaseComponent } from '../../../../components/common/base/base.component'
import { CalendarSectionComponent } from '../../components/modules/overview/calendar-section/calendar-section.component'

@Component({
  selector: 'app-overview',
  imports: [
    OverviewStasComponent,
    AnnouncementSectionComponent,
    BidSectionComponent,
    TaskSectionComponent,
    CalendarSectionComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent extends BaseComponent {
  tasks = tasks
}
