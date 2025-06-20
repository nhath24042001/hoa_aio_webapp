import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { IAnnouncement } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'announcement-detail',
  imports: [DividerModule, DatePipe],
  templateUrl: './announcement-detail.component.html',
  styleUrl: './announcement-detail.component.scss'
})
export class AnnouncementDetail extends BaseComponent {
  data: IAnnouncement;
  userTypes = [
    { name: 'Residents', code: 're' },
    { name: 'Manager', code: 'ma' },
    { name: 'Board members', code: 'board' },
    { name: 'Vendors', code: 'ven' }
  ];
  selectedCities = [];
  expiredDate: string = '';
  content = '';
  link = '';

  announce_detail = {
    user_types: [
      { name: 'Residents', code: 're' },
      { name: 'Manager', code: 'ma' }
    ]
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    themeService: ThemeService
  ) {
    super(themeService);
    this.data = config.data;
  }

  closeDialog() {
    this.ref.close();
  }
}
