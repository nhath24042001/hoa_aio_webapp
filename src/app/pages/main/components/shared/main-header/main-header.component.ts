import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { PopoverModule } from 'ngx-bootstrap/popover'
import { PopoverDirective } from 'ngx-bootstrap/popover'
import { CheckboxModule } from 'primeng/checkbox'

import { ButtonPrimary } from '../button-primary/button-primary.component'

@Component({
  selector: 'main-header',
  imports: [ButtonPrimary, PopoverModule, CheckboxModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeader {
  @ViewChild('popover', { static: false }) popover?: PopoverDirective
  @Input() labelButton: string = ''
  @Input() isShowFilter: boolean = true
  @Output() searchChanged = new EventEmitter<string>()
  @Output() addSection = new EventEmitter<void>()

  onSearchChange(event: any) {
    this.searchChanged.emit(event.target.value)
  }

  onAddSection() {
    this.addSection.emit()
  }
}
