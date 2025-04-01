import { Component, Input } from '@angular/core'
import { TextareaModule } from 'primeng/textarea'

@Component({
  selector: 'app-dialog-textarea',
  imports: [TextareaModule],
  templateUrl: './dialog-textarea.component.html',
  styleUrl: './dialog-textarea.component.scss'
})
export class DialogTextarea {
  @Input() title: string = ''
  @Input() value: string = ''
  @Input() placeholder: string = 'Enter description'
  @Input() rows: number = 3
  @Input() disabled: boolean = false
}
