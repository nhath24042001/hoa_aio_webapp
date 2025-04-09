/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PopoverDirective, PopoverModule } from 'ngx-bootstrap/popover';
import { CheckboxModule } from 'primeng/checkbox';

import { ButtonDirective } from '~/directives/button.directive';

@Component({
  selector: 'main-header',
  imports: [ButtonDirective, PopoverModule, CheckboxModule],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss'
})
export class MainHeader {
  // TODO: Fix type any
  @ViewChild('popover', { static: false }) popover?: PopoverDirective;
  @Input() labelButton: string = '';
  @Input() isShowFilter: boolean = true;
  @Output() searchChanged = new EventEmitter<string>();
  @Output() addSection = new EventEmitter<void>();

  onSearchChange(event: any) {
    this.searchChanged.emit(event.target.value);
  }

  onAddSection() {
    this.addSection.emit();
  }
}
