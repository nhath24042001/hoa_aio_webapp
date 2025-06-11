import { DatePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

import { ITask } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-task-detail-dialog',
  imports: [DatePipe, DividerModule, ButtonDirective],
  templateUrl: './task-detail-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class TaskDetailDialog extends BaseComponent {
  data: ITask;
  type = signal<string>('');
  typeOptions = TYPE_OPTION;
  priorityOptions = PRIORITY_OPTION;

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

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');
    this.data = config.data.task;
  }

  closeDialog() {
    this.ref.close();
  }
}
