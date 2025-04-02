import { Component, OnInit, signal } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';

import { BaseComponent } from '~/components/common/base/base.component';
import { ownerDetailHeader } from '~/constants/tab';
import { homeOwnerInputFields } from '~/data/home-owner';
import { FormField } from '~/pages/main/components/dialog/form-field/form-field.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'app-owner-detail',
  imports: [DividerModule, TabsModule, FormField, ButtonPrimary, SelectModule],
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
