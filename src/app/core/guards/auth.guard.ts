import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  // const isAuthenticated = !!localStorage.getItem('ACCESS_TOKEN');
  const isAuthenticated = true

  return isAuthenticated ? true : router.createUrlTree(['auh/login'])
}

export const authLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const isAuthenticated = !!localStorage.getItem('ACCESS_TOKEN')

  if (isAuthenticated) {
    return router.createUrlTree(['/dashboard'])
  }

  return true
}
