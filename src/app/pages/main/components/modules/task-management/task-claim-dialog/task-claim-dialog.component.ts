import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { IClaimPayload } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { PRIORITY_OPTION, TYPE_OPTION } from '~/constants/select';
import { AutoFocusDirective } from '~/directives/auto-focus.directive';
import { ButtonDirective } from '~/directives/button.directive';
import { ClickOutsideDirective } from '~/directives/click-outside.directive';
import { TaskService } from '~/pages/main/pages/task-management/task.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-task-claim-dialog',
  imports: [
    ButtonDirective,
    ClickOutsideDirective,
    AutoFocusDirective,
    DividerModule,
    SelectModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    ReactiveFormsModule
  ],
  templateUrl: './task-claim-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class TaskClaimDialog extends BaseComponent {
  type = signal<string>('');
  isSubmitted = false;
  isEditingTitle = false;
  formGroup!: FormGroup;

  typeOptions = TYPE_OPTION;
  priorityOptions = PRIORITY_OPTION;

  title = computed(() => {
    return this.type() === 'create' ? 'Create New Task' : 'Task Details';
  });

  icon = computed(() => {
    const basePath = `assets/images/${this.currentMode}`;
    return this.type() === 'create'
      ? `${basePath}/file-plus-03.svg`
      : `${basePath}/clipboard-check.svg`;
  });

  isEditMode = computed(() => {
    return this.type() === 'create' || this.type() === 'edit';
  });

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public fb: FormBuilder,
    public taskService: TaskService,
    themeService: ThemeService
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');

    this.generateFormGroup();
  }

  public generateFormGroup() {
    this.formGroup = this.fb.group({
      type: ['', Validators.required],
      description: ['', Validators.required],
      priority: [''],
      resident_id: ['', Validators.required],
      property_address: ['', Validators.required],
      eta: [''],
      media: [''],
      video: ['']
    });
  }

  prepareFormData(rawData: IClaimPayload): IClaimPayload {
    return {
      ...rawData,
      eta: rawData.eta ? dayjs(rawData.eta).format('YYYY-MM-DD') : ''
    };
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const rawData = this.formGroup.getRawValue();
    const prepared = this.prepareFormData(rawData);

    this.taskService.addResidentClaim(prepared).subscribe({});
  }

  closeDialog() {
    this.ref.close();
  }
}
