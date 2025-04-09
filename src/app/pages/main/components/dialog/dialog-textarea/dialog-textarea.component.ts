import { Component, input, signal } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-dialog-textarea',
  imports: [TextareaModule],
  templateUrl: './dialog-textarea.component.html',
  styleUrl: './dialog-textarea.component.scss'
})
export class DialogTextarea {
  readonly title = input.required<string>();
  readonly placeholder = input.required<string>();
  readonly value = input<string>('');
  readonly rows = input<number>(3);
  readonly disabled = input<boolean>(false);
  type = signal<string>('');
}
