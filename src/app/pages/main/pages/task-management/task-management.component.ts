/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';

import { TASK_STATUS } from '~/constants';
import { taskTabHeader } from '~/constants/tab';
import { TASK_ACTIONS, TASK_HEADER, TASK_LIST } from '~/data/task';
import { ButtonDirective } from '~/directives/button.directive';
import { TaskDialog } from '~/pages/main/components/modules/task-management/task-dialog/task-dialog.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

@Component({
  selector: 'app-task-management',
  imports: [
    TabsModule,
    MultiSelectModule,
    FormsModule,
    DatePickerModule,
    EmptyContentComponent,
    ButtonDirective,
    MainHeader,
    Table
  ],
  templateUrl: './task-management.component.html',
  styleUrl: './task-management.component.scss'
})
export class TaskManagementComponent {
  ref: DynamicDialogRef | undefined;
  activeTab = signal('0');
  isActive: boolean = true;
  tasks = TASK_LIST;
  tabs = taskTabHeader;

  headers = TASK_HEADER;

  actions = TASK_ACTIONS;

  task_status = TASK_STATUS;
  selectedStatus: string = '';
  startDate = '';
  endDate = '';

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  onSearch() {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }

  onOpenCreateTask(): void {
    this.ref = this.dialogService.open(TaskDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    this.ref.onClose.subscribe(() => {});
  }

  onOpenTaskDetail(): void {
    this.ref = this.dialogService.open(TaskDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
        data: {
          title: 'Sign contract with plumbing vendor',
          created_date: '2/2/2021',
          update_date: '2/2/2022',
          status: 'new',
          formData: {
            type: 'Maintenance',
            priority: 'critical',
            eta: '2023-08-01',
            assigned_to: [
              {
                id: 1,
                name: 'John Doe',
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png'
              },
              {
                id: 2,
                name: 'Jane Smith',
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png'
              },
              {
                id: 3,
                name: 'Jane Smith',
                image: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png'
              }
            ],
            project: 'Palm Springs Vendor List',
            resident_name: '',
            property_address: '42 Main Drive, Palm Springs',
            description:
              'Negotiate terms and finalize the service agreement with the selected plumbing vendor for the office renovation project. Ensure all requirements are clearly outlined to avoid any service disruptions.',
            comments: [
              {
                avatar: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png',
                name: 'Parker Williams',
                content: 'The quest has begun'
              }
            ],
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
  }

  handleTableAction(event: { actionKey: string; rowData: any }) {
    // TODO: Fix type any
    switch (event.actionKey) {
      case 'edit':
        this.onOpenTaskDetail();
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
      default:
        break;
    }
  }

  async onOpenDeleteDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete task',
      description:
        'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete task'
    });

    if (confirmed) {
    }
  }
}
