import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { DatePipe } from '@angular/common';

import { MainHeader } from '../../components/shared/main-header/main-header.component';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { calendarHeader, calendarData } from './../../../../data/calendar';
import { DynamicEvent } from '~/pages/main/components/modules/calendar/dynamic-event/dynamic-event.component';
@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, TabsModule, FormsModule, SelectModule, MainHeader, DatePipe, Table],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  ref: DynamicDialogRef | undefined;

  isActiveEvent = false;
  isListView = signal(false);
  calendarTitle = '';
  calendarHeader = calendarHeader;
  calendarData = calendarData;

  userTypes = [
    { label: 'Residents', value: 'residents', isChecked: false },
    { label: 'Managers', value: 'managers', isChecked: false },
    { label: 'Board members', value: 'boardMembers', isChecked: false },
    { label: 'Vendors', value: 'vendors', isChecked: false }
  ];

  viewOptions = [
    { name: 'Month', code: 'dayGridMonth' },
    { name: 'Week', code: 'timeGridWeek' },
    { name: 'Daily', code: 'timeGridDay' },
    { name: 'List', code: 'list' }
  ];

  selectedView = signal(this.viewOptions[0]);

  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
    headerToolbar: { left: 'today title prev,next', right: '' },
    initialView: 'dayGridMonth'
  });

  constructor(
    themeService: ThemeService,
    public dialogService: DialogService
  ) {
    super(themeService);
  }

  get calendarApi() {
    return this.calendarComponent?.getApi();
  }

  ngAfterViewInit(): void {
    this.updateCalendar();
    this.onGetCalendarTitle();
  }

  onSearch(): void {}

  onGetCalendarTitle(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
  }

  onViewChange(view: { name: string; code: string }): void {
    this.isListView.set(view.code === 'list');
    this.selectedView.set(view);
    this.updateCalendar();
  }

  private updateCalendar(): void {
    if (!this.isListView() && this.calendarApi) {
      this.calendarApi.changeView(this.selectedView().code);
    }
  }

  onOpenCreateEvent(): void {
    this.ref = this.dialogService.open(DynamicEvent, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenTaskDetail(): void {
    this.ref = this.dialogService.open(DynamicEvent, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
        event: {
          id: '4567890',
          title: 'Event Title - Truncated if title is very long',
          event_type: 'Community Event',
          start_date: '2023-06-20:10:00:00',
          end_date: '2023-06-20:12:00:00',
          registration_required: 'Yes',
          location: 'Main Auditorium',
          price: '$12',
          participants: ['Michelle Stockton', 'Grant Freemason'],
          description:
            'This is a description of the event. It can be very long and will be truncated if it is too long.',
          rsvp_list: 'Michelle Stockton, Grant Freemason',
          attachments: [
            {
              file_name: 'Event Invite.jpg',
              file_size: '2MB'
            }
          ]
        }
      }
    });
  }
}
