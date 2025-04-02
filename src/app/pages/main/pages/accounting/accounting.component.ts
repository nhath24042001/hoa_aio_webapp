import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Divider } from 'primeng/divider';
import { SelectModule } from 'primeng/select';

import { BaseComponent } from '~/components/common/base/base.component';
import { accountHeader, accountList } from '~/data/account';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ThemeService } from '~/services/theme.service';

import { Table } from '../../components/shared/table/table.component';

@Component({
  selector: 'app-accounting',
  imports: [EmptyContentComponent, SelectModule, FormsModule, Divider, Table],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent extends BaseComponent {
  isActive: boolean = true;

  selectedCity: any;

  header = accountHeader;
  data = accountList;

  cities = [
    { name: 'Current year', code: 'CY' },
    { name: 'Current month', code: 'CM' },
    { name: 'December 2024', code: 'D24' },
    { name: 'November 2024', code: 'N24' },
    { name: 'October 2024', code: 'O24' },
    { name: 'September 2024', code: 'S24' },
    { name: 'August 2024', code: 'S24' }
  ];

  constructor(themeService: ThemeService) {
    super(themeService);
  }
}
