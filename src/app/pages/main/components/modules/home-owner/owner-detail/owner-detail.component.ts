import { Component, OnInit, signal } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';
import { DividerModule } from 'primeng/divider';
import { SelectModule } from 'primeng/select';

import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';
import { ownerDetailHeader, propertiesDetailTabHeader } from '~/constants/tab';
import {
  accountingHeader,
  accountingList,
  homeOwnerInputFields,
  propertiesInputFields
} from '~/data/home-owner';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

@Component({
  selector: 'app-owner-detail',
  imports: [DividerModule, TabsModule, FormField, ButtonPrimary, SelectModule, Table],
  templateUrl: './owner-detail.component.html',
  styleUrl: './owner-detail.component.scss'
})
export class OwnerDetail extends BaseComponent implements OnInit {
  activeTab = signal('0');
  formFields = homeOwnerInputFields;
  tabs = ownerDetailHeader;
  data: any;

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
