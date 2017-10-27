import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/observable/throw';

const BASE_URL: string = 'http://192.168.0.105:8190';
const TOKEN: string = 'f6e423e1-23d5-41c9-9fa6-f3748c685f40';

@Injectable()
export class SystemAdminService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({['Content-Type']: 'application/json', ['Authorization']: `bearer ${TOKEN}`});
  }

  getAllUsers(): Observable<HttpResponse<any>> {
    const request = new HttpRequest('GET', `${BASE_URL}/user/all`, null, { headers: this.headers, responseType: 'json'});
    return this.http.request(request)
      .map(res => res)
      .timeout(5000)
      .do(() => {SystemAdminService.systemAdminServiceDescription(request)})
      .catch(SystemAdminService.getUserRequestsError);
  }

  updateUser(user: any): Observable<HttpResponse<any>> {
    const request = new HttpRequest('PUT', `${BASE_URL}/user`, JSON.stringify(user), { headers: this.headers, responseType: 'json'});
    return this.http.request(request)
      .map(res => res)
      .do(() => {SystemAdminService.systemAdminServiceDescription(request)})
      .catch(SystemAdminService.getUserRequestsError);
  }

  addUser(user: any): Observable<HttpResponse<any>> {
    const request = new HttpRequest('POST', `${BASE_URL}/user`, JSON.stringify(user), { headers: this.headers, responseType: 'json'});
    return this.http.request(request)
      .map(res => res)
      .do(() => {SystemAdminService.systemAdminServiceDescription(request)})
      .catch(SystemAdminService.getUserRequestsError);
  }

  removeUser(id): Observable<HttpResponse<any>> {
    const request = new HttpRequest('DELETE', `${BASE_URL}/user/${id}`, null, { headers: this.headers, responseType: 'json'});
    return this.http.request(request)
      .map(res => res)
      .do(() => {SystemAdminService.systemAdminServiceDescription(request)})
      .catch(SystemAdminService.getUserRequestsError);
  }

  private static getUserRequestsError (err) {
    console.log('Error is ', err);
    return Observable.throw(err);
  }

  public static systemAdminServiceDescription(req?: HttpRequest<any>): HttpRequest<any> {
    return req;
  }
}
