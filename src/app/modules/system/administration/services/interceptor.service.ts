import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse } from "@angular/common/http";
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/do";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  private showSpinner: boolean;
  private token: any = {};

  constructor(private store: Store<any>) {
    this.store
      .select('layout')
      .subscribe(res => this.showSpinner = res.spinnerListen);

    if (window.localStorage.getItem('token')) {
      this.token = JSON.parse(window.localStorage.getItem('token'));
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.showSpinner = true;
    this.store.dispatch({ type: '[Layout] Spinner Listen', payload: this.showSpinner });
    const customReq = req.clone({
      headers: new HttpHeaders(
        {
          ['Content-Type']: 'application/json',
          ['Authorization']: `${this.token.body.token_type} ${this.token.body.access_token}`
        }
      )
    });
    return next.handle(customReq).do((event: any) => {
      if (event instanceof HttpResponse) {
        console.log('SUCCESS INTERCEPTOR: ', event);
        this.showSpinner = false;
        this.store.dispatch({ type: '[Layout] Spinner Listen', payload: this.showSpinner });
      }
    });
  }
}
