import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

const moduleName    = 'auth';
const moduleConfig  = {
    name            : 'Auth',
    icon            : 'icon-lock',
    topLinks        : [],
    sidebarLinks    : [],
    dashboardLinks  : {},
};

@NgModule({})
export class AuthConfigModule {
  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: '[App] Load Module', payload: { moduleName, moduleConfig } });
  }
}
