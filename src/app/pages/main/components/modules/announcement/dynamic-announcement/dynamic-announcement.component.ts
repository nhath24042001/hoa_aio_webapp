import { AfterViewInit, Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import dayjs from 'dayjs';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { TextareaModule } from 'primeng/textarea';

import { ISelect } from '~/@types';
import { IAnnouncement, IAnnouncementPayload } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { AutoFocusDirective } from '~/directives/auto-focus.directive';
import { ButtonDirective } from '~/directives/button.directive';
import { ClickOutsideDirective } from '~/directives/click-outside.directive';
import { AnnouncementService } from '~/pages/main/pages/announcements/announcement.service';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'dynamic-announcement',
  imports: [
    DividerModule,
    MultiSelectModule,
    DatePickerModule,
    TextareaModule,
    InputTextModule,
    ButtonDirective,
    ReactiveFormsModule,
    ClickOutsideDirective,
    AutoFocusDirective
  ],
  templateUrl: './dynamic-announcement.component.html',
  styleUrl: './dynamic-announcement.component.scss'
})
export class DynamicAnnouncement extends BaseComponent implements AfterViewInit {
  type = signal<string>('');
  data = {} as IAnnouncement;
  isSubmitted = false;
  isEditingTitle = false;
  formGroup!: FormGroup;

  userTypes: ISelect[] = [
    { name: 'Residents', code: '3' },
    { name: 'Manager', code: '5' },
    { name: 'Board members', code: '4' },
    { name: 'Vendors', code: '2' }
  ];

  title = computed(() => {
    return this.type() === 'create' ? 'Create New Project' : 'Project Details';
  });

  isEditMode = computed(() => {
    return this.type() === 'create' || this.type() === 'edit';
  });

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public fb: FormBuilder,
    themeService: ThemeService,
    private announcementService: AnnouncementService
  ) {
    super(themeService);
    this.type.set(config.data.type || 'create');
    this.generateFormGroup();
  }

  ngAfterViewInit(): void {
    if (this.type() !== 'create') {
      this.data = this.config.data.data;
      this.formGroup.patchValue({
        title: this.data.title,
        description: this.data.description,
        link: this.data.link,
        expiration_date: dayjs(this.data.expiration_date).toDate()
        // user_types: this.data.user_types.map((type) => type.toString())
      });
    }
  }

  public generateFormGroup() {
    this.formGroup = this.fb.group({
      title: ['Title', Validators.required],
      description: [null, Validators.required],
      link: [null, Validators.required],
      expiration_date: [null, Validators.required],
      user_types: [[], Validators.required]
    });
  }

  onSubmit(isDraft: boolean = false) {
    this.isSubmitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const rawData: IAnnouncementPayload = this.formGroup.getRawValue();
    const prepared = this.prepareFormData(isDraft, rawData);

    this.announcementService.addAnnouncement(prepared).subscribe((response) => {
      if (response.rc === 0) {
        this.ref.close();
      }
    });
  }

  public prepareFormData(isDraft: boolean, rawData: IAnnouncementPayload): IAnnouncementPayload {
    return {
      ...rawData,
      user_types: rawData.user_types.map(Number),
      expiration_date: dayjs(rawData.expiration_date).format('YYYY-MM-DD HH:mm:ss'),
      is_draft: isDraft,
      announcement_date: dayjs(Date()).format('YYYY-MM-DD HH:mm:ss')
    };
  }

  closeDialog() {
    this.ref.close();
  }
}
