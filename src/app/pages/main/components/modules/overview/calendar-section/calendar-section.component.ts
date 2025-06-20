import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import dayjs from 'dayjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ROUTE_PATH } from '~/enums/route';
import { CalendarService } from '~/pages/main/pages/calendar/calendar.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-calendar-section',
  imports: [FullCalendarModule, ButtonDirective, DatePipe],
  templateUrl: './calendar-section.component.html',
  styleUrl: './calendar-section.component.scss'
})
export class CalendarSectionComponent extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  ref: DynamicDialogRef | undefined;
  ROUTE_PATH = ROUTE_PATH;
  calendarTitle = '';
  calendarOptions = signal<CalendarOptions>({
    plugins: [dayGridPlugin],
    headerToolbar: { left: '', right: '' },
    initialView: 'dayGridMonth',
    events: [
      { title: 'Meeting', start: '2025-04-28', className: 'custom-event-1' },
      { title: 'Community', start: '2025-03-07', className: 'custom-event-2' }
    ],
    height: '700px'
  });

  constructor(
    themeService: ThemeService,
    private cdr: ChangeDetectorRef,
    public dialogService: DialogService,
    private calendarService: CalendarService,
    private router: Router
  ) {
    super(themeService);
  }

  get calendarApi() {
    return this.calendarComponent?.getApi();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getAllEvents();
  }

  ngAfterViewInit(): void {
    this.calendarTitle = this.calendarApi?.view.title || '';
    this.cdr.detectChanges();
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
  }

  getAllEvents() {
    this.calendarService.getUpcomingEvents().subscribe((res) => {
      this.calendarOptions().events = res.events.map((event) => ({
        title: event.title,
        start: dayjs(event.event_date).format('YYYY-MM-DD'),
        className: 'custom-event-1'
      }));
    });
  }

  onNavigateToEvent() {
    this.router.navigate([ROUTE_PATH.CALENDAR]);
  }
}
