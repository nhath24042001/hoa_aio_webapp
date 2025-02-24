import { Component } from '@angular/core';
import { EmptyContentComponent } from '../empty-content/empty-content.component';
import { ButtonPrimaryComponent } from '../shared/button-primary/button-primary.component';

@Component({
  selector: 'app-bid-section',
  imports: [EmptyContentComponent, ButtonPrimaryComponent],
  templateUrl: './bid-section.component.html',
  styleUrl: './bid-section.component.scss'
})
export class BidSectionComponent {
  bids = [];
}
