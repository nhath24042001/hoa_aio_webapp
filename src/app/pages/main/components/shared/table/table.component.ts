import { CommonModule, DatePipe } from '@angular/common'
import { Component, input, output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { AvatarModule } from 'primeng/avatar'
import { AvatarGroupModule } from 'primeng/avatargroup'
import { ButtonModule } from 'primeng/button'
import { PaginatorModule } from 'primeng/paginator'
import { PopoverModule } from 'primeng/popover'
import { SelectModule } from 'primeng/select'
import { TableModule } from 'primeng/table'

import { IHeaderTable } from '~/@types/task'
import { BaseComponent } from '~/components/common/base/base.component'
import { ThemeService } from '~/services/theme.service'
import { convertToTitleCase } from '~/utils/string-utils'

interface TableAction {
  label: string
  icon: string
  className: string
  actionKey: string
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
  data = input.required<T[]>()
  readonly headers = input.required<IHeaderTable[]>()
  readonly showPagination = input<boolean>(false)
  readonly showListPerPage = input<boolean>(true)
  readonly showCheckbox = input<boolean>(false)
  readonly actions = input<TableAction[]>([])
  readonly className = input<string>('')
  readonly rowsPerPageOptions = input([5, 10, 20])

  pageChange = output<number>()
  actionTriggered = output<{ actionKey: string; rowData: T }>()
  rowSelected = output<T[]>()

  first: number = 0

  rows: number = 10

  selectedRows: T[] = []

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
  ]
  selectedPageOption: number = 10

  constructor(themeService: ThemeService) {
    super(themeService)
  }

  convertToTitleCase(text: string) {
    return convertToTitleCase(text)
  }

  convertTableType(type: string) {
    return `assets/images/${this.currentMode}/${type}.svg`
  }

  getClass(className: string) {
    return this.currentMode === 'light' ? `--${className}` : `--${className}-dark`
  }

  onPageChange(event: any) {
    this.first = event.first
    this.rows = event.rows
    this.pageChange.emit(event.page)
  }

  onActionClick(actionKey: string, rowData: T) {
    this.actionTriggered.emit({ actionKey, rowData })
  }
}
