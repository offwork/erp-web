import {Injectable} from '@angular/core';

export interface CookieInterface { [key: string]: any }

@Injectable()
export class CookieBrowser {

  private cookies: CookieInterface = {};

  get(key: string): any {
    if (!this.cookies[key]) {
      let cookie = window.document
        .cookie.split('; ')
        .filter((item: any) => item.split('=')[0] === key).pop();

      if (!cookie) return null;

      this.cookies[key] = this.parse(cookie.split('=').slice(1).join('='));
    }
  }

  set(key: string, value: any, expires?: Date): void {
    this.cookies[key] = value;
    window.document.cookie = `${key}=${value}; path=/${expires ? `; expires=${ expires.toUTCString() }` : ''}`;
  }

  remove(key: string): void {
    document.cookie = key + '=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    delete this.cookies[key];
  }

  parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
