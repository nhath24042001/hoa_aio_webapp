import { Component } from '@angular/core';
import { EmptyContentComponent } from '../../../shared/empty-content/empty-content.component';
import { ButtonPrimary } from '../../../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-announcement-section',
  imports: [EmptyContentComponent, ButtonPrimary],
  templateUrl: './announcement-section.component.html',
  styleUrl: './announcement-section.component.scss'
})
export class AnnouncementSectionComponent {
  announcements = [];
}
