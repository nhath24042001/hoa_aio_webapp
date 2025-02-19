import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('ACCESS_TOKEN');

  return isAuthenticated ? true : router.createUrlTree(['auh/login']);
};

export const authLoggedInGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isAuthenticated = !!localStorage.getItem('ACCESS_TOKEN');

  if (isAuthenticated) {
    return router.createUrlTree(['main/dashboard']);
  }

  return true;
};
