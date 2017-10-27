import { Injectable } from '@angular/core';
import { 
  Resolve, 
  RouterStateSnapshot, 
  ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SettingsService } from './settings.service';

@Injectable()
export class SettingResolver implements Resolve<any> {

  constructor(private service: SettingsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}
