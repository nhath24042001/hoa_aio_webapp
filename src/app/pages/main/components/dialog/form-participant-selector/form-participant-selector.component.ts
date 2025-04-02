/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-form-participant-selector',
  imports: [FormsModule, ChipModule],
  templateUrl: './form-participant-selector.component.html',
  styleUrl: './form-participant-selector.component.scss'
})
export class FormParticipantSelector {
  @Input() participants = [];
  @Input() isEditing = false;
  @Input() currentMode = '';
  @Output() addParticipant = new EventEmitter<void>();
  @Output() removeParticipant = new EventEmitter<number>();

  inputValue: string = '';

  // TODO: Fix type any (Eslint)
  addTag(event: any) {
    this.addParticipant.emit(event);
  }

  removeTag(index: number) {
    this.removeParticipant.emit(index);
  }
}
