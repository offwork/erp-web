import { Injectable } from '@angular/core'
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { EventsService } from './events.service';

@Injectable()
export class EventsResolver implements Resolve<any> {
  
  constructor(private service: EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}