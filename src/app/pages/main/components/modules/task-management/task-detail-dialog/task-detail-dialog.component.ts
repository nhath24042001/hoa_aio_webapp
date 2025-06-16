import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ITask } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { CustomSelect } from '~/components/shared/custom-select/custom-select.component';
import { TASK_STATUS } from '~/constants';
import { CUSTOM_SELECT, PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { ButtonDirective } from '~/directives/button.directive';
import { TaskService } from '~/pages/main/pages/task-management/task.service';
import { ThemeService } from '~/services/theme.service';
import { ToastService } from '~/services/toast.service';
import { formattedDate } from '~/utils/date-utils';

import { ConfirmDialog } from '../../../dialog/confirm-dialog/confirm-dialog.component';
import { ResolutionDialog } from '../resolution-dialog/resolution-dialog.component';

@Component({
  selector: 'app-task-detail-dialog',
  imports: [DatePipe, DividerModule, ButtonDirective, CustomSelect],
  templateUrl: './task-detail-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class TaskDetailDialog extends BaseComponent {
  ref: DynamicDialogRef | undefined;
  data: ITask;
  type = signal<string>('');
  typeOptions = TYPE_OPTION;
  priorityOptions = PRIORITY_OPTION;
  customStatus = CUSTOM_SELECT;
  task_status = TASK_STATUS;
  statusFormControl = signal<any>('');

  icon = computed(() => {
    const basePath = `assets/images/${this.currentMode}`;
    return this.type() === 'create'
      ? `${basePath}/file-plus-03.svg`
      : `${basePath}/clipboard-check.svg`;
  });

  isEditMode = computed(() => {
    return this.type() === 'create' || this.type() === 'edit';
  });

  task_type = computed(() => {
    return this.typeOptions.find((option) => option.code === this.data.type)?.name;
  });

  task_priority = computed(() => {
    return this.priorityOptions.find((option) => option.code === this.data.priority)?.name;
  });

  extraData = {
    custom_status: '',
    eta: '2025-01-01T00:00:00',
    project: 'Palm Springs Vendor List',
    property_address: '1234 Palm Springs Ave, CA 92262',
    comments: [
      {
        authorName: 'John Doe',
        authorAvatar:
          'https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww',
        content: 'This is a comment on the task.'
      }
    ],
    attachments: [
      {
        name: 'Vendor List.pdf',
        size: '1.2 MB',
        type: 'application/pdf',
        mediaType: 'image',
        url: 'https://example.com/attachments/vendor-list.pdf'
      },
      {
        name: 'Vendor List Image.png',
        size: '500 KB',
        type: 'image/png',
        mediaType: 'image',
        url: 'https://example.com/attachments/vendor-list-image.png'
      },
      {
        name: 'Vendor List.docx',
        size: '300 KB',
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        mediaType: 'video',
        url: 'https://example.com/vendor-list-document.docx'
      }
    ]
  };

  constructor(
    themeService: ThemeService,
    public config: DynamicDialogConfig,
    public dialogService: DialogService,
    public taskService: TaskService,
    public toastService: ToastService
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');
    this.data = config.data.task;

    this.extraData.custom_status =
      this.task_status.find((task) => task.code === this.data.status)?.name || '';
  }

  onStatusChanged(status: string) {
    const prevStatusCode = this.data.status;
    const prevStatus = this.task_status.find((task) => task.code === prevStatusCode);

    const revertStatus = () => {
      this.statusFormControl.set({
        name: prevStatus?.name?.toLocaleLowerCase() || '',
        code: prevStatusCode,
        icon: this.customStatus.find((task) => task.code === prevStatusCode)?.icon || ''
      });
    };

    const openResolutionDialog = (type: 'resolve' | 'reject') => {
      this.ref = this.dialogService.open(ResolutionDialog, {
        modal: true,
        width: '600px',
        data: {
          type,
          task_id: this.data.task_id
        }
      });

      this.ref.onClose.subscribe((result) => {
        if (result?.confirmed) {
          const action =
            type === 'resolve'
              ? this.taskService.resolveTask(this.data.task_id, result.data.text)
              : this.taskService.rejectTask(this.data.task_id, result.data.text);

          action.subscribe({
            next: () => {},
            error: () => revertStatus()
          });
        } else {
          revertStatus();
        }
      });
    };

    if (status === 'resolved') {
      openResolutionDialog('resolve');
    } else if (status === 'rejected') {
      openResolutionDialog('reject');
    } else if (status === 'cancel') {
      this.onCancelTask();
    } else if (status === 'accept') {
      this.taskService.acceptTask(this.data.task_id).subscribe({
        next: (response) => {
          if (response.rc === 0) {
            this.statusFormControl.set({
              name: 'Accepted',
              code: 'accepted',
              icon: 'green-check'
            });
          } else {
            revertStatus();
          }
        },
        error: () => revertStatus()
      });
    }
  }

  public onCancelTask() {
    this.ref = this.dialogService.open(ConfirmDialog, {
      modal: true,
      width: '500px',
      data: {
        type: 'delete',
        icon: 'x-circle-lg',
        title: 'Cancel Task',
        description:
          'Are you sure? Proceeding will delete the task from the system, and can not be undone.',
        confirmText: 'Cancel Task',
        cancelText: 'Not now'
      }
    });
  }

  formattedDate(date: string): string {
    return formattedDate(date);
  }

  closeDialog() {
    this.ref?.close();
  }
}
