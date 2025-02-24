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
    initialView: 'dayGridMonth',
    weekends: true,
    events: [{ title: 'Meeting', start: new Date() }]
  };
}
