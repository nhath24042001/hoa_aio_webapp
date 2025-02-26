import { Component, Input, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';

import { IHeaderTable } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { Action } from '~/enums';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    CommonModule,
    DatePipe,
    AvatarModule,
    AvatarGroupModule,
    PopoverModule,
    PaginatorModule,
    SelectModule,
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class Table<T> extends BaseComponent {
  @ViewChild('popover', { static: false }) popover?: PopoverDirective;
  @Input() data!: T[];
  @Input() headers!: IHeaderTable[];
  ACTIONS = Action;

  first: number = 0;

  rows: number = 10;

  pageOptions = [
    {
      name: '10',
      value: 10
    },
    {
      name: '20',
      value: 20
    },
    {
      name: '50',
      value: 50
    }
  ];
  selectedPageOption: number = 10;

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  convertTableType(type: string) {
    switch (type) {
      case 'action_item':
        return `assets/images/${this.currentMode}/clipboard-sm.svg`;
      case 'claim':
        return `assets/images/${this.currentMode}/annotation-sm.svg`;
      default:
        return 'Unknown';
    }
  }

  getClass(className: string) {
    return `--${className}`;
  }

  onPageChange(event: any) {
    // this.onPageChangeEvent.emit(event);
  }
}
