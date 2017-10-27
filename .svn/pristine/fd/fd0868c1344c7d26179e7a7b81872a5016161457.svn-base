import {Injectable} from '@angular/core';

@Injectable()
export class StorageBrowser {

  get(key: string): any {
    let data: string = localStorage.getItem(key);
    return this.parse(data);
  }

  set(key: string, value: any): void {
    localStorage.setItem(
      key,
      typeof value === 'object' ? JSON.stringify(value) : value
    );
  }

  remove(key: string): void {
    localStorage[key] ? localStorage.removeItem(key) : console.log('Mevcut olmayan bir anahtarı kaldırmayı deniyorsunuz: ', key);
  }

  parse(value: any) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return value;
    }
  }
}
