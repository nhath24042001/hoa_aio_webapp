/* eslint-disable no-console */
import { Component, OnInit } from '@angular/core';
import { some } from 'lodash-es';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { IAnnouncementChild } from '~/@types/announcement';
import { ButtonDirective } from '~/directives/button.directive';
import { MainHeader } from '~/pages/main/components//shared/main-header/main-header.component';
import { AnnouncementDetail } from '~/pages/main/components/modules/announcement/announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from '~/pages/main/components/modules/announcement/announcement-list/announcement-list.component';
import { DynamicAnnouncement } from '~/pages/main/components/modules/announcement/dynamic-announcement/dynamic-announcement.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ToastService } from '~/services/toast.service';

import { AnnouncementService } from './announcement.service';
@Component({
  selector: 'app-announcements',
  imports: [
    TabsModule,
    EmptyContentComponent,
    ButtonDirective,
    AnnouncementListComponent,
    MainHeader,
    CheckboxModule,
    PopoverModule
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  announcements: any[] = [];

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

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.getAllAnnouncements();
  }

  getAllAnnouncements(): void {
    this.announcementService.getAllAnnouncements().subscribe((response) => {
      this.announcements = response.announcements;
    });
  }

  checkAnnouncementExists(): boolean {
    return some([...this.announcements, ...this.announcements]);
  }

  onSearchAnnouncement(search_text: string): void {
    console.log('search', search_text);
  }

  onOpenAnnouncement(): void {
    this.ref = this.dialogService.open(DynamicAnnouncement, {
      modal: true,
      width: '1000px'
      // breakpoints: {
      //   '960px': '75vw',
      //   '640px': '90vw'
      // }
    });

    this.ref.onClose.subscribe(() => {});
  }

  onOpenAnnouncementDetail(): void {
    this.ref = this.dialogService.open(AnnouncementDetail, {
      modal: true,
      width: '1000px'
      // breakpoints: {
      //   '960px': '75vw',
      //   '640px': '90vw'
      // }
    });
    this.ref.onClose.subscribe(() => {});
  }

  async onImplementAction(event: {
    announcement: IAnnouncementChild;
    type: string;
  }): Promise<void> {
    switch (event.type) {
      case 'edit':
        this.onOpenAnnouncementDetail();
        break;
      case 'publish':
        this.onOpenPublishDialog();
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
    }
  }

  async onOpenDeleteDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete Item',
      description:
        'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete'
    });

    if (confirmed) {
      console.log('run 1');
    }
  }

  async onOpenPublishDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/check-circle-broken-lg.svg',
      title: 'Announcement Posted',
      description:
        'The announcement has been posted, and will be available to its recipients shortly.',
      type: 'success',
      buttonText: 'Ok'
    });

    if (confirmed) {
      console.log('run 1');
    }
  }
}
