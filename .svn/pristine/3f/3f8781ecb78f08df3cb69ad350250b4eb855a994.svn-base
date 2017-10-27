import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

import * as app from './app.actions';

@Injectable()
export class AppEffects {

    @Effect({ dispatch: false })
    loadModule$: Observable<Action> = this.actions$
        .ofType<app.LoadModule>(app.APP_LOAD_MODULE)
        .do(action => {
            const { moduleConfig } = action.payload;
            moduleConfig.topLinks.forEach(payload => this.store.dispatch({ type: '[Layout] Header Nav', payload }));
            moduleConfig.sidebarLinks.forEach(payload => this.store.dispatch({ type: '[Layout] Sidebar Nav', payload }));

            if (moduleConfig.dashboardLinks.content) {
                moduleConfig.dashboardLinks.content
                    .forEach(payload => this.store.dispatch({ type: '[App] Content Dashboard', payload }));
            }

            if (moduleConfig.dashboardLinks.system) {
                moduleConfig.dashboardLinks.system
                    .forEach(payload => this.store.dispatch({ type: '[App] System Dashboard', payload }));
            }
        });

    @Effect({ dispatch: false })
    domainsAdd$: Observable<Action> = this.actions$
        .ofType(app.APP_DOMAIN_ADD)
        .do((action: app.DomainAdd) => { return { type: '[Auth] Realms Add', payload: action.payload } });

    @Effect({ dispatch: false })
    domainsSelect$: Observable<Action> = this.actions$
        .ofType(app.APP_DOMAIN_SELECT)
        .do(action => this.store.dispatch({ type: '[App] Reload' }));

    @Effect({ dispatch: false })
    redirectDashboard: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_DASHBOARD)
        .do(() => this.router.navigate(['/', 'dashboard']));

    @Effect({ dispatch: false })
    redirectLogin: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_LOGIN)
        .do(() => this.router.navigate(['/', 'login']));

    @Effect({ dispatch: false })
    redirectRouter: Observable<Action> = this.actions$
        .ofType(app.APP_REDIRECT_ROUTER)
        .do(() => this.router.navigate(['/', 'router']));

    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<any>) { }
}
