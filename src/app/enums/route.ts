export enum RouteName {
  OverviewView = 'Overview',
  AnnouncementView = 'Announcement',
  CalendarView = 'Calendar',
  TaskManagementView = 'TaskManagement',
  ProjectView = 'Project',
  VendorView = 'Vendor',
  ViolationReportView = 'ViolationReport',
  AccountingView = 'Accounting',
  HomeOwnerView = 'HomeOwner',
  DocumentView = 'Document',
  ReportView = 'Report',
  UserView = 'User',
  SettingsView = 'Settings',
  AccountView = 'Account',
  LoginView = 'Login',
  ForgotPasswordView = 'ForgotPassword',
  ResetPasswordView = 'ResetPassword',
  SetNewPasswordView = 'SetNewPassword',
  NotFoundView = 'NotFound',
  ErrorView = 'Error'
}

export const RoutePath: RoutePathType = {
  [RouteName.OverviewView]: 'overview',
  [RouteName.AnnouncementView]: 'announcements',
  [RouteName.CalendarView]: 'calendar',
  [RouteName.TaskManagementView]: 'task-management',
  [RouteName.ProjectView]: 'projects',
  [RouteName.VendorView]: 'vendors',
  [RouteName.ViolationReportView]: 'violation-reports',
  [RouteName.AccountingView]: 'accounting',
  [RouteName.HomeOwnerView]: 'home-owners',
  [RouteName.DocumentView]: 'documents',
  [RouteName.ReportView]: 'reports',
  [RouteName.UserView]: 'users',
  [RouteName.SettingsView]: 'settings',
  [RouteName.AccountView]: 'my-account',
  [RouteName.LoginView]: 'login',
  [RouteName.ForgotPasswordView]: 'forgot-password',
  [RouteName.ResetPasswordView]: 'reset-password',
  [RouteName.SetNewPasswordView]: 'set-new-password',
  [RouteName.NotFoundView]: '**',
  [RouteName.ErrorView]: '**'
};

export type RoutePathType = { [key in RouteName]: string };
