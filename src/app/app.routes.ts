import { Routes } from '@angular/router';

import { RouteName, RoutePath } from './enums/route';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        title: RouteName.LoginView,
        path: RoutePath.Login,
        data: { animation: 'LoginPage' },
        loadComponent: () => import('./pages/authentication/login/login.component').then((m) => m.LoginComponent)
      },
      {
        title: RouteName.ForgotPasswordView,
        path: RoutePath.ForgotPassword,
        data: { animation: 'ForgotPage' },
        loadComponent: () =>
          import('./pages/authentication/forgot-password/forgot-password.component').then(
            (m) => m.ForgotPasswordComponent
          )
      },
      {
        title: RouteName.ResetPasswordView,
        path: RoutePath.ResetPassword,
        data: { animation: 'ResetPage' },
        loadComponent: () =>
          import('./pages/authentication/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent)
      },
      {
        title: RouteName.SetNewPasswordView,
        path: RoutePath.SetNewPassword,
        data: { animation: 'SetNewPassword' },
        loadComponent: () =>
          import('./pages/authentication/set-new-password/set-new-password.component').then(
            (m) => m.SetNewPasswordComponent
          )
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
        title: RouteName.OverviewView,
        path: RoutePath.Overview,
        loadComponent: () => import('./pages/main/pages/overview/overview.component').then((m) => m.OverviewComponent)
      },
      {
        title: RouteName.AnnouncementView,
        path: RoutePath.Announcement,
        loadComponent: () =>
          import('./pages/main/pages/announcements/announcements.component').then((m) => m.AnnouncementsComponent)
      },
      {
        title: RouteName.CalendarView,
        path: RoutePath.Calendar,
        loadComponent: () => import('./pages/main/pages/calendar/calendar.component').then((m) => m.CalendarComponent)
      },
      {
        title: RouteName.TaskManagementView,
        path: RoutePath.TaskManagement,
        loadComponent: () =>
          import('./pages/main/pages/task-management/task-management.component').then((m) => m.TaskManagementComponent)
      },
      {
        title: RouteName.ProjectView,
        path: RoutePath.Project,
        loadComponent: () => import('./pages/main/pages/project/project.component').then((m) => m.ProjectComponent)
      },
      {
        title: RouteName.VendorView,
        path: RoutePath.Vendor,
        loadComponent: () => import('./pages/main/pages/vendor/vendor.component').then((m) => m.VendorComponent)
      },
      {
        title: RouteName.ViolationReportView,
        path: RoutePath.ViolationReport,
        loadComponent: () =>
          import('./pages/main/pages/violation/violation.component').then((m) => m.ViolationComponent)
      },
      {
        title: RouteName.AccountingView,
        path: RoutePath.Accounting,
        loadComponent: () =>
          import('./pages/main/pages/accounting/accounting.component').then((m) => m.AccountingComponent)
      },
      {
        title: RouteName.HomeOwnerView,
        path: RoutePath.HomeOwner,
        loadComponent: () =>
          import('./pages/main/pages/home-owner/home-owner.component').then((m) => m.HomeOwnerComponent)
      },
      {
        title: RouteName.DocumentView,
        path: RoutePath.Document,
        loadComponent: () => import('./pages/main/pages/document/document.component').then((m) => m.DocumentComponent)
      },
      {
        title: RouteName.ReportView,
        path: RoutePath.Report,
        loadComponent: () => import('./pages/main/pages/report/report.component').then((m) => m.ReportComponent)
      },
      {
        title: RouteName.AccountView,
        path: RoutePath.Account,
        loadComponent: () => import('./pages/main/pages/account/account.component').then((m) => m.AccountComponent)
      },
      {
        title: RouteName.UserView,
        path: RoutePath.User,
        loadComponent: () => import('./pages/main/pages/user/user.component').then((m) => m.UserComponent)
      },
      {
        title: RouteName.SettingsView,
        path: RoutePath.Settings,
        loadComponent: () => import('./pages/main/pages/setting/setting.component').then((m) => m.SettingComponent)
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
