import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { VendorDialog } from '~/pages/main/components/modules/vendor/vendor-dialog/vendor-dialog.component';

import { ToastService } from '~/services/toast.service';
import { tabHeader } from '~/constants/tab';
import { companyHeaders, companyList, vendorActions } from '~/data/vendor';

@Component({
  selector: 'app-vendor',
  imports: [TabsModule, EmptyContentComponent, ButtonPrimary, MainHeader, Table],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.scss'
})
export class VendorComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  role = 'vendor';
  activeTab = '0';

  tabs = tabHeader;
  companyList = companyList;
  companyHeader = companyHeaders;
  actions = vendorActions;

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  onSearch() {}

  onTabChange(tabIndex: number | string) {
    this.activeTab = tabIndex.toString();
  }

  onOpenCreateVendor(): void {
    this.ref = this.dialogService.open(VendorDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    this.ref.onClose.subscribe((task: any) => {});
  }
}
