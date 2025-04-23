/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Component, signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { PROJECT_TABS } from '~/constants/tab';
import { PROJECT_ACTIONS, PROJECT_DATA, PROJECT_HEADER } from '~/data/project';
import { ButtonDirective } from '~/directives/button.directive';
import { ProjectDialog } from '~/pages/main/components/modules/project/project-dialog/project-dialog.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

@Component({
  selector: 'app-project',
  imports: [TabsModule, MainHeader, EmptyContentComponent, ButtonDirective, Table],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  activeTab = signal('0');
  projects = PROJECT_DATA;
  headers = PROJECT_HEADER;
  tabs = PROJECT_TABS;

  actions = PROJECT_ACTIONS;

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  onSearch() {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }

  onOpenCreateProject(): void {
    this.ref = this.dialogService.open(ProjectDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });
    this.ref.onClose.subscribe(() => {});
  }

  onOpenProjectDetail(): void {
    this.ref = this.dialogService.open(ProjectDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
        data: {
          title: 'Fix main entrance watering system',
          created_date: '2/2/2021',
          update_date: '2/2/2022',
          status: 'new',
          formData: {
            project_type: 'maintenance',
            priority: 'urgent',
            eta_time: '2023-10-01',
            vendor_name: 'AB Services Co., HardHatters, Monkey Biz & Co.',
            action_items:
              'Sign contract with plumbing vendor, Sign contract for watering system project',
            project_manager: [
              {
                id: '1',
                name: 'John Doe',
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
              }
            ],
            cost: '$2,500-$3,000',
            resident_name: '',
            bid: 'Palm Springs Main Entrance Bid',
            detail:
              'Negotiate terms and finalize the service agreement with the selected plumbing vendor for the office renovation project. Ensure all requirements are clearly outlined to avoid any service disruptions.',
            attachments: [
              {
                file_name: 'Video Capture 1.MP4',
                file_type: 'video/mp4',
                file_size: '2.5 MB'
              },
              {
                file_name: 'Video Capture 1.MP4',
                file_type: 'video/mp4',
                file_size: '2.5 MB'
              }
            ]
          }
        }
      }
    });
    this.ref.onClose.subscribe(() => {});
  }

  handleTableAction(event: { actionKey: string; rowData: any }) {
    // TODO: Fix type any
    switch (event.actionKey) {
      case 'edit':
        this.onOpenProjectDetail();
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
      default:
        console.warn('Unknown action:', event.actionKey);
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
}
