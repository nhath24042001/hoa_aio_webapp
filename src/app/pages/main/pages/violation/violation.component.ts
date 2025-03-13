import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';
import { openViolationList, closedViolationList, violationHeader } from '~/data/violation';
import { violationTabHeader } from '~/constants/tab';
import { violationActions } from '~/data/vendor';

@Component({
  selector: 'app-violation',
  imports: [TabsModule, EmptyContentComponent, ButtonPrimary, MainHeader, Table],
  templateUrl: './violation.component.html',
  styleUrl: './violation.component.scss'
})
export class ViolationComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  activeTab = '0';

  tabs = violationTabHeader;
  violationHeader = violationHeader;
  openViolationList = openViolationList;
  closedViolationList = closedViolationList;
  actions = violationActions;

  constructor(public dialogService: DialogService) {}

  onTabChange(tabIndex: number | string) {
    this.activeTab = tabIndex.toString();
  }

  onAction(event: { actionKey: string; rowData: any }): void {}
}
