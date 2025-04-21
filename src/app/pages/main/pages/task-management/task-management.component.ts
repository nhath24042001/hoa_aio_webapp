/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';

import { IHeaderTable, ITaskManagement } from '~/@types/task';
import { TASK_STATUS } from '~/constants';
import { ButtonDirective } from '~/directives/button.directive';
import { Priority } from '~/enums';
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
  isActive: boolean = true;
  tasks: ITaskManagement = {
    all_tasks: [
      {
        task_id: '12321',
        type_icon: 'clipboard-sm',
        task_name: 'Sign contract with plumbing vendor',
        task_type: 'Maintenance',
        priority: Priority.URGENT,
        created: '2023-08-01',
        status: 'new',
        assigned_to: [
          {
            id: 1,
            name: 'John Doe',
            avatar:
              'https://images.pexels.com/photos/8721322/pexels-photo-8721322.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            id: 2,
            name: 'Jane Smith',
            avatar:
              'https://images.pexels.com/photos/7849511/pexels-photo-7849511.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ]
      },
      {
        task_id: '12322',
        type_icon: 'claim',
        task_name: 'Trim entrance area trees',
        task_type: 'Landscape',
        priority: Priority.IMPORTANT,
        created: '2023-08-01',
        status: 'accepted',
        assigned_to: [
          {
            id: 1,
            name: 'John Doe',
            avatar:
              'https://images.pexels.com/photos/7561957/pexels-photo-7561957.jpeg?auto=compress&cs=tinysrgb&w=600'
          },
          {
            id: 2,
            name: 'Jane Smith',
            avatar:
              'https://images.pexels.com/photos/7562349/pexels-photo-7562349.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        ]
      }
    ],
    claims: [],
    action_items: []
  };

  headers: IHeaderTable[] = [
    {
      field: 'type_icon',
      name: '',
      width: '20px'
    },
    {
      field: 'task_name',
      name: 'Task Name'
    },
    {
      field: 'task_type',
      name: 'Type'
    },
    {
      field: 'priority',
      name: 'Priority'
    },
    {
      field: 'created',
      name: 'Created'
    },
    {
      field: 'assigned_to',
      name: 'Assigned To'
    },
    {
      field: 'status',
      name: 'Status'
    },
    {
      field: 'action',
      name: '',
      width: '20px'
    }
  ];

  actions = [
    {
      label: 'Edit',
      icon: 'edit',
      actionKey: 'edit',
      className: '--pointer mb-2'
    },
    {
      label: 'Delete',
      icon: 'trash',
      actionKey: 'delete',
      className: '--delete-action --pointer'
    }
  ];

  task_status = TASK_STATUS;
  selectedStatus: string = '';
  startDate = '';
  endDate = '';

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  onSearch() {}

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
            property_address: '42 Main Drive, Palm Springs'
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
      icon: 'assets/images/common/calendar-x-lg.svg',
      title: 'Delete task',
      description:
        'Are you sure? Proceeding will delete the event from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete task'
    });

    if (confirmed) {
    }
  }
}
