import {Injectable} from '@angular/core';
import {URLSearchParams} from "@angular/http";

@Injectable()
export class JSONSearchParams {

  private _usp: URLSearchParams;

  public setJSON(obj: any) {
    this._usp = new URLSearchParams(this._JSON2URL(obj, false));
  }

  public getURLSearchParams(): URLSearchParams {
    return this._usp;
  }

  private _JSON2URL(obj: any, prnt: any) {
    let parts: any = [];
    for (let k in obj) {
      parts.push(this._parseParam(k, obj[k], prnt));
    }
    return parts.join('&');
  }

  private _parseParam(key: string, value: any, parent: string) {
    let processedKey = parent ? parent + '[' + key + ']' : key;
    if (value && (<string>(typeof value) === 'object' || Array.isArray(value))) {
      return this._JSON2URL(value, processedKey);
    }
    return processedKey + '=' + value;
  }
}
