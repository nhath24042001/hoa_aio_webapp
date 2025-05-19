import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg, EventContentArg } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs from 'dayjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';

import { IClubCalendar } from '~/@types/calendar';
import { BaseComponent } from '~/components/common/base/base.component';
import { calendarHeader, CLUB_CALENDAR } from '~/data/calendar';
import { ThemeService } from '~/services/theme.service';
import { getEventStyle } from '~/utils/calendar-utils';

import { ClubDialog } from '../club-dialog/club-dialog.component';

@Component({
  selector: 'app-club-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule],
  templateUrl: './club-calendar.component.html',
  styleUrl: '../general-calendar/general-calendar.component.scss'
})
export class ClubCalendar extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('clubCalendar') calendarComponent?: FullCalendarComponent;
  @ViewChild('calendarContainer', { static: true }) calendarContainer!: ElementRef;
  ref: DynamicDialogRef | undefined;

  calendarTitle = '';
  calendarHeader = calendarHeader;
  events: IClubCalendar[] = [];
  viewOptions = [
    { name: 'Month', code: 'dayGridMonth' },
    { name: 'Week', code: 'timeGridWeek' },
    { name: 'Daily', code: 'timeGridDay' }
  ];
  selectedView = signal(this.viewOptions[0]);
  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
    headerToolbar: { left: '', right: '' },
    initialView: 'dayGridMonth',
    dayMaxEvents: 3,
    eventClick: this.onEventClick.bind(this)
  });

  constructor(
    themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    public dialogService: DialogService
  ) {
    super(themeService);
  }

  get calendarApi() {
    return this.calendarComponent?.getApi();
  }

  ngAfterViewInit(): void {
    this.onGetCalendarTitle();
    this.onGetEvents();

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.calendarApi?.updateSize();
        this.onGetCalendarTitle();
        observer.disconnect();
      }
    });
    observer.observe(this.calendarContainer.nativeElement);
  }

  onGetCalendarTitle(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
    this.cdr.detectChanges();
  }

  onGetEvents(): void {
    this.events = CLUB_CALENDAR;
    this.calendarOptions.set({
      events: this.events.map((event) => ({
        ...event,
        start: dayjs(event.start_date).format('YYYY-MM-DD'),
        className: '--event --event-purple',
        extendedProps: {
          description: event.description,
          start_date: event.start_date,
          end_date: event.end_date,
          title: event.title
        }
      }))
    });
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
    this.calendarTitle = this.calendarApi?.view.title || '';
  }

  onViewChange(view: { name: string; code: string }): void {
    this.selectedView.set(view);
    this.selectedView.set(view);
    this.updateCalendar();
    this.onGetCalendarTitle();

    this.calendarOptions.set({
      ...this.getCalendarOptionsByView(view.code),
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    });
  }

  private updateCalendar(): void {
    if (this.calendarApi) {
      this.calendarApi.changeView(this.selectedView().code);
    }
  }

  private getCalendarOptionsByView(type: string) {
    const isTimeGrid = type === 'timeGridWeek';

    return {
      ...this.calendarOptions(),
      slotMinTime: isTimeGrid ? '00:00:00' : '00:00:00',
      slotMaxTime: isTimeGrid ? '00:00:00' : '24:00:00',
      eventTimeFormat: {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      },
      dayMaxEventRows: true,
      height: 'auto',
      events: this.events.map((event) => ({
        ...event,
        start: type === 'timeGridDay' ? event.start_date : dayjs(event.start_date).format('YYYY-MM-DD'),
        className: '--event --event-purple',
        extendedProps: {
          description: event.description,
          start_date: event.start_date,
          end_date: event.end_date,
          title: event.title
        }
      })),

      eventContent: this.getEventContent(type)
    };
  }

  private getEventContent(type: string) {
    return (arg: EventContentArg) => {
      const event = arg.event;
      const startTime = event.extendedProps['start_date']
        ? dayjs(event.extendedProps['start_date']).format('HH:mm')
        : '';
      const endTime = event.extendedProps['end_date'] ? dayjs(event.extendedProps['end_date']).format('HH:mm') : '';
      const description = event.extendedProps['description'] || '';

      return {
        html: getEventStyle(type, event.title, description, startTime, endTime)
      };
    };
  }

  onEventClick(arg: EventClickArg): void {
    const event = arg.event.extendedProps as IClubCalendar;

    this.ref = this.dialogService.open(ClubDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
        data: {
          title: event.title,
          created_date: '2/2/2021',
          update_date: '2/2/2022',
          formData: event
        }
      }
    });
  }
}
