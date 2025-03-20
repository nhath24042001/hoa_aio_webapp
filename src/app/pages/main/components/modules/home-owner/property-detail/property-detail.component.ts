import { Component, OnInit, signal } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { propertiesDetailTabHeader } from '~/constants/tab';
import { accountingHeader, accountingList, propertiesInputFields } from '~/data/home-owner';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

@Component({
  selector: 'app-property-detail',
  imports: [DividerModule, TabsModule, FormField, ButtonPrimary, SelectModule, Table],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss'
})
export class PropertyDetail extends BaseComponent implements OnInit {
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
    this.formFields = this.formFields
      .filter((field) => this.data.hasOwnProperty(field.field))
      .map((field) => ({
        ...field,
        value: this.data[field.field]
      }));
  }
}
