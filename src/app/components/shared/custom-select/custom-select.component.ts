import { Component, input, Input, OnInit, signal } from '@angular/core';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

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
export class CustomSelect implements OnInit {
  @Input({ required: true }) options: any[] | undefined = [];
  @Input() formControl!: FormControl | any;
  dialogType = input('');
  field = input('');

  classField = signal('');

  onStatusChange(event: any) {
    this.classField.update(() => `--${event.value.code}`);
  }

  ngOnInit(): void {
    if (this.dialogType() !== 'create' && this.field() === 'status') {
      if (this.options && this.options.length > 0) {
        this.formControl = this.options[0];
        this.classField.update(() => `--${this.options![0].code}`);
      }
    }
  }
}
