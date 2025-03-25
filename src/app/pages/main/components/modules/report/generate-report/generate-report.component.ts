import { Component } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { report_types, sub_report_types } from '~/constants/select';

@Component({
  selector: 'app-generate-report',
  imports: [DividerModule, SelectModule, DatePickerModule, ButtonPrimary],
  templateUrl: './generate-report.component.html',
  styleUrl: './generate-report.component.scss'
})
export class GenerateReport extends BaseComponent {
  report_type = report_types;
  sub_report_type = sub_report_types;
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
