/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabsModule } from 'primeng/tabs';

import { violationTabHeader } from '~/constants/tab';
import { violationActions, violationType } from '~/data/vendor';
import { closedViolationList, openViolationList, violationHeader } from '~/data/violation';
import { Action } from '~/enums';
import { ViolationDialog } from '~/pages/main/components/modules/violation/violation-dialog/violation-dialog.component';
import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';
import { MainHeader } from '~/pages/main/components/shared/main-header/main-header.component';
import { Table } from '~/pages/main/components/shared/table/table.component';

@Component({
  selector: 'app-violation',
  imports: [
    TabsModule,
    EmptyContentComponent,
    ButtonPrimary,
    MainHeader,
    Table,
    MultiSelectModule,
    DatePicker,
    FormsModule
  ],
  templateUrl: './violation.component.html',
  styleUrl: './violation.component.scss'
})
export class ViolationComponent {
  ref: DynamicDialogRef | undefined;
  isActive: boolean = true;
  activeTab = '0';

  filter_object = signal({
    status: [''],
    creation_date: {
      start_date: '',
      end_date: ''
    },
    due_date: {
      start_date: '',
      end_date: ''
    }
  });

  tabs = violationTabHeader;
  violationHeader = violationHeader;
  openViolationList = openViolationList;
  closedViolationList = closedViolationList;
  actions = violationActions;
  violationType = violationType;

  constructor(public dialogService: DialogService) {}

  onTabChange(tabIndex: number | string) {
    this.activeTab = tabIndex.toString();
  }

  onOpenCreateDialog(): void {
    this.ref = this.dialogService.open(ViolationDialog, {
      modal: true,
      width: '1000px',
      data: {
        type: 'create'
      }
    });
  }

  onAction(event: { actionKey: string; rowData: any }): void {
    // TODO: Fix type any
    switch (event.actionKey) {
      case Action.EDIT:
        break;
    }
  }
}
