import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-input-file',
  imports: [],
  templateUrl: './input-file.component.html',
  styleUrl: './input-file.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputFile,
      multi: true
    }
  ]
})
export class InputFile extends BaseComponent {
  @Input() disabled = false;
  @Input() placeholder = '';
  @Output() fileSelected = new EventEmitter<File | null>();

  fileName: string | null = null;

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.fileName = file.name;
      this.fileSelected.emit(file);
    }
  }

  onFileRemove() {
    this.fileName = null;
    this.fileSelected.emit(null);
  }
}
