import { Component, OnInit } from '@angular/core';
import { some } from 'lodash-es';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { IAnnouncement } from '~/@types/announcement';
import { SkeletonList } from '~/components/shared/skeleton-list/skeleton-list.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ACTION_DIALOG } from '~/enums';
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
    PopoverModule,
    SkeletonList
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  ACTION_DIALOG = ACTION_DIALOG;
  isLoading = true;

  announcements: IAnnouncement[] = [];
  expiredAnnouncements: IAnnouncement[] = [];

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
    this.isLoading = true;
    this.announcementService.getAllAnnouncements().subscribe({
      next: (response) => {
        this.announcements = response.announcements;
        this.isLoading = false;
      },
      error: () => {
        this.announcements = [];
        this.isLoading = false;
      }
    });
  }

  checkAnnouncementExists(): boolean {
    return some([...this.announcements, ...this.announcements]);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSearchAnnouncement(_search_text: string): void {}

  async onImplementAction(event: { announcement: IAnnouncement; type: string }): Promise<void> {
    switch (event.type) {
      case 'detail':
        this.onOpenAnnouncementDetail(event.announcement);
        break;
      case 'edit':
        this.onOpenAnnouncement(ACTION_DIALOG.EDIT, event.announcement);
        break;
      case 'publish':
        this.onOpenPublishDialog();
        break;
      case 'delete':
        this.onOpenDeleteDialog(event.announcement);
        break;
    }
  }

  onOpenAnnouncement(type: string, announcement: IAnnouncement | null): void {
    this.ref = this.dialogService.open(DynamicAnnouncement, {
      modal: true,
      width: '1000px',
      data: {
        type,
        data: announcement
      }
    });
  }

  onOpenAnnouncementDetail(announcement: IAnnouncement): void {
    this.ref = this.dialogService.open(AnnouncementDetail, {
      modal: true,
      width: '1000px',
      data: announcement
    });
  }

  async onOpenDeleteDialog(announcement: IAnnouncement): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete Item',
      description:
        'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete'
    });

    if (confirmed) {
      this.announcementService.deleteAnnouncement(announcement.id).subscribe((response) => {
        if (response.rc === 0) {
          this.getAllAnnouncements();
        }
      });
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
