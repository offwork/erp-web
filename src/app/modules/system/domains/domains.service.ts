import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { FormService } from '../../../core/ui';

@Injectable()
export class DomainsService {

  public icon = 'icon-globe';

  constructor(private formService: FormService) {}

  setSelectedDomain(domain: any) {}

  getFormFields() {
    return [
      this.formService.input('id', {
        label: 'ID',
        placeholder: 'ID',
      }),
      this.formService.input('name', {
        label: 'Name',
        placeholder: 'Name',
      }),
      this.formService.email('email', {
        label: 'Email',
        placeholder: 'Email',
      }),
      this.formService.input('description', {
        label: 'Description',
        placeholder: 'Description',
      }),
    ];
  }

  getFormConfig() {
    return {
      icon: this.icon,
      fields: this.getFormFields(),
      showCancel: true,
      hasHeader: false,
    };
  }

  getItems(): Observable<any[]> { return null; }

  getItem(id): Observable<any> { return null; }

  getItemCount(): Observable<any> { return null; }

  upsertItem(item, successCb, errorCb): Subscription { return null; }

  upsertDomain(item, successCb, errorCb): Subscription { return null; }

  createDomain(item, successCb, errorCb): Subscription { return null; }

  deleteItem(item, successCb, errorCb): Subscription { return null; }
}
