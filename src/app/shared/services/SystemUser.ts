import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { SystemUser } from '../models/SystemUser';
import { BaseKalemApi } from "./base.service";
import { SDKModels } from "../models/SDKModels";
import { KalemAuth } from "./auth.service";
import { JSONSearchParams } from './search.params';
import { ErrorHandler } from "./error.service";
import { KalemConfig } from "../kl.config";
import { AccessToken } from "../models/BaseModel";

@Injectable()
export class SystemUserApi extends BaseKalemApi {

  constructor(@Inject(HttpClient) protected http: HttpClient,
              @Inject(SDKModels) protected models: SDKModels,
              @Inject(KalemAuth) protected auth: KalemAuth,
              @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
              @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler,) {
    super(http, models, auth, searchParams, errorHandler);
  }

  public login(credentials): Observable<any> {
    const _method = 'POST';
    const _url = KalemConfig.getPath() + '/oauth/token';
    let _postBody = {
      user: credentials,
      rememberMe: true,
    };

    let result = this.request(_method, _url, credentials, false)
      .map((response: any) => {
        if ( response.hasOwnProperty('status') ) {
          if (response.status === 200) {
            //console.log('ACCESS TOKEN: ', response['body']);
            this.auth.setToken(Object.assign(response['body'], _postBody));
          }
        }
        return response;
      });

    return result;
  }

  public logout(customHeaders?: Function): Observable<any> {
    return Observable.of(this.auth.getToken());
  }

  public resetPassword(options: any, customHeaders?: Function): Observable<any> {
    return null;
  }

  public changePassword(oldPassword: any, newPassword: any, customHeaders?: Function): Observable<any> {
    return null;
  }

  public setPassword(newPassword: any, customHeaders?: Function): Observable<any> {
    return null;
  }

  public getCurrentToken(): AccessToken {
    return this.auth.getToken();
  }

  public isAuthenticated() {
    return !(this.getCurrentId().access_token === '' ||
      this.getCurrentId().access_token == null ||
      this.getCurrentId().access_token == 'null');
  }

  public getCurrentId() {
    return this.auth.getToken();
  }

  public getModelName() {
    return "SystemUser";
  }
}
