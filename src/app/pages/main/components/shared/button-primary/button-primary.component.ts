import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'button-primary',
  imports: [CommonModule],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimary {
  @Input() label: string = ''
  @Input() iconPos: string = 'left'
  @Input() icon: string = ''
  @Input() loading: boolean = false
  @Input() isPrimaryActive: boolean = false
  @Output() onClick = new EventEmitter<void>()

  onHandleClick() {
    this.onClick.emit()
  }
}
