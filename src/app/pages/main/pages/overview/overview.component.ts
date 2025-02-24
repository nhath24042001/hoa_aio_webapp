import { Component } from '@angular/core';
import { BaseComponent } from '../../../../components/common/base/base.component';
import { OverviewStasComponent } from '~/pages/main/components/modules/overview/overview-stas/overview-stas.component';
import { TaskManagementComponent } from '../task-management/task-management.component';
import { TaskSectionComponent } from '~/pages/main/components/modules/overview/task-section/task-section.component';
import { AnnouncementSectionComponent } from '~/pages/main/components/modules/overview/announcement-section/announcement-section.component';
import { BidSectionComponent } from '../../components/bid-section/bid-section.component';

@Component({
  selector: 'app-overview',
  imports: [OverviewStasComponent, TaskManagementComponent, AnnouncementSectionComponent, BidSectionComponent, TaskSectionComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent extends BaseComponent {}
