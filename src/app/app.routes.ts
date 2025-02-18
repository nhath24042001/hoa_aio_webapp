import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/authentication/login/login.component').then((m) => m.LoginComponent)
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/authentication/register/register.component').then(
            (m) => m.RegisterComponent
          )
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/authentication/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          )
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./pages/authentication/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          )
      },
      {
        path: 'set-new-password',
        loadComponent: () =>
          import('./pages/authentication/set-new-password/set-new-password.component').then(
            (m) => m.SetNewPasswordComponent
          )
      }
    ]
  }
];

export const mainRoutes: Routes = [
  { path: 'dashboard', component: MainLayoutComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const routes: Routes = [
  {
    path: 'auth',
    children: authRoutes
  },
  {
    path: 'main',
    children: mainRoutes
  },
  { path: '**', redirectTo: '/auth/login' }
];
