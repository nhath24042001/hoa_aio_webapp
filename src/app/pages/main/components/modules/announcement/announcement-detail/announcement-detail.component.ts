import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DatePipe } from '@angular/common';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'announcement-detail',
  imports: [DividerModule, DatePipe],
  templateUrl: './announcement-detail.component.html',
  styleUrl: './announcement-detail.component.scss'
})
export class AnnouncementDetail extends BaseComponent {
  data: any;
  userTypes: any[] = [
    { name: 'Residents', code: 're' },
    { name: 'Manager', code: 'ma' },
    { name: 'Board members', code: 'board' },
    { name: 'Vendors', code: 'ven' }
  ];
  selectedCities!: any[];
  expiredDate: string = '';
  content = '';
  link = '';

  announce_detail = {
    id: '3567890',
    title: 'Announcement with Some Content',
    user_types: [
      { name: 'Residents', code: 're' },
      { name: 'Manager', code: 'ma' }
    ],
    expired_date: '2023-08-01',
    content: 'This is an announcement. It has some text in it.',
    link: 'https://example.com'
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
