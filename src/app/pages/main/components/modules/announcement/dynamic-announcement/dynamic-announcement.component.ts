import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import dayjs from 'dayjs';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';

import { ISelect } from '~/@types';
import { IAnnouncement, IAnnouncementPayload } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ACTION_DIALOG } from '~/enums';
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
export class DynamicAnnouncement extends BaseComponent implements AfterViewInit {
  data = {} as IAnnouncement;
  type: string = '';
  userTypes: ISelect[] = [
    { name: 'Residents', code: 're' },
    { name: 'Manager', code: 'ma' },
    { name: 'Board members', code: 'board' },
    { name: 'Vendors', code: 'ven' }
  ];
  selectedCities!: ISelect[];

  announcementData: IAnnouncementPayload = {
    title: 'Long Announcement Title Can Be Truncated',
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
    this.type = config.data.type;
  }

  ngAfterViewInit(): void {
    if (this.type === ACTION_DIALOG.EDIT) {
      this.data = this.config.data.data;
      this.announcementData.title = this.data.title;
      this.announcementData.description = this.data.description;
      this.announcementData.link = this.data.link;
      this.announcementData.expiration_date = dayjs(this.data.expiration_date).toDate();
    }
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
