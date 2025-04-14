/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { PopoverModule } from 'primeng/popover';

import { IAnnouncementChild } from '~/@types/announcement';
import { BaseComponent } from '~/components/common/base/base.component';
import { Action } from '~/enums/index';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'announcement-list',
  imports: [DatePipe, PopoverModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent extends BaseComponent {
  // TODO: Fix type any
  readonly announcements = input<IAnnouncementChild[]>([]);
  onEmitAction = output<{ announcement: IAnnouncementChild; type: string }>();

  ACTIONS = Action;
  actions = [
    {
      label: this.ACTIONS.EDIT,
      icon: 'edit',
      actionKey: 'edit',
      className: '--edit-action --pointer mb-2'
    },
    {
      label: this.ACTIONS.PUBLISH,
      icon: 'send',
      actionKey: 'publish',
      className: '--publish-action --pointer mb-2'
    },
    {
      label: this.ACTIONS.DELETE,
      icon: 'trash',
      actionKey: 'delete',
      className: '--delete-action --pointer'
    }
  ];

  constructor(themeService: ThemeService) {
    super(themeService);
  }

  onActionClick(actionKey: string, rowData: any) {
    this.onEmitAction.emit({ announcement: rowData, type: actionKey });
  }
}
