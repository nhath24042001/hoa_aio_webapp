import { Component, Input } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { InputTextModule } from 'primeng/inputtext';
import { DatePicker } from 'primeng/datepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form-field',
  imports: [SelectModule, InputTextModule, DatePicker, DatePipe],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss'
})
export class FormField {
  @Input() icon = '';
  @Input() label = '';
  @Input() type = '';
  @Input() field = '';
  @Input() width: string | undefined = '';
  @Input() placeholder: string | undefined = '';
  @Input() options: any[] | undefined = [];
  @Input() value = '';
  @Input() currentMode = '';
  @Input() dialogType = '';
  @Input() ACTION_DIALOG : any;

  get isCreateMode() {
    return this.dialogType === this.ACTION_DIALOG.CREATE;
  }
}
