import { Injectable } from '@angular/core';
import { Resolve, 
  RouterStateSnapshot, 
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DomainsService } from './domains.service';

@Injectable()
export class DomainResolver implements Resolve<any> {

  constructor(private service: DomainsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}
