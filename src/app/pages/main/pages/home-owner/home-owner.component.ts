/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, computed, signal } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TabsModule } from 'primeng/tabs';

import { homeOwnerTabHeader } from '~/constants/tab';
import { homeOwnerHeader, homeOwnerList, propertiesActions, propertiesHeader, propertiesList } from '~/data/home-owner';
import { Action } from '~/enums';
import { NewOwner } from '~/pages/main/components/modules/home-owner/new-owner/new-owner.component';
import { NewProperty } from '~/pages/main/components/modules/home-owner/new-property/new-property.component';
import { OwnerDetail } from '~/pages/main/components/modules/home-owner/owner-detail/owner-detail.component';
import { PropertyDetail } from '~/pages/main/components/modules/home-owner/property-detail/property-detail.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

@Component({
  selector: 'app-home-owner',
  imports: [TabsModule, MainHeader, Table, EmptyContentComponent],
  templateUrl: './home-owner.component.html',
  styleUrl: './home-owner.component.scss'
})
export class HomeOwnerComponent {
  ref: DynamicDialogRef | undefined;
  activeTab = signal('0');
  tabs = homeOwnerTabHeader;
  headers = propertiesHeader;
  data = propertiesList;
  actions = propertiesActions;
  homeOwnerHeader = homeOwnerHeader;
  homeOwnerList = homeOwnerList;

  labelButton = computed(() => {
    return this.activeTab() === '0' ? 'New Property' : 'New Home Owner';
  });

  constructor(public dialogService: DialogService) {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }

  onAddSection() {
    if (this.activeTab() === '0') {
      this.ref = this.dialogService.open(NewProperty, {
        modal: true,
        width: '1100px'
      });
    } else {
      this.ref = this.dialogService.open(NewOwner, {
        modal: true,
        width: '1100px'
      });
    }
  }

  onEditItem() {
    if (this.activeTab() === '0') {
      const propertyDetail = {
        address: '123 Abbey Rd., Unit 2',
        city: 'Palm Springs',
        state: 'NV',
        zip_code: '45678987',
        owner: 'Marilyn Siphron',
        primary_residence: 'Owner',
        occupancy_status: 'Owner-occupied',
        purchase_date: '30 jan, 2020 ',
        end_date: '30 jan, 2020',
        ownership_type: 'Individual',
        property_type: 'Single Family',
        square_footage: 323,
        number_of_bedrooms: '5/2',
        parking_space: 'no',
        storage_unit: 'no'
      };
      this.ref = this.dialogService.open(PropertyDetail, {
        modal: true,
        width: '1100px',
        data: propertyDetail
      });
    } else {
      const ownerDetail = {
        first_name: 'Marilyn',
        last_name: 'Siphron',
        mobile_number: '213-545-6789',
        secondary_number: '-',
        email: 'marilyn.123@email.com',
        status: 'Active',
        property_owner: 'Yes',
        board_member: 'No',
        image: 'https://i.pinimg.com/474x/2a/4d/56/2a4d56f8ccc56b3b9f9d7f4740f996a2.jpg',
        end_date: '03/12/2020',
        mail: '123 Abbey Rd., Unit 2',
        city: 'Palm Springs',
        state: 'NV',
        zip_code: '45678987',
        vehicle: 2,
        vehicle_info: 'Corolla',
        owner_properties: [
          {
            id: '4567890',
            link: '#'
          },
          {
            id: '4567890',
            link: '#'
          }
        ]
      };

      this.ref = this.dialogService.open(OwnerDetail, {
        modal: true,
        width: '1100px',
        data: ownerDetail
      });
    }
  }

  onAction(event: { actionKey: string; rowData: any }): void {
    // TODO: Fix type any
    switch (event.actionKey) {
      case Action.EDIT:
        this.onEditItem();
        break;
    }
  }
}
