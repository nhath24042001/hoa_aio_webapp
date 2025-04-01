import { Component } from '@angular/core'

import { ButtonPrimary } from '~/pages/main/components/shared/button-primary/button-primary.component'
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component'

@Component({
  selector: 'app-bid-section',
  imports: [EmptyContentComponent, ButtonPrimary],
  templateUrl: './bid-section.component.html',
  styleUrl: './bid-section.component.scss'
})
export class BidSectionComponent {
  bids = []
}
