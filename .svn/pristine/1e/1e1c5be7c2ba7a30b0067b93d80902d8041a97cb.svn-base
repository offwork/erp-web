import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ProductsService } from './products.service';

@Injectable()
export class ProductsResolver implements Resolve<any> {

  constructor(private service: ProductsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}
