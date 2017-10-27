import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UIService } from '../../core/ui';

@Injectable()
export class HasSystemAccess implements CanActivate {

  constructor(
    private store: Store<any>,
    private uiService: UIService) {}

  public canActivate(): Observable<boolean> {
    return this.store
      .select('auth')
      .map((res: any) => res.roles.assigned)
      .map((roles: any) => {
        if(roles.includes('system-admin')) {
          return true;
        }
        this.uiService.toastError('Access Denied', 'Your assigned roles do not allow access.');
        return true;
      })
      .take(1);
  }
}
