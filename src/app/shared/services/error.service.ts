import {Injectable} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class ErrorHandler {

  public handleError(error: HttpErrorResponse): any {
    return Observable.throw(error.error || 'Internal Server Error!');
  }
}
