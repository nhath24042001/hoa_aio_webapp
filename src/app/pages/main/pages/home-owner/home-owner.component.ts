import { Component, computed, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { homeOwnerTabHeader } from '~/constants/tab';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import {
  homeOwnerHeader,
  homeOwnerList,
  propertiesActions,
  propertiesHeader,
  propertiesList
} from '~/data/home-owner';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { NewProperty } from '~/pages/main/components/modules/home-owner/new-property/new-property.component';
import { NewOwner } from '~/pages/main/components/modules/home-owner/new-owner/new-owner.component';

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
    const createDialog = this.activeTab() === '0' ? NewProperty : NewOwner;

    this.ref = this.dialogService.open(createDialog, {
      modal: true,
      width: '1100px'
    });
  }
}
