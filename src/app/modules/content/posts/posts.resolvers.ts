import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PostsService } from './posts.service';

@Injectable()
export class PostsResolver implements Resolve<any> {

  constructor(private service: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.service.getItem(route.params.id);
  }
}
