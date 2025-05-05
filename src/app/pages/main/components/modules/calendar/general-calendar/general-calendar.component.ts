/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePipe } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
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

import { BaseComponent } from '~/components/common/base/base.component';
import { calendarData, calendarHeader } from '~/data/calendar';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { CalendarService } from '~/pages/main/pages/calendar/calendar.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-general-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule, DatePipe, Table],
  templateUrl: './general-calendar.component.html',
  styleUrl: './general-calendar.component.scss'
})
export class GeneralCalendar extends BaseComponent implements AfterViewInit, OnInit {
  // TODO: Fix type any
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  @Output() actionEmitter = new EventEmitter<{ action: string; data: any }>();

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
    events: []
  });

  actions = [
    {
      label: 'Edit',
      icon: 'calendar-edit',
      actionKey: 'edit',
      className: '--pointer mb-2'
    },
    {
      label: 'Cancel Event',
      icon: 'calendar-x',
      actionKey: 'delete',
      className: '--delete-action --pointer'
    }
  ];

  constructor(
    themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    private calendarService: CalendarService
  ) {
    super(themeService);
  }

  get calendarApi() {
    return this.calendarComponent?.getApi();
  }

  ngAfterViewInit(): void {
    this.updateCalendar();
    this.onGetCalendarTitle();
    const date = this.calendarApi?.getDate();
    if (date) {
      const currentMonth = date.getMonth() + 1;
      const currentYear = date.getFullYear();
      this.onGetEvents(currentMonth, currentYear);
    }
  }

  onGetCalendarTitle(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
    this.cdr.detectChanges();
  }

  onGetEvents(month: number, year: number): void {
    // --event-orange
    // --event-purple
    // --event-green
    // --event-green-light
    // --event-red
    this.calendarService.getEventByDate(month, year).subscribe((res) => {
      this.calendarOptions.set({
        events: res.events.map((event) => ({
          ...event,
          start: dayjs(event.created_at).format('YYYY-MM-DD'),
          className: '--event --event-green'
        }))
      });
    });
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
    this.calendarTitle = this.calendarApi?.view.title || '';
    const date = this.calendarApi?.getDate();
    if (date) {
      const currentMonth = date.getMonth() + 1;
      const currentYear = date.getFullYear();
      this.onGetEvents(currentMonth, currentYear);
    }
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

  onAction(event: any): void {
    this.actionEmitter.emit({ action: event.actionKey, data: event.rowData });
  }
}
