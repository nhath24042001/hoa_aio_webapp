import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { CreateTask } from '~/pages/main/components/modules/task-management/create-task/create-task.component';
import { TaskDetail } from '~/pages/main/components/modules/task-management/task-detail/task-detail.component';

import { IHeaderTable, ITaskManagement } from '~/@types/task';
import { Priority } from '~/enums';
import { TASK_STATUS } from '~/constants';

@Component({
  selector: 'app-task-management',
  imports: [
    TabsModule,
    MultiSelectModule,
    FormsModule,
    DatePickerModule,
    EmptyContentComponent,
    ButtonPrimary,
    MainHeader,
    PopoverModule,
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

  task_status = TASK_STATUS;
  selectedStatus: string = '';
  startDate = '';
  endDate = '';

  constructor(public dialogService: DialogService) {}

  onSearch() {}

  onOpenCreateTask(): void {
    this.ref = this.dialogService.open(CreateTask, {
      modal: true,
      width: '1000px'
    });

    this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenTaskDetail(): void {
    this.ref = this.dialogService.open(TaskDetail, {
      modal: true,
      width: '1000px'
    });
  }
}
