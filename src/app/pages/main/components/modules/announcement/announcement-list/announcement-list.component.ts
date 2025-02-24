import { Component, Input } from '@angular/core';
import { IAnnouncementChild } from '~/@types/announcement';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'announcement-list',
  imports: [DatePipe],
  templateUrl: './announcement-list.component.html',
  styleUrl: './announcement-list.component.scss'
})
export class AnnouncementListComponent {
  @Input() announcements: IAnnouncementChild[] = [];
}
