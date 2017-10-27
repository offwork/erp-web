import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class ProductsService {

  constructor() {}

  setSelectedProduct(event: any) {}

  getFormFields() { return null; }

  getFormConfig() { return null; }

  getFiles() {}

  getItems(): Observable<any[]> { return null; }

  getItem(id): Observable<any> { return null; }

  getItemCount(): Observable<any> { return null; }

  upsertItem(item, successCb, errorCb): Subscription { return null; }

  upsertProduct(item, successCb, errorCb): Subscription { return null; }

  createProduct(item, successCb, errorCb): Subscription { return null; }

  deleteItem(item, successCb, errorCb): Subscription { return null; }
}
