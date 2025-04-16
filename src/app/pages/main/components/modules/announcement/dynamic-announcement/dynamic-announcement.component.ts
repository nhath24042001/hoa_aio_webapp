/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import dayjs from 'dayjs';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { AnnouncementService } from '~/pages/main/pages/announcements/announcement.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'dynamic-announcement',
  imports: [
    DividerModule,
    MultiSelectModule,
    DatePickerModule,
    TextareaModule,
    InputTextModule,
    ButtonDirective,
    FormsModule
  ],
  templateUrl: './dynamic-announcement.component.html',
  styleUrl: './dynamic-announcement.component.scss'
})
export class DynamicAnnouncement extends BaseComponent {
  // TODO: Fix type any
  data: any;
  userTypes: any[] = [
    { name: 'Residents', code: 're' },
    { name: 'Manager', code: 'ma' },
    { name: 'Board members', code: 'board' },
    { name: 'Vendors', code: 'ven' }
  ];
  announcementForm: FormGroup;
  selectedCities!: any[];

  announcementData = {
    title: 'title',
    description: '',
    link: '',
    expiration_date: '',
    announcement_date: ''
  };

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    themeService: ThemeService,
    private announcementService: AnnouncementService
  ) {
    super(themeService);
    this.data = config.data;
    this.announcementForm = this.FormBuilder.group({
      title: ['title'],
      description: [''],
      link: [''],
      expiration_date: [''],
      announcement_date: ['']
    });
  }

  closeDialog() {
    this.ref.close();
  }

  onSubmit() {
    if (
      !this.announcementData.expiration_date ||
      !this.announcementData.description ||
      !this.announcementData.link
    ) {
      return;
    }

    this.announcementData.expiration_date = dayjs().format('YYYY-MM-DD HH:mm:ss');

    this.announcementService.addAnnouncement(this.announcementData).subscribe((res) => {
      if (res.rc === 0) {
        this.ref.close(res);
      }
    });
  }
}
