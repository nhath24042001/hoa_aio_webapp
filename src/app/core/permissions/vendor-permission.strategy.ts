import { AppModule } from './module.enum';
import { PermissionStrategy } from './permissions.strategy';

export class VendorPermissionStrategy implements PermissionStrategy {
  private readonly allowedModules: AppModule[] = [AppModule.OVERVIEW, AppModule.TASK];

  getAccessibleModules(): AppModule[] {
    return this.allowedModules;
  }

  canAccess(module: AppModule): boolean {
    return this.allowedModules.includes(module);
  }
}
