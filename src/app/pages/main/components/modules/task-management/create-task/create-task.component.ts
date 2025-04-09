import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { LIST_TASK_STATUS, PRIORITY_LIST, PROJECT_TYPES } from '~/constants';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'create-task',
  imports: [
    DividerModule,
    SelectModule,
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    TextareaModule,
    ButtonDirective
  ],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTask extends BaseComponent {
  project_types = PROJECT_TYPES;
  priority_list = PRIORITY_LIST;
  status_list = LIST_TASK_STATUS;

  left_box = [
    {
      icon: 'task-icon',
      label: 'Type',
      type: 'select',
      list: this.project_types,
      placeholder: 'Select'
    },
    {
      icon: 'flag',
      label: 'Priority',
      type: 'select',
      list: this.priority_list,
      placeholder: 'Select'
    },
    {
      icon: 'user-square',
      label: 'Resident name',
      type: 'input',
      list: [],
      placeholder: 'If opened on behalf of resident'
    },
    {
      icon: 'home',
      label: 'Property Address',
      type: 'input',
      list: [],
      placeholder: 'Enter address'
    }
  ];

  right_box = [
    {
      icon: 'user-up',
      label: 'Assigned to',
      type: 'input',
      list: [],
      placeholder: 'Enter names, separated by comma'
    },
    {
      icon: 'hourglass',
      label: 'ETA',
      type: 'date',
      list: [],
      placeholder: 'Select time'
    },
    {
      icon: 'perspective',
      label: 'Project',
      type: 'select',
      list: this.project_types,
      placeholder: 'Select'
    }
  ];

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef
  ) {
    super(themeService);
  }
  closeDialog() {
    this.ref.close();
  }
}
