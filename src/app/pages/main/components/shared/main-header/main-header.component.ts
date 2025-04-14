/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, input, output, ViewChild } from '@angular/core';
import { debounce } from 'lodash';
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
  readonly labelButton = input<string>('');
  readonly isShowFilter = input<boolean>(true);

  private debouncedEmit: (value: string) => void;
  searchChanged = output<string>();
  addSection = output<void>();

  constructor() {
    this.debouncedEmit = debounce((value: string) => {
      this.searchChanged.emit(value);
    }, 300);
  }

  onSearchChange(event: any) {
    const value = event.target.value;
    this.debouncedEmit(value);
  }

  onAddSection() {
    this.addSection.emit();
  }
}
