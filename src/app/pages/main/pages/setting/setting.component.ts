import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { ToggleSwitchModule } from 'primeng/toggleswitch';

import { InputFile } from '~/components/shared/input-file/input-file.component';
import { ButtonDirective } from '~/directives/button.directive';
import { Table } from '~/pages/main/components/shared/table/table.component';
@Component({
  selector: 'app-setting',
  imports: [
    ButtonDirective,
    DividerModule,
    InputFile,
    TextareaModule,
    Table,
    ToggleSwitchModule,
    CheckboxModule,
    FormsModule,
    InputTextModule
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {
  value = '';
  facilityHeader = [
    { field: 'title', name: 'Title' },
    { field: 'is_open_resident', name: 'Open for residents reservations' },
    { field: 'availability_times', name: 'Availability times' },
    { field: 'action', name: '' }
  ];
  facilityData = [
    {
      title: 'Country Club',
      type: 'Community Event',
      is_open_resident: 'yes',
      availability_times: 'Tue. - Sun. 10:00 - 20:00'
    }
  ];
  triggerNotificationList = [
    {
      title: 'Claim status change',
      isChecked: false
    },
    {
      title: 'Violation status change',
      isChecked: false
    },
    {
      title: 'Payment status change',
      isChecked: false
    },
    {
      title: 'Payment status change',
      isChecked: false
    },
    {
      title: 'New announcement',
      isChecked: false
    },
    {
      title: 'New bid',
      isChecked: false
    },
    {
      title: 'New HOA meeting minutes',
      isChecked: false
    },
    {
      title: 'New calendar invite',
      isChecked: false
    },
    {
      title: 'Task status change',
      isChecked: false
    }
  ];
}
