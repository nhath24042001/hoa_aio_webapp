/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'dynamic-announcement',
  imports: [
    FormsModule,
    DividerModule,
    MultiSelectModule,
    DatePickerModule,
    TextareaModule,
    InputTextModule,
    ButtonDirective
  ],
  templateUrl: './dynamic-announcement.component.html',
  styleUrl: './dynamic-announcement.component.scss'
})
export class DynamicAnnouncement extends BaseComponent {
  // TODO: Fix type any
  data: any;
  userTypes: any[] = [
    { name: 'Residents', code: 're' },
    { name: 'Manager', code: 'ma' },
    { name: 'Board members', code: 'board' },
    { name: 'Vendors', code: 'ven' }
  ];
  announcementForm: FormGroup;
  selectedCities!: any[];
  expiredDate: string = '';
  content = '';
  link = '';

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    themeService: ThemeService,
    private FormBuilder: FormBuilder
  ) {
    super(themeService);
    this.data = config.data;
    this.announcementForm = this.FormBuilder.group({
      title: ['title'],
      description: [''],
      link: [''],
      expiration_date: [''],
      announcement_date: ['']
    });
  }

  closeDialog() {
    this.ref.close();
  }
}
