import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounce } from 'lodash-es';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { forkJoin } from 'rxjs';

import { ITab } from '~/@types';
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
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  ACTION_DIALOG = ACTION_DIALOG;
  activeTab = signal('0');
  isEmpty = false;

  searchText: string = '';

  selectedUserType: string[] = [];

  tabs: Partial<ITab<IAnnouncement>>[] = [
    {
      name: 'Active Announcements',
      data: [],
      loading: false
    },
    {
      name: 'Expired Announcements',
      data: [],
      loading: false
    }
  ];

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

  get userTypesSelected(): number[] {
    return this.selectedUserType.map((type) => parseInt(type, 10));
  }

  ngOnInit(): void {
    this.getDefaultTab();

    if (this.tabs[0].data!.length < 0 || this.tabs[1].data!.length < 0) {
      this.isEmpty = true;
    }
  }

  onFilterChange() {
    this.loadTabData(this.activeTab());
  }

  clearFilter(): void {
    this.selectedUserType = [];
    this.loadTabData(this.activeTab());
  }

  getDefaultTab() {
    const tabIndex = parseInt(this.activeTab(), 10);
    this.tabs[tabIndex].loading = false;

    forkJoin({
      expired: this.announcementService.getExpiredAnnouncements(this.searchText, this.userTypesSelected),
      active: this.announcementService.getActiveAnnouncements(this.searchText, this.userTypesSelected)
    }).subscribe(
      ({ active, expired }) => {
        this.tabs[0].data = active.announcements;
        this.tabs[1].data = expired.announcements;
        this.tabs[tabIndex].loading = false;
      },
      () => {
        this.tabs[0].data = [];
        this.tabs[1].data = [];
        this.tabs[tabIndex].loading = false;
      }
    );
  }

  loadTabData(index: number | string): void {
    const tabIndex = parseInt(index.toString(), 10);
    this.tabs[tabIndex].loading = true;

    if (this.activeTab() === '0') {
      this.announcementService.getActiveAnnouncements(this.searchText, this.userTypesSelected).subscribe({
        next: (data) => {
          this.tabs[tabIndex].data = data.announcements;
        },
        error: () => {
          this.tabs[tabIndex].data = [];
        },
        complete: () => {
          this.tabs[tabIndex].loading = false;
        }
      });
    } else {
      this.announcementService.getExpiredAnnouncements(this.searchText, this.userTypesSelected).subscribe({
        next: (data) => {
          this.tabs[tabIndex].data = data.announcements;
        },
        error: () => {
          this.tabs[tabIndex].data = [];
        },
        complete: () => {
          this.tabs[tabIndex].loading = false;
        }
      });
    }
  }

  onSearchChange = debounce((text: string) => {
    this.searchText = text;
    const tabIdx = parseInt(this.activeTab(), 10);
    this.loadTabData(tabIdx);
  }, 500);

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
    const tabIndex = parseInt(this.activeTab(), 10);

    this.ref = this.dialogService.open(DynamicAnnouncement, {
      modal: true,
      width: '1000px',
      data: {
        type,
        data: announcement
      }
    });

    this.ref.onClose.subscribe(() => {
      this.loadTabData(tabIndex);
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
    const tabIndex = parseInt(this.activeTab(), 10);

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
          this.loadTabData(tabIndex);
        }
      });
    }
  }

  async onOpenPublishDialog(announcement: IAnnouncement): Promise<void> {
    const tabIndex = parseInt(this.activeTab(), 10);

    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/check-circle-broken-lg.svg',
      title: 'Announcement Posted',
      description: 'The announcement has been posted, and will be available to its recipients shortly.',
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
        user_types: [1, 2],
        is_draft: false
      };
      this.announcementService.editAnnouncement(announcement.id, payload).subscribe((response) => {
        if (response.rc === 0) {
          this.loadTabData(tabIndex);
        }
      });
    }
  }

  onTabChange(tabIndex: number | string): void {
    this.activeTab.set(tabIndex.toString());
    this.loadTabData(tabIndex);
  }
}
