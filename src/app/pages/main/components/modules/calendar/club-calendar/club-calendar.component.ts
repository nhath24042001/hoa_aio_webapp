import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { SelectModule } from 'primeng/select';

import { BaseComponent } from '~/components/common/base/base.component';
import { calendarData, calendarHeader } from '~/data/calendar';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-club-calendar',
  imports: [FullCalendarModule, FormsModule, SelectModule, DatePipe, Table],
  templateUrl: './club-calendar.component.html',
  styleUrl: './club-calendar.component.scss'
})
export class ClubCalendar extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('clubCalendar') calendarComponent2?: FullCalendarComponent;

  isListView2 = signal(false);
  calendarTitle2 = '';
  calendarHeader2 = calendarHeader;
  calendarData2 = calendarData;
  viewOptions2 = [
    { name: 'Month', code: 'dayGridMonth' },
    { name: 'Week', code: 'timeGridWeek' },
    { name: 'Daily', code: 'timeGridDay' },
    { name: 'List', code: 'list' }
  ];
  selectedView2 = signal(this.viewOptions2[0]);
  calendarOptions2 = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
    headerToolbar: { left: '', right: '' },
    initialView: 'dayGridMonth'
  });

  constructor(
    themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    super(themeService);
  }

  get calendarApi2() {
    return this.calendarComponent2?.getApi();
  }

  ngAfterViewInit(): void {
    this.updateCalendar();
    this.onGetCalendarTitle();
  }

  onGetCalendarTitle(): void {
    this.calendarTitle2 = this.calendarApi2?.view.title || '';
    this.cdr.detectChanges();
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi2?.[action]();
  }

  onViewChange(view: { name: string; code: string }): void {
    this.isListView2.set(view.code === 'list');
    this.selectedView2.set(view);
    this.updateCalendar();
  }

  private updateCalendar(): void {
    if (!this.isListView2() && this.calendarApi2) {
      this.calendarApi2.changeView(this.selectedView2().code);
    }
  }
}
