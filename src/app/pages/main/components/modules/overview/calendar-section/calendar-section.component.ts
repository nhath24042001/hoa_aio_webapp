import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { BaseComponent } from '~/components/common/base/base.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ThemeService } from '~/services/theme.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar-section',
  imports: [FullCalendarModule, ButtonPrimary, DatePipe],
  templateUrl: './calendar-section.component.html',
  styleUrl: './calendar-section.component.scss'
})
export class CalendarSectionComponent extends BaseComponent implements AfterViewInit, OnInit {
  @ViewChild('calendar') calendarComponent?: FullCalendarComponent;
  ref: DynamicDialogRef | undefined;
  calendarTitle = '';
  calendarOptions = signal<CalendarOptions>({
    plugins: [dayGridPlugin],
    headerToolbar: { left: '', right: '' },
    initialView: 'dayGridMonth',
    events: [
      { title: 'Meeting', start: '2025-03-05', className: 'custom-event-1' },
      { title: 'Community', start: '2025-03-07', className: 'custom-event-2' }
    ],
    height: '700px'
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
    this.calendarTitle = this.calendarApi?.view.title || '';
  }

  onNavigation(action: 'today' | 'prev' | 'next'): void {
    this.calendarApi?.[action]();
  }
}
