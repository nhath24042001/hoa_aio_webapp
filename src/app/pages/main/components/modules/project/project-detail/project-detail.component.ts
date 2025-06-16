import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ISelect } from '~/@types';
import { Project } from '~/@types/project';
import { BaseComponent } from '~/components/common/base/base.component';
import { CustomSelect } from '~/components/shared/custom-select/custom-select.component';
import { PROJECT_CUSTOM_STATUS, PROJECT_PRIORITY, PROJECT_STATUS, PROJECT_TYPES } from '~/constants/select';
import { ButtonDirective } from '~/directives/button.directive';
import { ProjectService } from '~/pages/main/pages/project/project.service';
import { ThemeService } from '~/services/theme.service';
import { ToastService } from '~/services/toast.service';
import { formattedDate } from '~/utils/date-utils';
import { getClass } from '~/utils/string-utils';

@Component({
  selector: 'app-project-detail',
  imports: [DividerModule, CustomSelect, CommonModule, ButtonDirective],
  templateUrl: './project-detail.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class ProjectDetail extends BaseComponent {
  data: Project;
  type = signal<string>('');
  customStatus = PROJECT_CUSTOM_STATUS;
  typeOptions = PROJECT_TYPES;
  priorityOptions = PROJECT_PRIORITY;
  statusOptions = PROJECT_STATUS;
  statusFormControl = signal<ISelect>({
    name: '',
    code: '',
    icon: ''
  });

  icon = computed(() => {
    const basePath = `assets/images/${this.currentMode}`;
    return this.type() === 'create' ? `${basePath}/file-plus-03.svg` : `${basePath}/clipboard-check.svg`;
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
    public projectService: ProjectService,
    public toastService: ToastService,
    public ref: DynamicDialogRef
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');
    this.data = config.data.project;
    this.extraData.custom_status = this.statusOptions.find((project) => project.code === this.data.status)?.name || '';
  }

  formattedDate(date: string): string {
    return formattedDate(date);
  }

  getClassStyle(className: string | undefined, currentMode: string): string {
    return getClass(className?.toLocaleLowerCase(), currentMode);
  }

  closeDialog() {
    this.ref?.close();
  }
}
