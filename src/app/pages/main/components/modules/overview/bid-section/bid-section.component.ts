import { Component } from '@angular/core';

import { ButtonDirective } from '~/directives/button.directive';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';

@Component({
  selector: 'app-bid-section',
  imports: [EmptyContentComponent, ButtonDirective],
  templateUrl: './bid-section.component.html',
  styleUrl: './bid-section.component.scss'
})
export class BidSectionComponent {
  bids = [];
}
