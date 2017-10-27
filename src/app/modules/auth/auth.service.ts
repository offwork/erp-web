import { Injectable } from '@angular/core';
import { URLSearchParams } from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SystemUser as User } from "../../shared/models/SystemUser";
import { AccessToken } from "../../shared/models/BaseModel";
import { SystemUserApi } from "../../shared/services/SystemUser";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  //private BASE_URL = 'http://192.168.0.105:8988/oauth/token';

  private user: User = new User();

  constructor(private userApi: SystemUserApi) {}

  /*login(credentials) {
    let headers = new HttpHeaders({
      ['Authorization']: 'Basic UFJPVklERVI6MTIzNDU2Nzg=',
      ['Content-Type']: 'application/x-www-form-urlencoded; charset=utf-8'});

    //let bodyData = `username=${credentials.username}&password=${credentials.password}&grant_type=${credentials.grant_type}`;
    let bodyData = new URLSearchParams();
    bodyData.append('username', credentials.username);
    bodyData.append('password', credentials.password);
    bodyData.append('grant_type', credentials.grant_type);

    return this.http.post(
      this.BASE_URL,
      bodyData.toString(),
      { headers: headers, observe:'body', responseType: 'text' })
      .map(res => { console.log('AUTH TOKEN: ', res) })
      .do(() => console.log('LOGIN!!!'))
      .catch(AuthService.getUserRequestsError);
  }*/
}
