import { Component, signal } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Table } from '~/pages/main/components/shared/table/table.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { userTabHeader } from '~/constants/tab';
import {
  userHeader,
  activeUserList,
  inactiveUserList,
  activeAction,
  inactiveAction
} from '~/data/user';

@Component({
  selector: 'app-user',
  imports: [TabsModule, Table, MainHeader, EmptyContentComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  activeTab = signal('0');

  tabs = userTabHeader;
  headers = userHeader;
  activeUserList = activeUserList;
  inactiveUserList = inactiveUserList;
  activeAction = activeAction;
  inactiveAction = inactiveAction;

  constructor(public dialogService: DialogService) {}

  onTabChange(tabIndex: number | string) {
    this.activeTab.set(tabIndex.toString());
  }
}
