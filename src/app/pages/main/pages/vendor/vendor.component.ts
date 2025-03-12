import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { VendorDialog } from '~/pages/main/components/modules/vendor/vendor-dialog/vendor-dialog.component';
import { BidDialog } from '~/pages/main/components/modules/vendor/bid-dialog/bid-dialog.component';
import { RequestEstimateDialog } from '~/pages/main/components/modules/vendor/request-estimate-dialog/request-estimate-dialog.component';

import { ToastService } from '~/services/toast.service';
import { tabHeader } from '~/constants/tab';
import {
  bidHeaders,
  bidList,
  companyHeaders,
  companyList,
  estimateList,
  vendorActions
} from '~/data/vendor';
import { Action } from '~/enums';

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
  bidHeader = bidHeaders;
  bidList = bidList;
  estimateList = estimateList;
  actions = vendorActions;

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  get buttonText(): string {
    switch (this.activeTab) {
      case '0':
        return 'New Vendor';
      case '1':
        return 'New Bid';
      default:
        return 'Request an Estimate';
    }
  }

  get componentRender() {
    switch (this.activeTab) {
      case '0':
        return VendorDialog;
      case '1':
        return BidDialog;
      default:
        return RequestEstimateDialog;
    }
  }

  onSearch() {}

  onTabChange(tabIndex: number | string) {
    this.activeTab = tabIndex.toString();
  }
  onOpenCreate(): void {
    this.ref = this.dialogService.open(this.componentRender, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    // this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenEditDialog(data: any): void {
    this.ref = this.dialogService.open(this.componentRender, {
      modal: true,
      width: '1000px',
      data: {
        type: 'edit',
        data: {
          title: 'AB Services Co.',
          created_date: '2/2/2021',
          update_date: '2/2/2022',
          status: 'pending',
          formData: {
            industry_type: 'maintenance',
            contact_person: 'Amber Bruce',
            contact_email: 'amber@abservices.co',
            phone: '555-565-7898',
            license_number: '117845678987',
            image: '',
            rating: '5/5',
            expiry_date: '2/2/2022',
            vendor_title: 'General Maintenance Service Providers'
          }
        }
      }
    });
  }

  onAction(event: { actionKey: string; rowData: any }): void {
    switch (event.actionKey) {
      case Action.EDIT:
        this.onOpenEditDialog(event.rowData);
        break;
      case 'approve':
        // this.toastService.showSuccess('Approved successfully');
        break;
      case 'pending':
        // this.toastService.showWarning('Marked as pending');
        break;
      case 'delete':
        // this.toastService.showDanger('Deleted successfully');
        break;
      default:
        break;
    }
  }
}
