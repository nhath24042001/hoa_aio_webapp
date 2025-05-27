/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { PROJECT_CUSTOM_SELECT } from '~/constants/select';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-project-dialog',
  imports: [ButtonDirective, DividerModule, SelectModule, InputTextModule, DatePickerModule, TextareaModule],
  templateUrl: './project-dialog.component.html',
  styleUrl: '../../../dialog/dynamic-dialog/dynamic-dialog.component.scss'
})
export class ProjectDialog extends BaseComponent {
  type = signal<string>('');
  data: any;
  formGroup!: FormGroup;
  typeOptions = [
    {
      name: 'Renovation',
      code: 2
    },
    {
      name: 'Maintenance',
      code: 1
    },
    {
      name: 'New construction',
      code: 3
    },
    {
      name: 'Inspection',
      code: 4
    },
    {
      name: 'Other',
      code: 5
    }
  ];
  priorityOptions = [
    {
      name: 'New',
      code: 0
    },
    {
      name: 'Planning',
      code: 1
    },
    {
      name: 'In Progress',
      code: 2
    },
    {
      name: 'On Hold',
      code: 3
    },
    {
      name: 'Completed',
      code: 4
    },
    {
      name: 'Cancelled',
      code: 5
    }
  ];

  statusOptions = [
    {
      name: 'New',
      code: 0
    },
    {
      name: 'Planning',
      code: 1
    },
    {
      name: 'In Progress',
      code: 2
    },
    {
      name: 'On Hold',
      code: 3
    },
    {
      name: 'Completed',
      code: 4
    },
    {
      name: 'Cancelled',
      code: 5
    }
  ];

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

  formTitle = computed(() => {
    return this.type() === 'create' ? 'Project Title' : 'Details of Project';
  });

  list_textarea = [
    {
      title: 'Project Description',
      placeholder: 'Enter description',
      value: '',
      field: 'detail'
    }
  ];
  project_custom_select = PROJECT_CUSTOM_SELECT;

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef,
    public fb: FormBuilder,
    themeService: ThemeService
  ) {
    super(themeService);
    this.data = config.data;
    this.type.set(config.data.type || 'create');

    this.generateFormGroup();
    // this.onChangeAttribute();
  }

  public generateFormGroup() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', [Validators.required]],
      priority: [''],
      status: [''],
      bid: [''],
      estimated_completion_date: [''],
      estimated_cost: [''],
      project_manager: [''],
      vendors: [[]],
      action_items: [[]]
    });
  }

  // public onChangeAttribute() {
  //   /*
  //   This method can be used to handle changes in the attributes of the project.
  //   For example, you can update the project data or perform validation checks.
  //   */

  //   if (this.type() !== 'create') {
  //     this.list_columns = this.list_columns.filter((col) => col.field !== 'document');
  //     this.list_columns = this.list_columns.filter(
  //       (col) =>
  //         col.field !== 'status' &&
  //         col.field !== 'bid' &&
  //         col.field !== 'eta_time' &&
  //         col.field !== 'project_manager'
  //     );
  //     this.list_columns.push(
  //       {
  //         icon: 'hourglass',
  //         field: 'eta_time',
  //         label: 'ETA',
  //         type: 'date',
  //         placeholder: 'Set ETA date',
  //         position: 'left'
  //       },
  //       {
  //         icon: 'user-square',
  //         label: 'Resident name',
  //         field: 'resident_name',
  //         type: 'input',
  //         position: 'right',
  //         placeholder: 'If opened on behalf of resident'
  //       },
  //       {
  //         icon: 'finger',
  //         field: 'bid',
  //         label: 'Bid',
  //         type: 'input',
  //         placeholder: 'Select',
  //         position: 'right'
  //       }
  //     );
  //     this.list_columns.unshift(this.project_custom_select, {
  //       icon: 'perspective',
  //       field: 'project_manager',
  //       label: 'Project Manager',
  //       type: 'input',
  //       placeholder: 'Me (enter name to change)',
  //       position: 'right'
  //     });

  //     this.list_columns = this.list_columns.map((column) => {
  //       return {
  //         ...column,
  //         value: this.data.data.formData[column.field]
  //       };
  //     });

  //     this.list_textarea.push({
  //       title: 'Attachments',
  //       field: 'attachments',
  //       placeholder: 'Add attachments',
  //       value: ''
  //     });

  //     this.list_textarea = this.list_textarea.map((textarea) => {
  //       return {
  //         ...textarea,
  //         value: this.data.data.formData[textarea.field]
  //       };
  //     });
  //   }
  // }

  closeDialog() {
    this.ref.close();
  }
}
