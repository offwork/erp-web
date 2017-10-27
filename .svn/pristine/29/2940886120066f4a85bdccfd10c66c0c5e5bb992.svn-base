import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AdministrationService } from './admin.service';

@Injectable()
export class AdministrationResolvers implements Resolve<any> {

  constructor(private service: AdministrationService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}
