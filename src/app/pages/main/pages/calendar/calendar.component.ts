import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

import { MainHeader } from '../../components/shared/main-header/main-header.component';
import { DynamicEvent } from '~/pages/main/components/modules/calendar/dynamic-event/dynamic-event.component';
import { GeneralCalendar } from '~/pages/main/components/modules/calendar/general-calendar/general-calendar.component';
import { ClubCalendar } from '~/pages/main/components/modules/calendar/club-calendar/club-calendar.component';

@Component({
  selector: 'app-calendar',
  imports: [
    FullCalendarModule,
    TabsModule,
    FormsModule,
    SelectModule,
    MainHeader,
    GeneralCalendar,
    ClubCalendar
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  ref: DynamicDialogRef | undefined;

  isActiveEvent = false;
  userTypes = [
    { label: 'Residents', value: 'residents', isChecked: false },
    { label: 'Managers', value: 'managers', isChecked: false },
    { label: 'Board members', value: 'boardMembers', isChecked: false },
    { label: 'Vendors', value: 'vendors', isChecked: false }
  ];

  constructor(public dialogService: DialogService) {}

  onSearch(): void {}

  onOpenCreateEvent(): void {
    this.ref = this.dialogService.open(DynamicEvent, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenTaskDetail(): void {
    this.ref = this.dialogService.open(DynamicEvent, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
        event: {
          id: '4567890',
          title: 'Event Title - Truncated if title is very long',
          event_type: 'Community Event',
          start_date: '2023-06-20:10:00:00',
          end_date: '2023-06-20:12:00:00',
          registration_required: 'Yes',
          location: 'Main Auditorium',
          price: '$12',
          participants: ['Michelle Stockton', 'Grant Freemason'],
          description:
            'This is a description of the event. It can be very long and will be truncated if it is too long.',
          rsvp_list: 'Michelle Stockton, Grant Freemason',
          attachments: [
            {
              file_name: 'Event Invite.jpg',
              file_size: '2MB'
            }
          ]
        }
      }
    });
  }
}
