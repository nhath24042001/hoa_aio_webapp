import { Injectable } from '@angular/core';

import { AdminPermissionStrategy } from './admin-permission.strategy';
import { BoardPermissionStrategy } from './board.permission.strategy';
import { ManagerPermissionStrategy } from './manager-permission.strategy';
import { PermissionStrategy } from './permissions.strategy';
import { UserRole } from './role.enum';
import { VendorPermissionStrategy } from './vendor-permission.strategy';

@Injectable({ providedIn: 'root' })
export class PermissionFactory {
  getStrategy(role: UserRole): PermissionStrategy {
    switch (role) {
      case UserRole.ADMIN:
        return new AdminPermissionStrategy();
      case UserRole.VENDOR:
        return new VendorPermissionStrategy();
      case UserRole.BOARD:
        return new BoardPermissionStrategy();
      case UserRole.MANAGER:
        return new ManagerPermissionStrategy();

      default:
        throw new Error(`No permission strategy found for role: ${role}`);
    }
  }
}
