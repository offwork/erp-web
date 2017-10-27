import { Injectable } from '@angular/core';
import { FormService } from '../../core/ui';

@Injectable()
export class DashboardService {

  constructor(private formService: FormService) { }

  public formConfigPassword() {
    return {
      fields: [
        this.formService.password('password', {
          label: 'Password',
          placeholder: 'Must be at least 5 chrachters',
        }),
        this.formService.password('password', {
          label: 'Confirm Password',
          placeholder: 'Re-enter the password to confirm',
        }),
      ],
      showCancel: false,
      hasHeader: false,
    };
  }

  public formConfigProfile() {
    return {
      fields: [
        this.formService.input('firstName', {
          label: 'First Name',
          placeholder: 'First Name',
        }),
        this.formService.input('lastName', {
          label: 'Last Name',
          placeholder: 'Last Name',
        }),
        this.formService.email('email', {
          label: 'Email Address',
          placeholder: 'Email Address',
        }),
      ],
      showCancel: false,
      hasHeader: false,
    };
  }

  upsertItem(item, successCb, errorCb) { return null; }
}