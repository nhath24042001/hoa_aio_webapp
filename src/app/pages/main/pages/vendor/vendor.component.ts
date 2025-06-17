/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { ITab } from '~/@types';
import { IVendor } from '~/@types/vendor';
import { bidHeaders, bidList, companyHeaders, companyList, estimateList, vendorActions } from '~/data/vendor';
import { ButtonDirective } from '~/directives/button.directive';
import { Action } from '~/enums';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { ToastService } from '~/services/toast.service';

import { BidDialog } from '../../components/modules/vendor/bid-dialog/bid-dialog.component';
import { RequestEstimateDialog } from '../../components/modules/vendor/request-estimate-dialog/request-estimate-dialog.component';
import { VendorDialog } from '../../components/modules/vendor/vendor-dialog/vendor-dialog.component';

@Component({
  selector: 'app-vendor',
  imports: [TabsModule, EmptyContentComponent, ButtonDirective, MainHeader, Table],
  templateUrl: './vendor.component.html',
  styleUrl: './vendor.component.scss'
})
export class VendorComponent {
  ref: DynamicDialogRef | undefined;
  role = 'Manager';
  activeTab = signal('0');

  companyList = companyList;
  companyHeader = companyHeaders;
  bidHeader = bidHeaders;
  bidList = bidList;
  estimateList = estimateList;
  actions = vendorActions;
  search: string = '';

  tabs: Omit<ITab<IVendor>, 'status'>[] = [
    {
      name: 'Companies',
      img: 'assets/images/common/gray-truck.svg',
      activeImg: 'assets/images/common/truck.svg',
      data: [],
      headers: companyHeaders,
      sampleData: companyList,
      loading: false
    },
    {
      name: 'Bids',
      img: 'assets/images/common/gray-finger.svg',
      activeImg: 'assets/images/common/finger.svg',
      data: [],
      headers: bidHeaders,
      sampleData: bidList,
      loading: false
    },
    {
      name: 'Estimates',
      img: 'assets/images/common/gray-help-hexagon.svg',
      activeImg: 'assets/images/common/help-hexagon.svg',
      data: [],
      headers: bidHeaders,
      sampleData: estimateList,
      loading: false
    }
  ];

  constructor(
    public dialogService: DialogService,
    private toastService: ToastService
  ) {}

  get buttonText(): string {
    switch (this.activeTab()) {
      case '0':
        return 'New Vendor';
      case '1':
        return 'New Bid';
      default:
        return 'Request an Estimate';
    }
  }

  get componentRender() {
    switch (this.activeTab()) {
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
    this.activeTab.set(tabIndex.toString());
  }

  onOpenCreate(): void {
    this.ref = this.dialogService.open(this.componentRender as any, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });

    // this.ref.onClose.subscribe((task: any) => {});
  }

  onOpenEditDialog(): void {
    this.ref = this.dialogService.open(this.componentRender as any, {
      modal: true,
      width: '1000px',
      data: {
        type: 'detail',
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
            image:
              'data:image/png;base64,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',
            rating: '5/5',
            expiry_date: '2/2/2022',
            vendor_title: 'General Maintenance Service Providers',
            description:
              'General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers',
            comment:
              'General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers General Maintenance Service Providers',
            documents: [
              {
                file_name: 'Certificate 1'
              },
              {
                file_name: 'Insurance'
              }
            ],
            contracts: [
              {
                file_name: 'Upload Contract'
              }
            ]
          }
        }
      }
    });
  }

  async onOpenDeleteDialog(): Promise<void> {
    const confirmed = await this.toastService.showConfirm({
      icon: 'assets/images/common/red-trash-md.svg',
      title: 'Delete Item',
      description: 'Are you sure? Proceeding will delete the item from the system, and can not be undone.',
      type: 'error',
      buttonText: 'Delete'
    });

    if (confirmed) {
      console.log('run 1');
    }
  }

  onAction(event: { actionKey: string; rowData: any }): void {
    switch (event.actionKey) {
      case Action.EDIT:
        this.onOpenEditDialog();
        break;
      case 'approve':
        // this.toastService.showSuccess('Approved successfully');
        break;
      case 'pending':
        // this.toastService.showWarning('Marked as pending');
        break;
      case 'delete':
        this.onOpenDeleteDialog();
        break;
      default:
        break;
    }
  }
}
