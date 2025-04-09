/* eslint-disable no-console */
import { Component } from '@angular/core';
import { some } from 'lodash-es';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { IAnnouncement, IAnnouncementChild } from '~/@types/announcement';
import { ButtonDirective } from '~/directives/button.directive';
import { MainHeader } from '~/pages/main/components//shared/main-header/main-header.component';
import { AnnouncementDetail } from '~/pages/main/components/modules/announcement/announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from '~/pages/main/components/modules/announcement/announcement-list/announcement-list.component';
import { DynamicAnnouncement } from '~/pages/main/components/modules/announcement/dynamic-announcement/dynamic-announcement.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ToastService } from '~/services/toast.service';
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
export class AnnouncementsComponent {
  ref: DynamicDialogRef | undefined;

  announcements: IAnnouncement = {
    active: [
      {
        title: 'Announcement that was saved as draft',
        type: 'Draft',
        created: '2025-10-16 08:46:00',
        personSent: 'Kerry Gant'
      },
      {
        title: 'Announcement with Some Content',
        created: '2025-02-24: 08:46:00',
        personSent: 'Larry Birch'
      },
      {
        title: 'Long Announcement Title Can Be Truncated',
        created: '2025-02-24: 08:46:00',
        personSent: 'Larry Birch'
      },
      {
        title: 'Long Announcement Title Can Be Truncated',
        created: '2025-02-24: 08:46:00',
        personSent: 'Larry Birch'
      },
      {
        title: 'Long Announcement Title Can Be Truncated',
        created: '2025-02-24: 08:46:00',
        personSent: 'Larry Birch'
      }
    ],
    expired: [
      {
        title: 'Announcement with Some Content',
        created: '2025-02-24',
        personSent: 'Larry Birch'
      }
    ]
  };

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
    private toastService: ToastService
  ) {}

  checkAnnouncementExists(): boolean {
    return some([...this.announcements.active, ...this.announcements.expired]);
  }

  onSearchAnnouncement(): void {}

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
