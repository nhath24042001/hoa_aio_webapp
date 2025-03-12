import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-header',
  imports: [DatePipe],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss'
})
export class DialogHeader {
  @Input() iconCreate: string = '';
  @Input() iconEdit: string = '';
  @Input() formHeader: any;
  @Input() currentMode: string = '';
  @Input() title: string = '';
  @Input() dialogType: string = '';
  @Output() closeDialog = new EventEmitter<void>();
  @Output() changeAction = new EventEmitter<void>();

  constructor() {}

  get icon() {
    const basePath = `assets/images/${this.currentMode}/`;
    return this.dialogType === 'create'
      ? `${basePath}${this.iconCreate}.svg`
      : `${basePath}${this.iconEdit}.svg`;
  }

  closeDialogEmitter() {
    this.closeDialog.emit();
  }

  onChangeAction(): void {
    this.changeAction.emit();
  }
}
