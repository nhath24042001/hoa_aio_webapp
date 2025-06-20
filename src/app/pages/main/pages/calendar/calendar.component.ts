import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

import { ClubCalendar } from '~/pages/main/components/modules/calendar/club-calendar/club-calendar.component';
import { DynamicEvent } from '~/pages/main/components/modules/calendar/dynamic-event/dynamic-event.component';
import { GeneralCalendar } from '~/pages/main/components/modules/calendar/general-calendar/general-calendar.component';

import { ClubDialog } from '../../components/modules/calendar/club-dialog/club-dialog.component';
import { MainHeader } from '../../components/shared/main-header/main-header.component';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, TabsModule, FormsModule, SelectModule, MainHeader, GeneralCalendar, ClubCalendar],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  ref: DynamicDialogRef | undefined;

  activeTab = signal('0');
  tabs = [
    {
      name: 'General Calendar'
    },
    {
      name: 'Club Calendar'
    }
  ];

  constructor(public dialogService: DialogService) {}

  onSearch(): void {}

  onOpenCreateEvent(): void {
    if (this.activeTab() === '0') {
      this.ref = this.dialogService.open(DynamicEvent, {
        modal: true,
        width: '1000px',
        data: {
          type: 'create'
        }
      });
    } else {
      this.ref = this.dialogService.open(ClubDialog, {
        modal: true,
        width: '1100px',
        data: {
          type: 'create'
        }
      });
    }
    this.ref.onClose.subscribe(() => {});
  }

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }
}
