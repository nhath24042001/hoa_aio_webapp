import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dialog-header',
  imports: [DatePipe],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss'
})
export class DialogHeader {
  @Input() dialogType: string = '';
  @Input() eventData: any;
  @Input() currentMode: string = '';
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() ACTION_DIALOG: any;
  @Input() isEditMode: boolean = false;
  @Output() closeDialog = new EventEmitter<void>();

  constructor() {}

  closeDialogEmitter() {
    this.closeDialog.emit();
  }
}
