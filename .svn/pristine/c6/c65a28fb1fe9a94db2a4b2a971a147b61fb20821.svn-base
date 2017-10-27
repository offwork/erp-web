import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as auth from '../../state/auth.actions';

@Component({
    template: `<kl-ui-message [message]="'You are being logged out.'"></kl-ui-message>`,
})

export class LogoutComponent {
  constructor(private store: Store<any>) {
    this.store.dispatch(new auth.Logout());
  }
}
