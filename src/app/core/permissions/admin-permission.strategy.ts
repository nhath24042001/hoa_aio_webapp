import { AppModule } from './module.enum';
import { PermissionStrategy } from './permissions.strategy';

export class AdminPermissionStrategy implements PermissionStrategy {
  private readonly allowedModules: AppModule[] = [
    AppModule.OVERVIEW,
    AppModule.TASK,
    AppModule.DOCUMENT,
    AppModule.REPORT,
    AppModule.USER,
    AppModule.SETTINGS
  ];

  getAccessibleModules(): AppModule[] {
    return this.allowedModules;
  }

  canAccess(module: AppModule): boolean {
    return this.allowedModules.includes(module);
  }
}
