import { Inject, Injectable, Optional } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from "@angular/common/http";
import { SDKModels } from "../models/SDKModels";
import { KalemAuth } from "./auth.service";
import { JSONSearchParams } from "./search.params";
import { ErrorHandler } from "./error.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export abstract class BaseKalemApi {

  protected path: string;
  protected model: any;

  constructor(@Inject(HttpClient) protected http: HttpClient,
              @Inject(SDKModels) protected models: SDKModels,
              @Inject(KalemAuth) protected auth: KalemAuth,
              @Inject(JSONSearchParams) protected searchParams: JSONSearchParams,
              @Optional() @Inject(ErrorHandler) protected errorHandler: ErrorHandler,) {
    this.model = this.models.get(this.getModelName())
  }

  public request(method: string, url: string, bodyParams: any = {}, pubsub: boolean = false): Observable<any> {
    let headers: HttpHeaders;
    let params;
    //console.info('BASE_SERVICE: \nMETHOD: ', method, '\nURL: ', url, '\nBODY: ', bodyParams, '\nPUBSUB: ', pubsub);
    if (!pubsub) {
      this.searchParams.setJSON(bodyParams);
      headers = new HttpHeaders({
        ['Authorization']: 'Basic UFJPVklERVI6MTIzNDU2Nzg=',
        ['Content-Type']: 'application/x-www-form-urlencoded; charset=utf-8'});
      /**
       * Authenticate request
       * this.authenticate(url, headers);
       */
      if (Object.keys(bodyParams).length > 0) {
        if (method === 'POST') {
          params = this.searchParams.getURLSearchParams().toString();
        } else {
          params = JSON.stringify(bodyParams);
        }
      }
    } else {
      headers = new HttpHeaders({['Content-Type']: 'application/json'});
      if (Object.keys(bodyParams).length > 0) {
        params = new HttpParams(bodyParams);
      } else {
        params = null;
      }
    }

    let request = new HttpRequest(
      method,
      url,
      params,
      {
        headers: headers,
      }
    );
    //console.info('=========================\n','REQUEST: ', request);
    return this.http.request(request)
      .map(res => res)
      .catch((e) => this.errorHandler.handleError(e));
  }

  /*public authenticate<T>(url: string, headers: HttpHeaders): void {
    if (this.auth.getAccessTokenId()) {
      headers.append('Authorization', 'Basic UFJPVklERVI6MTIzNDU2Nzg=');
    } else {
      headers.append('Content-Type', 'application/json');
      headers.append( 'Authorization', 'bearer TOKEN');
    }
  }*/

  abstract getModelName(): string;
}
