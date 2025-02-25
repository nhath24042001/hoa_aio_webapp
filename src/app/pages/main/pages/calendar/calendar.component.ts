import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { FullCalendarComponent } from '@fullcalendar/angular';

import { MainHeader } from '../../components/shared/main-header/main-header.component';

@Component({
  selector: 'app-calendar',
  imports: [FullCalendarModule, TabsModule, FormsModule, SelectModule, MainHeader],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements AfterViewInit {
  @ViewChild('calendar', { static: false }) calendarComponent!: FullCalendarComponent;

  isActiveEvent = false;
  userTypes = [
    {
      label: 'Residents',
      value: 'residents',
      isChecked: false
    },
    {
      label: 'Managers',
      value: 'managers',
      isChecked: false
    },
    {
      label: 'Board members',
      value: 'boardMembers',
      isChecked: false
    },
    {
      label: 'Vendors',
      value: 'vendors',
      isChecked: false
    }
  ];

  viewOptions = [
    { name: 'Month  ', code: 'dayGridMonth' },
    { name: 'Week', code: 'timeGridWeek' },
    { name: 'Daily', code: 'timeGridDay' },
    { name: 'List', code: 'listWeek' }
  ];

  selectedView = signal({ name: 'Month', code: 'dayGridMonth' });

  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'today title prev,next',
      right: ''
    },
    initialView: this.selectedView().code
  });

  onSearch(): void {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.calendarComponent) {
        const calendarApi = this.calendarComponent.getApi();
        calendarApi.changeView(this.selectedView().code);
      } else {
        console.error('calendarComponent is undefined');
      }
    }, 1200);
  }

  onViewChange(event: any) {
    const newView = event.value;
    this.selectedView.set(newView);

    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.changeView(newView.code);
    } else {
      console.error('calendarComponent is undefined');
    }
  }
}
