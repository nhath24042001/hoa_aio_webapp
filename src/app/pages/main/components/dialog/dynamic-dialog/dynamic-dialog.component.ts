import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Divider } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { DynamicField } from '~/@types';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

import { DialogActions } from '../dialog-actions/dialog-actions.component';
import { DialogHeader } from '../dialog-header/dialog-header.component';
import { DialogTextarea } from '../dialog-textarea/dialog-textarea.component';
import { FormField } from '../form-field/form-field.component';

@Component({
  selector: 'app-dynamic-dialog',
  imports: [Divider, DialogHeader, FormField, DialogTextarea, DialogActions],
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialog extends BaseComponent implements OnInit {
  @Input() dialogTitle = '';
  @Input() iconCreate = '';
  @Input() iconEdit = '';
  @Input() dialogType = '';
  @Input() title = '';
  @Input() formFields: DynamicField[] = [];
  @Input() list_textarea: any[] = [];
  @Input() buttonText = '';
  @Input() buttonIcon = '';
  @Input() formID = '';
  @Input() moduleName = '';
  @Input() formData: any = {};

  formGroup!: FormGroup;

  get isCreateMode() {
    return this.dialogType === 'create' || this.dialogType === 'edit';
  }

  get formTitle() {
    return this.dialogType === 'create' ? this.title : this.formData.data.title;
  }

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    private fb: FormBuilder
  ) {
    super(themeService);
    this.initDynamicForm();
  }

  initDynamicForm() {
    const formControls: { [key: string]: any } = {};
    this.formFields.forEach((field) => {
      formControls[field.field] = field.type === 'file' ? [null] : ['', Validators.required];
    });

    this.formGroup = this.fb.group(formControls);
  }

  closeDialog() {
    this.ref.close();
  }

  changeAction() {
    this.dialogType = this.dialogType === 'detail' ? 'edit' : 'detail';
  }
}
