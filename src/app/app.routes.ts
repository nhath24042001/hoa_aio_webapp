import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { authGuard, authLoggedInGuard } from './core/guards/auth.guard';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/authentication/login/login.component').then((m) => m.LoginComponent),
        canActivate: [authLoggedInGuard]
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/authentication/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        canActivate: [authLoggedInGuard]
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./pages/authentication/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          ),
        canActivate: [authLoggedInGuard]
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import('./pages/authentication/reset-password/reset-password.component').then(
            (m) => m.ResetPasswordComponent
          ),
        canActivate: [authLoggedInGuard]
      },
      {
        path: 'set-new-password',
        loadComponent: () =>
          import('./pages/authentication/set-new-password/set-new-password.component').then(
            (m) => m.SetNewPasswordComponent
          ),
        canActivate: [authLoggedInGuard]
      }
    ]
  }
];

export const mainRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./pages/main/pages/overview/overview.component').then((m) => m.OverviewComponent)
      },
      {
        path: 'announcements',
        loadComponent: () =>
          import('./pages/main/pages/announcements/announcements.component').then(
            (m) => m.AnnouncementsComponent
          )
      },
      {
        path: 'calendar',
        loadComponent: () =>
          import('./pages/main/pages/calendar/calendar.component').then((m) => m.CalendarComponent)
      },
      {
        path: 'task-management',
        loadComponent: () =>
          import('./pages/main/pages/task-management/task-management.component').then(
            (m) => m.TaskManagementComponent
          )
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/main/pages/project/project.component').then((m) => m.ProjectComponent)
      },
      {
        path: 'vendors',
        loadComponent: () =>
          import('./pages/main/pages/vendor/vendor.component').then((m) => m.VendorComponent)
      },
      {
        path: 'violation-reports',
        loadComponent: () =>
          import('./pages/main/pages/violation/violation.component').then(
            (m) => m.ViolationComponent
          )
      },
      {
        path: 'accounting',
        loadComponent: () =>
          import('./pages/main/pages/accounting/accounting.component').then(
            (m) => m.AccountingComponent
          )
      },
      {
        path: 'home-owners',
        loadComponent: () =>
          import('./pages/main/pages/home-owner/home-owner.component').then(
            (m) => m.HomeOwnerComponent
          )
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('./pages/main/pages/document/document.component').then((m) => m.DocumentComponent)
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/main/pages/report/report.component').then((m) => m.ReportComponent)
      },
      {
        path: 'my-account',
        loadComponent: () => import('./pages/main/pages/account/account.component').then(
          (m) => m.AccountComponent
        )
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'overview'
  }
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
