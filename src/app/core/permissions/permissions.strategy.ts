import { AppModule } from './module.enum';

export interface PermissionStrategy {
  getAccessibleModules(): AppModule[];
  canAccess(module: AppModule): boolean;
}
