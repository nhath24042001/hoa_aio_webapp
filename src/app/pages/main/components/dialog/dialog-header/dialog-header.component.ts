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
  @Input() eventData: any;
  @Input() currentMode: string = '';
  @Input() title: string = '';
  @Input() isCreateMode: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  constructor() {}

  get icon() {
    const basePath = `assets/images/${this.currentMode}/`;
    return this.isCreateMode
      ? `${basePath}${this.iconCreate}.svg`
      : `${basePath}${this.iconEdit}.svg`;
  }

  closeDialogEmitter() {
    this.closeDialog.emit();
  }
}
