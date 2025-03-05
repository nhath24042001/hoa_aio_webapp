import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  signal,
  ViewChild
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { SelectModule } from 'primeng/select';
import { Table } from '~/pages/main/components/shared/table/table.component';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';

import { calendarHeader, calendarData } from '~/data/calendar';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-general-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule, DatePipe, Table],
  templateUrl: './general-calendar.component.html',
  styleUrl: './general-calendar.component.scss'
})
export class GeneralCalendar extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;

  isListView = signal(false);
  calendarTitle = '';
  calendarHeader = calendarHeader;
  calendarData = calendarData;
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
    events: [
      { title: 'Booking Request', start: '2025-03-03', className: '--event --event-red' },
      { title: 'Event Title - Truncate', start: '2025-03-03', className: '--event --event-purple' },
      { title: 'Event Title - Truncate', start: '2025-03-04', className: '--event --event-orange' },
      { title: 'Event Title - Truncate', start: '2025-03-05', className: '--event --event-purple' },
      { title: 'Event Title - Truncate', start: '2025-03-05', className: '--event --event-orange' },
      { title: 'Event Title - Truncate', start: '2025-03-06', className: '--event --event-green-light' },
      { title: 'Event Title - Truncate', start: '2025-03-06', className: '--event --event-green' },
      { title: 'Event Title - Truncate', start: '2025-03-07', className: '--event --event-green' },
      { title: 'Event Title - Truncate', start: '2025-03-07', className: '--event --event-orange' },
      { title: 'Event Title - Truncate', start: '2025-03-10', className: '--event --event-purple' },
      { title: 'Event Title - Truncate', start: '2025-03-10', className: '--event --event-green-light' },
      { title: 'Event Title - Truncate', start: '2025-03-07', className: '--event --event-green' },
    ]
  });

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
  }

  onGetCalendarTitle(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
    this.cdr.detectChanges();
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
}
