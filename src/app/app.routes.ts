import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { ForgotPasswordComponent } from './pages/authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/authentication/reset-password/reset-password.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
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
