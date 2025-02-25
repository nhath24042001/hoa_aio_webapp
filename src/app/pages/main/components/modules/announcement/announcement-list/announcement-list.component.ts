import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { IAnnouncementChild } from '~/@types/announcement';
import { DatePipe } from '@angular/common';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { PopoverDirective } from 'ngx-bootstrap/popover';
import { AnnounceAction } from '~/enums/index';

@Component({
  selector: 'announcement-list',
  imports: [DatePipe, PopoverModule],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent {
  @ViewChild('popover', { static: false }) popover?: PopoverDirective;
  @Input() announcements: IAnnouncementChild[] = [];
  @Output() onEmitAction = new EventEmitter<{ announcement: IAnnouncementChild; type: string }>();

  ACTIONS = AnnounceAction;

  onEmitterAction(announcement: IAnnouncementChild, type: string) {
    this.onEmitAction.emit({ announcement, type });
  }
}
