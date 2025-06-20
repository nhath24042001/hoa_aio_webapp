import { Injectable } from '@angular/core';

import { AppModule } from './module.enum';
import { PermissionFactory } from './permissions.factory';
import { UserRole } from './role.enum';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  constructor(private factory: PermissionFactory) {}

  getAccessibleModules(role: UserRole): AppModule[] {
    const strategy = this.factory.getStrategy(role);
    return strategy.getAccessibleModules();
  }

  canAccess(role: UserRole, module: AppModule): boolean {
    const strategy = this.factory.getStrategy(role);
    return strategy.canAccess(module);
  }
}
