import { Injectable } from '@angular/core';
import { FormService } from '../../../core/ui';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class PagesService {

  constructor() {}

  setSelectedPage(page: any) {}

  getFormFields() { return null; }

  getFormConfig() { return null; }

  getFiles() { }

  getItems(): Observable<any[]> { return null; }

  getItem(id): Observable<any> { return null; }

  getItemCount(): Observable<any> { return null; }

  upsertItem(item, successCb, errorCb): Subscription { return null; }

  upsertPage(item, successCb, errorCb): Subscription { return null; }

  createPage(item, successCb, errorCb): Subscription { return null; }

  deleteItem(item, successCb, errorCb): Subscription { return null; }
}
