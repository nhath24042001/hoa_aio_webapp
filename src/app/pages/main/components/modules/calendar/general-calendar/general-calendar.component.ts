import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  output,
  signal,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { EventClickArg, EventContentArg } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs from 'dayjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';

import { IGeneralCalendar } from '~/@types/calendar';
import { BaseComponent } from '~/components/common/base/base.component';
import { CALENDAR_ACTION, calendarHeader, GENERAL_CALENDAR } from '~/data/calendar';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ThemeService } from '~/services/theme.service';

import { DynamicEvent } from '../dynamic-event/dynamic-event.component';

@Component({
  selector: 'app-general-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule, Table],
  templateUrl: './general-calendar.component.html',
  styleUrl: './general-calendar.component.scss'
})
export class GeneralCalendar extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  ref: DynamicDialogRef | undefined;

  actionEmitter = output<{ actionKey: string; rowData: IGeneralCalendar }>();
  isListView = signal(false);
  calendarTitle = '';
  calendarHeader = calendarHeader;
  events: IGeneralCalendar[] = [];
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
    eventClick: this.onEventClick.bind(this)
  });
  actions = CALENDAR_ACTION;

  constructor(
    themeService: ThemeService,
    public dialogService: DialogService,
    private cdr: ChangeDetectorRef
  ) {
    super(themeService);
  }

  get calendarApi() {
    return this.calendarComponent?.getApi();
  }

  ngAfterViewInit(): void {
    this.updateCalendar();
    this.onGetCalendarTitle();
    this.onGetEvents();
  }

  onGetCalendarTitle(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
    this.cdr.detectChanges();
  }

  onGetEvents(): void {
    this.events = GENERAL_CALENDAR;
    this.calendarOptions.set({
      events: this.events.map((event) => ({
        ...event,
        start: dayjs(event.start_date).format('YYYY-MM-DD'),
        className: this.onStyleEvent(event.event_type),
        extendedProps: {
          description: event.description,
          start_date: event.start_date,
          end_date: event.end_date,
          title: event.title
        }
      }))
    });
  }

  onStyleEvent(type: string) {
    switch (type) {
      case 'community':
        return '--event --event-orange';
      case 'facility':
        return '--event --event-purple';
      case 'maintenance':
        return '--event --event-green';
      case 'administrative':
        return '--event --event-green-light';

      default:
        return '--event --event-red';
    }
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
    this.calendarTitle = this.calendarApi?.view.title || '';
  }

  onViewChange(view: { name: string; code: string }): void {
    this.isListView.set(view.code === 'list');
    this.selectedView.set(view);
    this.updateCalendar();
    this.onGetCalendarTitle();

    /*
      The calendar API does not update the size of the calendar when switching to list view.
      This is a workaround to force the calendar to update its size.
    */
    if (!this.isListView()) {
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.calendarComponent?.getApi().updateSize();
        });
      }, 0);
    }

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
    if (!this.isListView() && this.calendarApi) {
      this.calendarApi.changeView(this.selectedView().code);
    }
  }

  onAction(event: { actionKey: string; rowData: IGeneralCalendar }): void {
    this.actionEmitter.emit({ actionKey: event.actionKey, rowData: event.rowData });
  }

  onEventClick(arg: EventClickArg): void {
    const event = arg.event.extendedProps as IGeneralCalendar;

    this.ref = this.dialogService.open(DynamicEvent, {
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

  private getEventContent(type: string) {
    return (arg: EventContentArg) => {
      const event = arg.event;
      const startTime = event.extendedProps['start_date']
        ? dayjs(event.extendedProps['start_date']).format('HH:mm')
        : '';
      const endTime = event.extendedProps['end_date']
        ? dayjs(event.extendedProps['end_date']).format('HH:mm')
        : '';
      const description = event.extendedProps['description'] || '';

      return {
        html: this.getEventStyle(type, event.title, description, startTime, endTime)
      };
    };
  }

  private getEventStyle(
    type: string,
    title: string,
    description: string,
    startTime: string,
    endTime: string
  ) {
    switch (type) {
      case 'timeGridWeek':
        return `
          <div>
            <span class='--truncate-3 text-black'>${title}</span><br/>
            <span class='--truncate text-black'>${description}</span>
            <span class='--truncate text-black'>${startTime} - ${endTime}</span><br/>
          </div>
        `;
      case 'timeGridDay':
        return `
            <span class='--truncate-3 text-black'>${title}</span><br/>
            <div class='d-flex align-items-center'>
              <small class='--truncate text-black'>${description}</small>
              <small class='--truncate text-black'>${startTime} - ${endTime}</small><br/>
            </div>
        `;
      default:
        return `
          <span class='--truncate-3 text-black'>${title}</span><br/>
          `;
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
        start:
          type === 'timeGridDay' ? event.start_date : dayjs(event.start_date).format('YYYY-MM-DD'),
        className: this.onStyleEvent(event.event_type),
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
}
