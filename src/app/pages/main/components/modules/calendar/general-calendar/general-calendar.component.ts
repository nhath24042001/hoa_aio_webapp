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
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayjs from 'dayjs';
import { SelectModule } from 'primeng/select';

import { IGeneralCalendar } from '~/@types/calendar';
import { BaseComponent } from '~/components/common/base/base.component';
import { CALENDAR_ACTION, calendarHeader, GENERAL_CALENDAR } from '~/data/calendar';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-general-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule, Table],
  templateUrl: './general-calendar.component.html',
  styleUrl: './general-calendar.component.scss'
})
export class GeneralCalendar extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;

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
    initialView: 'dayGridMonth',
    events: []
  });
  actions = CALENDAR_ACTION;

  constructor(
    themeService: ThemeService,
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
        className: this.onStyleEvent(event.event_type)
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
    const switchingToCalendar = view.code !== 'list';

    this.isListView.set(view.code === 'list');
    this.selectedView.set(view);
    this.updateCalendar();
    this.onGetCalendarTitle();

    if (switchingToCalendar) {
      // Gọi sau khi DOM render (2 phase)
      setTimeout(() => {
        requestAnimationFrame(() => {
          this.calendarComponent?.getApi().updateSize();
        });
      }, 0);
    }
  }
  private updateCalendar(): void {
    if (!this.isListView() && this.calendarApi) {
      this.calendarApi.changeView(this.selectedView().code);
    }
  }

  onAction(event: { actionKey: string; rowData: IGeneralCalendar }): void {
    this.actionEmitter.emit({ actionKey: event.actionKey, rowData: event.rowData });
  }
}
