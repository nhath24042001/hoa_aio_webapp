import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ButtonDirective } from '~/directives/button.directive';
import { ROUTE_PATH } from '~/enums/route';
import { EmptyContentComponent } from '~/pages/main/components/shared/empty-content/empty-content.component';

@Component({
  selector: 'app-bid-section',
  imports: [EmptyContentComponent, ButtonDirective],
  templateUrl: './bid-section.component.html',
  styleUrl: './bid-section.component.scss'
})
export class BidSectionComponent {
  ROUTE_PATH = ROUTE_PATH;
  bids = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  redirectToBid(): void {
    this.router.navigate([ROUTE_PATH.VENDOR], {
      queryParams: { tab: 'bids' },
      queryParamsHandling: 'merge'
    });
  }
}
