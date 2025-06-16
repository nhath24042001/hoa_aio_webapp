/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input, input, OnInit, output, signal } from '@angular/core';
import { FormControl, FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';

import { ICustomSelect } from '~/@types';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-custom-select',
  imports: [SelectModule, FormsModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelect,
      multi: true
    }
  ]
})
export class CustomSelect extends BaseComponent implements OnInit {
  @Input({ required: true }) options: ICustomSelect[] | undefined = [];
  @Input() initStatus: string | undefined = '';
  @Input() formControl!: FormControl | any;
  statusChanged = output<string>();

  dialogType = input('');
  field = input('');

  classField = signal('');

  onStatusChange(event: any) {
    this.classField.update(() => `--${event.value.code}`);
    this.statusChanged.emit(event.value.code);
  }

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    const initialOption = this.options?.find(
      (option) => option.code === this.initStatus?.toLocaleLowerCase()
    );

    this.formControl = initialOption;
    this.classField.update(() => `--${initialOption?.code}`);
  }
}
