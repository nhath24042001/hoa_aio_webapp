import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ITask } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { CustomSelect } from '~/components/shared/custom-select/custom-select.component';
import { TASK_STATUS } from '~/constants';
import { CUSTOM_SELECT, PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';
import { formattedDate } from '~/utils/date-utils';

@Component({
  selector: 'app-task-detail-dialog',
  imports: [DatePipe, DividerModule, ButtonDirective, CustomSelect],
  templateUrl: './task-detail-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class TaskDetailDialog extends BaseComponent {
  data: ITask;
  type = signal<string>('');
  typeOptions = TYPE_OPTION;
  priorityOptions = PRIORITY_OPTION;
  customStatus = CUSTOM_SELECT;
  task_status = TASK_STATUS;

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
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');
    this.data = config.data.task;

    this.extraData.custom_status =
      this.task_status.find((task) => task.code === this.data.status)?.name || '';
  }

  formattedDate(date: string): string {
    return formattedDate(date);
  }

  closeDialog() {
    this.ref.close();
  }
}
