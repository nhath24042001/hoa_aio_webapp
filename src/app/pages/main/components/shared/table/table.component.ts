import { CommonModule } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { PopoverModule } from 'primeng/popover';
import { SelectModule } from 'primeng/select';
import { Skeleton } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';

import { ITableAction } from '~/@types';
import { IHeaderTable } from '~/@types/index.d';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { formattedDate } from '~/utils/date-utils';
import { convertToTitleCase } from '~/utils/string-utils';

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    PaginatorModule,
    SelectModule,
    FormsModule,
    PopoverModule,
    ButtonModule,
    Skeleton
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class Table<T> extends BaseComponent implements OnInit {
  data = input.required<T[]>();
  sampleData = input<any[]>([]);
  readonly headers = input.required<IHeaderTable[]>();
  readonly showPagination = input<boolean>(false);
  readonly showListPerPage = input<boolean>(true);
  readonly showCheckbox = input<boolean>(false);
  readonly actions = input<ITableAction[]>([]);
  readonly className = input<string>('');
  readonly rowsPerPageOptions = input([5, 10, 20]);
  readonly isLoading = input<boolean>(false);

  pageChange = output<number>();
  actionTriggered = output<{ actionKey: string; rowData: T }>();
  rowSelected = output<T[]>();

  placeholderData = new Array(3).fill({});
  first: number = 0;
  rows: number = 10;
  selectedRows: T[] = [];
  selectedPageOption: number = 10;
  sidebarWidth: number = 0;
  tableWidth: number = 0;
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

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    this.themeService.sidebarWidth$.subscribe((width) => {
      this.sidebarWidth = width;
      this.tableWidth = window.innerWidth - width - 48;
    });

    window.addEventListener('resize', this.updateTableWidth);
  }

  override ngOnDestroy(): void {
    window.removeEventListener('resize', this.updateTableWidth);
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

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 0;
    this.pageChange.emit(event.page ?? 0);
  }

  onActionClick(actionKey: string, rowData: T) {
    this.actionTriggered.emit({ actionKey, rowData });
  }

  handleImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = `assets/images/common/error-image.jpg`;
  }

  formatDate(date: string | Date): string {
    return formattedDate(date);
  }

  private updateTableWidth = () => {
    const width = this.themeService.getSidebarWidth();
    this.tableWidth = window.innerWidth - width - 48;
  };
}
