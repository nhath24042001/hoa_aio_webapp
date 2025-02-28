import { Component, signal, ViewChild } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
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
export class CalendarComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

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
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin],
    headerToolbar: {
      left: 'today title prev,next',
      right: ''
    },
    initialView: 'dayGridMonth'
  });

  onSearch(): void {}

  someMethod() {
    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      console.log('calendarApi', calendarApi);
      calendarApi.next();
    } else {
      console.error('calendarComponent is undefined');
    }
  }

  onViewChange(event: any) {
    const newView = event.code;
    this.selectedView.set(newView);

    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      calendarApi.changeView(newView);
    } else {
      console.error('calendarComponent is undefined');
    }
  }

  handleDateSelect(selectInfo: any) {
    alert(`Selected: ${selectInfo.startStr} to ${selectInfo.endStr}`);
  }
}
