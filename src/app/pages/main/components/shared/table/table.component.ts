import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PaginatorModule } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';

import { IHeaderTable } from '~/@types/task';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { convertToTitleCase } from '~/utils/string-utils';

interface TableAction {
  label: string;
  icon: string;
  className: string;
  actionKey: string;
}

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    CommonModule,
    DatePipe,
    AvatarModule,
    AvatarGroupModule,
    PaginatorModule,
    SelectModule,
    FormsModule,
    PopoverModule,
    ButtonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class Table<T> extends BaseComponent {
  @Input() data!: T[];
  @Input() headers!: IHeaderTable[];
  @Input() showPagination: boolean = false;
  @Input() actions: TableAction[] = [];
  @Input() className: string = '';
  @Input() rowsPerPageOptions = [5, 10, 20];
  @Output() pageChange = new EventEmitter<number>();
  @Output() actionTriggered = new EventEmitter<{ actionKey: string; rowData: T }>();

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

  convertToTitleCase(text: string) {
    return convertToTitleCase(text);
  }

  convertTableType(type: string) {
    return `assets/images/${this.currentMode}/${type}.svg`;
  }

  getClass(className: string) {
    return this.currentMode === 'light' ? `--${className}` : `--${className}-dark`;
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.pageChange.emit(event.page);
  }

  onActionClick(actionKey: string, rowData: T) {
    this.actionTriggered.emit({ actionKey, rowData });
  }
}
