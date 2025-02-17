import { Routes } from '@angular/router';
import { authRoutes } from './pages/authentication/auth.routes';
import { mainRoutes } from './pages/main/main.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'auth', children: authRoutes },
  { path: 'dashboard', children: mainRoutes },
  { path: '**', redirectTo: 'dashboard' }
];
