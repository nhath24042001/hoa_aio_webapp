import { Component } from '@angular/core';
import { EmptyContentComponent } from '../empty-content/empty-content.component';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonPrimaryComponent],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent {
  announcements = [];
}
