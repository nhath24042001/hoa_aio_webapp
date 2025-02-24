import { Component } from '@angular/core';
import { BaseComponent } from '../../../../components/common/base/base.component';
import { OverviewStasComponent } from '~/pages/main/components/modules/overview/overview-stas/overview-stas.component';
import { TaskSectionComponent } from '~/pages/main/components/modules/overview/task-section/task-section.component';
import { AnnouncementSectionComponent } from '~/pages/main/components/modules/overview/announcement-section/announcement-section.component';
import { BidSectionComponent } from '../../components/bid-section/bid-section.component';
import { CalendarSectionComponent } from "../../components/modules/overview/calendar-section/calendar-section.component";

@Component({
  selector: 'app-overview',
  imports: [OverviewStasComponent, AnnouncementSectionComponent, BidSectionComponent, TaskSectionComponent, CalendarSectionComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent extends BaseComponent {}
