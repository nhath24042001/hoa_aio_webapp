import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { some } from 'lodash-es';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { forkJoin } from 'rxjs';

import { IAnnouncement, IAnnouncementPayload } from '~/@types/announcement';
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
    SkeletonList,
    FormsModule
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  ACTION_DIALOG = ACTION_DIALOG;
  isLoading = true;
  searchText: string = '';
  userTypeSelected: string[] = [];

  activeAnnouncements: IAnnouncement[] = [];
  expiredAnnouncements: IAnnouncement[] = [];

  userTypes = [
    {
      label: 'Residents',
      value: '3'
    },
    {
      label: 'Managers',
      value: '5'
    },
    {
      label: 'Board members',
      value: '4'
    },
    {
      label: 'Vendors',
      value: '2'
    }
  ];

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService,
    private announcementService: AnnouncementService
  ) {}

  ngOnInit(): void {
    this.loadAnnouncements();
  }

  loadAnnouncements(): void {
    this.isLoading = true;

    forkJoin({
      expired: this.announcementService.getExpiredAnnouncements(this.searchText, this.userTypeSelected),
      active: this.announcementService.getActiveAnnouncements(this.searchText, this.userTypeSelected)
    }).subscribe(
      ({ active, expired }) => {
        this.activeAnnouncements = active.announcements;
        this.expiredAnnouncements = expired.announcements;
        this.isLoading = false;
      },
      () => {
        this.activeAnnouncements = [];
        this.expiredAnnouncements = [];
        this.isLoading = false;
      }
    );
  }

  checkAnnouncementExists(): boolean {
    return some([...this.activeAnnouncements, ...this.expiredAnnouncements]);
  }

  onSearchAnnouncement(_search_text: string): void {
    this.searchText = _search_text;
    this.loadAnnouncements();
  }

  onFilterChange(): void {
    this.loadAnnouncements();
  }

  clearFilter(): void {
    this.userTypeSelected = [];
    this.loadAnnouncements();
  }

  async onImplementAction(event: { announcement: IAnnouncement; type: string }): Promise<void> {
    switch (event.type) {
      case 'detail':
        this.onOpenAnnouncementDetail(event.announcement);
        break;
      case 'edit':
        this.onOpenAnnouncement(ACTION_DIALOG.EDIT, event.announcement);
        break;
      case 'publish':
        this.onOpenPublishDialog(event.announcement);
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

    this.ref.onClose.subscribe((result) => {
      if (result) {
        this.loadAnnouncements();
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
      description: 'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete'
    });

    if (confirmed) {
      this.announcementService.deleteAnnouncement(announcement.id).subscribe((response) => {
        if (response.rc === 0) {
          this.loadAnnouncements();
        }
      });
    }
  }

  async onOpenPublishDialog(announcement: IAnnouncement): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/check-circle-broken-lg.svg',
      title: 'Announcement Posted',
      description:
        'The announcement has been posted, and will be available to its recipients shortly.',
      type: 'success',
      buttonText: 'Ok'
    });

    if (confirmed) {
      const payload: IAnnouncementPayload = {
        title: announcement.title,
        description: announcement.description,
        link: announcement.link,
        expiration_date: announcement.expiration_date,
        announcement_date: '',
        user_types: ['1', '2'],
        is_draft: false
      };
      this.announcementService.editAnnouncement(announcement.id, payload).subscribe((response) => {
        if (response.rc === 0) {
          this.loadAnnouncements();
        }
      });
    }
  }
}
