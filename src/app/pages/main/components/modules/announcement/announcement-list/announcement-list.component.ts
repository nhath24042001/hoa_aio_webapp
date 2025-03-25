import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IAnnouncementChild } from '~/@types/announcement';
import { DatePipe } from '@angular/common';
import { PopoverModule } from 'primeng/popover';

import { Action } from '~/enums/index';
import { BaseComponent } from '~/components/common/base/base.component';
import { ThemeService } from '~/services/theme.service';

@Component({
  selector: 'announcement-list',
  imports: [DatePipe, PopoverModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent extends BaseComponent {
  @Input() announcements: IAnnouncementChild[] = [];
  @Output() onEmitAction = new EventEmitter<{ announcement: IAnnouncementChild; type: string }>();

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
