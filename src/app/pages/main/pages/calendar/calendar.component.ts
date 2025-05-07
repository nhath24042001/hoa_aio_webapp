import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

import { ClubCalendar } from '~/pages/main/components/modules/calendar/club-calendar/club-calendar.component';
import { DynamicEvent } from '~/pages/main/components/modules/calendar/dynamic-event/dynamic-event.component';
import { GeneralCalendar } from '~/pages/main/components/modules/calendar/general-calendar/general-calendar.component';
import { ToastService } from '~/services/toast.service';

import { MainHeader } from '../../components/shared/main-header/main-header.component';
import { CalendarService } from './calendar.service';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, TabsModule, FormsModule, SelectModule, MainHeader, GeneralCalendar, ClubCalendar],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private calendarService: CalendarService
  ) {}

  onSearch(): void {}

  onOpenCreateEvent(): void {
    // !TODO: check event or club calendar
    this.ref = this.dialogService.open(DynamicEvent, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    this.ref.onClose.subscribe(() => {});
  }

  // onOpenTaskDetail(type: string, event: ICalendar): void {
  //   this.ref = this.dialogService.open(DynamicEvent, {
  //     modal: true,
  //     width: '1000px',
  //     data: {
  //       type: type,
  //       data: event
  //     }
  //   });
  // }

  // async onOpenDeleteDialog(event_id: number): Promise<void> {
  //   const confirmed = await this.toastService.showConfirm({
  //     icon: 'assets/images/common/calendar-x-lg.svg',
  //     title: 'Cancel Event',
  //     description: 'Are you sure? Proceeding will delete the event from the system, and can not be undone.',
  //     type: 'error',
  //     buttonText: 'Cancel event'
  //   });

  //   if (confirmed) {
  //     this.calendarService.deleteCalendarEvent(event_id).subscribe({});
  //   }
  // }
}
