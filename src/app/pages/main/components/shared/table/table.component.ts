import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

interface TableAction {
  label: string;
  icon: string;
  action: (row: any) => void;
}

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
  @Input() showPagination: boolean = false;
  @Input() actions: TableAction[] = [];
  @Input() rowsPerPageOptions = [5, 10, 20];
  @Output() pageChange = new EventEmitter<number>();

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
    return `assets/images/${this.currentMode}/${type}.svg`;
    // switch (type) {
    //   case 'action_item':
    //     return `assets/images/${this.currentMode}/clipboard-sm.svg`;
    //   case 'claim':
    //     return `assets/images/${this.currentMode}/annotation-sm.svg`;
    //   default:
    //     return 'Unknown';
    // }
  }

  getClass(className: string) {
    return this.currentMode === 'light' ? `--${className}` : `--${className}-dark`;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageChange.emit(event.page);
  }
}
