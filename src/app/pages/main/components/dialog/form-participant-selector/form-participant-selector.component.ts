import { Component, computed, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-form-participant',
  imports: [FormsModule, ChipModule],
  templateUrl: './form-participant-selector.component.html',
  styleUrl: './form-participant-selector.component.scss'
})
export class FormParticipant {
  readonly participants = input<string[]>([]);
  readonly dialogType = input('');
  readonly currentMode = input('');

  isCreateMode = computed(() => this.dialogType() === 'create');

  addParticipant = output<Event>();
  removeParticipant = output<number>();

  inputValue: string = '';

  addTag(event: Event) {
    this.addParticipant.emit(event);
    this.inputValue = '';
  }

  removeTag(index: number) {
    this.removeParticipant.emit(index);
  }
}
