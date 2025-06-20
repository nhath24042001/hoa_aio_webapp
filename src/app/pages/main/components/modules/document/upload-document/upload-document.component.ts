import { Component } from '@angular/core';
import { DatePicker } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';

import { BaseComponent } from '~/components/common/base/base.component';
import { InputFile } from '~/components/shared/input-file/input-file.component';
import { ButtonDirective } from '~/directives/button.directive';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-upload-document',
  imports: [DividerModule, SelectModule, InputFile, DatePicker, TextareaModule, ButtonDirective],
  templateUrl: './upload-document.component.html',
  styleUrl: './upload-document.component.scss'
})
export class UploadDocument extends BaseComponent {
  document_types = [
    { name: 'HOA Meeting minutes', code: '' },
    { name: 'Violation Notice', code: '' },
    { name: 'Property Deed', code: '' },
    { name: 'Insurance Certificate', code: '' },
    { name: 'Architectural Modification Request/Approval', code: '' },
    { name: 'Signed HOA Documents/Agreements', code: '' },
    { name: 'Other', code: '' }
  ];

  owner_list = [
    { name: 'Owner 1', code: '' },
    { name: 'Owner 2', code: '' }
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
