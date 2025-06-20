import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { IAnnouncement, IAnnouncementPayload } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { SkeletonList } from '~/components/shared/skeleton-list/skeleton-list.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ACTION_DIALOG } from '~/enums';
import { ROUTE_PATH } from '~/enums/route';
import { AnnouncementService } from '~/pages/main/pages/announcements/announcement.service';
import { ThemeService } from '~/services/theme.service';
import { ToastService } from '~/services/toast.service';

import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component';
import { AnnouncementDetail } from '../../announcement/announcement-detail/announcement-detail.component';
import { AnnouncementListComponent } from '../../announcement/announcement-list/announcement-list.component';
import { DynamicAnnouncement } from '../../announcement/dynamic-announcement/dynamic-announcement.component';

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonDirective, SkeletonList, AnnouncementListComponent],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent extends BaseComponent {
  ref: DynamicDialogRef | undefined;
  ROUTE_PATH = ROUTE_PATH;
  announcements: IAnnouncement[] = [];
  loading = true;

  constructor(
    themeService: ThemeService,
    private announcementService: AnnouncementService,
    public dialogService: DialogService,
    private toastService: ToastService,
    private router: Router
  ) {
    super(themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.loadData();
  }

  public loadData() {
    this.loading = true;
    this.announcementService.getActiveAnnouncements('', []).subscribe((response) => {
      if (response.rc === 0) {
        this.announcements = response.announcements.slice(0, 5);
      }
      this.loading = false;
    });
  }

  async onImplementAction(event: { announcement: IAnnouncement; type: string }): Promise<void> {
    switch (event.type) {
      case 'detail':
        this.onOpenAnnouncementDetail(event.announcement);
        break;
      case 'edit':
        this.onCreateAnnouncement(ACTION_DIALOG.EDIT, event.announcement);
        break;
      case 'publish':
        this.onOpenPublishDialog(event.announcement);
        break;
      case 'delete':
        this.onOpenDeleteDialog(event.announcement);
        break;
    }
  }

  onCreateAnnouncement(type: string, announcement: IAnnouncement | null): void {
    this.ref = this.dialogService.open(DynamicAnnouncement, {
      modal: true,
      width: '1000px',
      data: {
        type,
        data: announcement
      }
    });

    this.ref.onClose.subscribe(() => {
      this.loadData();
    });
  }

  onOpenAnnouncementDetail(announcement: IAnnouncement): void {
    this.ref = this.dialogService.open(AnnouncementDetail, {
      modal: true,
      width: '1000px',
      data: announcement
    });
  }

  async onOpenPublishDialog(announcement: IAnnouncement): Promise<void> {
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
          this.loadData();
        }
      });
    }
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
          this.loadData();
        }
      });
    }
  }

  redirectToAnnouncement(): void {
    this.router.navigate([ROUTE_PATH.ANNOUNCEMENT]);
  }
}
