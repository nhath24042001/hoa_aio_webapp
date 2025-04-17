import { AppModule } from './module.enum';
import { PermissionStrategy } from './permissions.strategy';

export class ManagerPermissionStrategy implements PermissionStrategy {
  private readonly allowedModules: AppModule[] = [
    AppModule.OVERVIEW,
    AppModule.CALENDAR,
    AppModule.TASK,
    AppModule.VIOLATION_REPORT,
    AppModule.PROJECT,
    AppModule.ACCOUNTING,
    AppModule.ACCOUNTING,
    AppModule.HOME_OWNER,
    AppModule.DOCUMENT,
    AppModule.REPORT,
    AppModule.VENDOR
  ];

  getAccessibleModules(): AppModule[] {
    return this.allowedModules;
  }

  canAccess(module: AppModule): boolean {
    return this.allowedModules.includes(module);
  }
}
