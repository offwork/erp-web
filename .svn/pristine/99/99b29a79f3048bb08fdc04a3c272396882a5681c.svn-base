import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  template: `<kl-ui-message [message]="'Redirecting.'"></kl-ui-message>`,
})
export class RouterComponent implements OnInit {

    constructor(private store: Store<any>) {}

    ngOnInit() {
        this.store
            .select('auth')
            .subscribe((res: any) => {
                return this.store.dispatch({ type: res.loggedIn ? '[App] Redirect Dashboard' : '[App] Redirect Login' });
            });
    }
}
