import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { IProjectPayload } from '~/@types/project';
import { BaseComponent } from '~/components/common/base/base.component';
import { PROJECT_CUSTOM_STATUS, PROJECT_PRIORITY, PROJECT_STATUS, PROJECT_TYPES } from '~/constants/select';
import { AutoFocusDirective } from '~/directives/auto-focus.directive';
import { ButtonDirective } from '~/directives/button.directive';
import { ClickOutsideDirective } from '~/directives/click-outside.directive';
import { ProjectService } from '~/pages/main/pages/project/project.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-project-dialog',
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
  templateUrl: './project-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class ProjectDialog extends BaseComponent {
  type = signal<string>('');
  isSubmitted = false;
  isEditingTitle = false;
  formGroup!: FormGroup;
  typeOptions = PROJECT_TYPES;
  priorityOptions = PROJECT_PRIORITY;
  statusOptions = PROJECT_STATUS;
  title = computed(() => {
    return this.type() === 'create' ? 'Create New Project' : 'Project Details';
  });

  icon = computed(() => {
    const basePath = `assets/images/${this.currentMode}`;
    return this.type() === 'create' ? `${basePath}/file-plus-03.svg` : `${basePath}/clipboard-check.svg`;
  });

  isEditMode = computed(() => {
    return this.type() === 'create' || this.type() === 'edit';
  });

  project_custom_select = PROJECT_CUSTOM_STATUS;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public fb: FormBuilder,
    public projectService: ProjectService,
    themeService: ThemeService
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');

    this.generateFormGroup();
  }

  public generateFormGroup() {
    this.formGroup = this.fb.group({
      name: ['Project Title', Validators.required],
      description: ['', Validators.required],
      type: ['', [Validators.required]],
      priority: [''],
      status: [''],
      bid_id: [''],
      estimated_completion_date: [''],
      estimated_cost: [''],
      project_manager: [''],
      vendors: [[]],
      action_items: [[]]
    });
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const rawData = this.formGroup.getRawValue();
    const prepared = this.prepareFormData(rawData);

    this.projectService.addProject(prepared).subscribe((response) => {
      if (response.rc === 0) {
        this.ref.close();
      }
    });
  }

  prepareFormData(rawData: IProjectPayload): IProjectPayload {
    return {
      ...rawData,
      estimated_completion_date: rawData.estimated_completion_date
        ? dayjs(rawData.estimated_completion_date).format('YYYY-MM-DD')
        : '',
      estimated_cost: rawData.estimated_cost != null ? Number(rawData.estimated_cost) : 0
    };
  }

  closeDialog() {
    this.ref.close();
  }
}
