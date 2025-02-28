import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';

@Component({
  selector: 'app-calendar-section',
  imports: [FullCalendarModule, ButtonPrimary],
  templateUrl: './calendar-section.component.html',
  styleUrl: './calendar-section.component.scss'
})
export class CalendarSectionComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    headerToolbar: {
      left: 'title prev,next',
      right: ''
    },
    events: [
      { title: 'Event', start: '2025-02-10', className: 'custom-event-1' },
      { title: 'Event 1', start: '2025-02-15', className: 'custom-event-2' }
    ],
    height: '700px',
  };
}
