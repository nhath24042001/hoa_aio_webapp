import { AppModule } from './module.enum';
import { PermissionStrategy } from './permissions.strategy';

export class BoardPermissionStrategy implements PermissionStrategy {
  private readonly allowedModules: AppModule[] = [
    AppModule.OVERVIEW,
    AppModule.CALENDAR,
    AppModule.VIOLATION_REPORT,
    AppModule.PROJECT,
    AppModule.ACCOUNTING,
    AppModule.HOME_OWNER,
    AppModule.DOCUMENT,
    AppModule.REPORT
  ];

  getAccessibleModules(): AppModule[] {
    return this.allowedModules;
  }

  canAccess(module: AppModule): boolean {
    return this.allowedModules.includes(module);
  }
}
