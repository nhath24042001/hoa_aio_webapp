/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

import { BaseComponent } from '~/components/common/base/base.component';
import { propertiesDetailTabHeader } from '~/constants/tab';
import { accountingHeader, accountingList, propertiesInputFields } from '~/data/home-owner';
import { ButtonDirective } from '~/directives/button.directive';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-property-detail',
  imports: [DividerModule, TabsModule, FormField, ButtonDirective, SelectModule, Table],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss'
})
export class PropertyDetail extends BaseComponent implements OnInit {
  // TODO: Fix type any
  activeTab = signal('0');
  formFields = propertiesInputFields;
  tabs = propertiesDetailTabHeader;
  data: any;
  headers = accountingHeader;
  dataTable = accountingList;
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  constructor(
    themeService: ThemeService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) {
    super(themeService);
    this.data = config.data;
  }

  override ngOnInit() {
    super.ngOnInit();
    this.mapValuesToFields();
  }

  closeDialog() {
    this.ref.close();
  }

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }

  mapValuesToFields() {
    // TODO: Recheck this logic
    this.formFields = this.formFields
      .filter((field) => Object.prototype.hasOwnProperty.call(this.data, field.field))
      .map((field) => ({
        ...field,
        value: this.data[field.field]
      }));
  }
}
