import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { ShortNumberPipe } from '~/pipes/short-number.pipe'

import { BaseComponent } from '../../../../../../components/common/base/base.component'
import { ThemeService } from '../../../../../../services/theme.service'

@Component({
  selector: 'app-overview-stas',
  imports: [ShortNumberPipe],
  templateUrl: './overview-stas.component.html',
  styleUrl: './overview-stas.component.scss'
})
export class OverviewStasComponent extends BaseComponent {
  sta_data = [
    {
      number: 16,
      name: 'Projects',
      text: 'Go to Projects',
      isPrefix: false,
      routeLink: '/projects'
    },
    {
      number: 5,
      name: 'Claims',
      text: 'Go to Claims',
      isPrefix: false,
      routeLink: '/claims'
    },
    {
      number: 2440,
      name: 'Collected',
      text: 'Go to Accounting',
      isPrefix: true,
      routeLink: '/accounting'
    },
    {
      number: 864,
      name: 'Owed',
      text: 'Go to Accounting',
      isPrefix: true,
      routeLink: '/accounting'
    }
  ]

  constructor(
    themeService: ThemeService,
    private router: Router
  ) {
    super(themeService)
  }

  navigateTo(routeLink: string) {
    this.router.navigate([`main/${routeLink}`])
  }
}
