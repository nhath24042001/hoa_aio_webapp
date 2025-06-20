import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  imports: [RouterModule],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
          optional: true
        }),
        group([
          query(':leave', [animate('300ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))], {
            optional: true
          }),
          query(
            ':enter',
            [
              style({ opacity: 0, transform: 'translateY(20px)' }),
              animate('300ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
            ],
            {
              optional: true
            }
          )
        ])
      ])
    ])
  ]
})
export class AuthLayoutComponent {
  backgroundImg = '../../../assets/images/common/bg-auth.svg';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
