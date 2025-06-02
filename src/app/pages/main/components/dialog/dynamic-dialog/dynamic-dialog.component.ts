import { CommonModule } from '@angular/common';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Divider } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

import { DynamicField, ITextarea } from '~/@types';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

import { DialogActions } from '../dialog-actions/dialog-actions.component';
import { DialogHeader } from '../dialog-header/dialog-header.component';
import { DialogTextarea } from '../dialog-textarea/dialog-textarea.component';
import { FormField } from '../form-field/form-field.component';

@Component({
  selector: 'app-dynamic-dialog',
  imports: [
    CommonModule,
    Divider,
    DialogHeader,
    FormField,
    DialogTextarea,
    DialogActions,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './dynamic-dialog.component.html',
  styleUrl: './dynamic-dialog.component.scss'
})
export class DynamicDialog extends BaseComponent implements OnInit {
  dialogTitle = input('');
  iconCreate = input('');
  iconEdit = input('');
  title = input('');
  formFields = input<DynamicField[]>([]);
  list_textarea = input<ITextarea[]>([]);
  buttonText = input('');
  buttonIcon = input('');
  formID = input('');
  moduleName = input('');
  formData = input<any>({});
  dialogType = input<string>('create');

  isCreateMode = computed(() => {
    return this.dialogType() === 'create' || this.dialogType() === 'edit';
  });

  formTitle = computed(() => {
    return this.dialogType() === 'create' ? this.title() : this.formData().data.title;
  });

  formGroup!: FormGroup;
  is_submitted = false;

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    private fb: FormBuilder
  ) {
    super(themeService);
  }

  closeDialog() {
    this.ref.close();
  }

  changeAction() {
    // this.dialogType = this.dialogType === 'detail' ? 'edit' : 'detail';
  }
}
