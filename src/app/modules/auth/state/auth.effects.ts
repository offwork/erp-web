import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UIService } from '../../../core/ui';
import { SystemUserApi } from "../../../shared/services/SystemUser";

import { get } from 'lodash';

import * as auth from './auth.actions';

@Injectable()
export class UserEffects {

  @Effect({ dispatch: false })
  login: Observable<Action> = this.actions$
    .ofType<auth.Login>(auth.AUTH_LOGIN)
    .do(action => {
      this.userApi.login(action.payload)
        .subscribe(
          (success) => {
            if (success.type !== 0) {
              console.log('Login: ', success, '\n');
              this.store.dispatch(new auth.LoginSuccess(success));
            }
          },
          (error) => this.store.dispatch(new auth.LoginError(error))); });

  @Effect({ dispatch: false })
  loginError: Observable<Action> = this.actions$
    .ofType<auth.LoginError>(auth.AUTH_LOGIN_ERROR)
    .do((action) => this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message')));

  @Effect({ dispatch: false })
  loginSuccess: Observable<Action> = this.actions$
    .ofType<auth.LoginSuccess>(auth.AUTH_LOGIN_SUCCESS)
    .do((action) => {
      if (action.payload.type !== 0) {
        console.log('Login Success:', action, '\n');
        window.localStorage.setItem('token', JSON.stringify(action.payload));
        this.ui.toastSuccess('Oturum açma başarılı', `${get(action, 'payload.body.user.username')} olrak oturum açtın.`);
        return this.store.dispatch({ type: '[App] Redirect Router' });
      }
  });

  /*@Effect({ dispatch: false })
  register: Observable<Action> = this.actions$
    .ofType<auth.Register>(auth.AUTH_REGISTER)
    .do((action) => {
      this.userApi.create(action.payload)
        .subscribe(
          (success: any) => this.store.dispatch(new auth.RegisterSuccess({
            realm: action.payload.realm,
            email: action.payload.email,
            password: action.payload.password, })),
          (error) => this.store.dispatch(new auth.RegisterError(error))); });*/

  @Effect({ dispatch: false })
  registerSuccess: Observable<Action> = this.actions$
    .ofType<auth.RegisterSuccess>(auth.AUTH_REGISTER_SUCCESS)
    .do((action) => {
      this.ui.toastSuccess('Successfully registered', `${action.payload.email} has been created`);
      return this.store.dispatch(new auth.Login(action.payload)); });

  @Effect({ dispatch: false })
  registerError: Observable<Action> = this.actions$
    .ofType<auth.RegisterError>(auth.AUTH_REGISTER_ERROR)
    .do((action) => this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message')));


  @Effect({ dispatch: false })
  logout: Observable<Action> = this.actions$
    .ofType<auth.Logout>(auth.AUTH_LOGOUT)
    .do(() => {
      window.localStorage.removeItem('token');
      this.userApi.logout()
        .subscribe(
          (success) => this.store.dispatch(new auth.LogoutSuccess(success)),
          (error) => this.store.dispatch(new auth.LogoutError(error))); });

  @Effect({ dispatch: false })
  logoutError: Observable<Action> = this.actions$
    .ofType(auth.AUTH_LOGOUT_ERROR)
    .do((action) => {
      window.localStorage.removeItem('token');
      this.ui.toastError(get(action, 'payload.name'), get(action, 'payload.message'));
      return this.store.dispatch({ type: '[App] Redirect Router' }); });

  @Effect({ dispatch: false })
  logoutSuccess: Observable<Action> = this.actions$
    .ofType<auth.LogoutSuccess>(auth.AUTH_LOGOUT_SUCCESS)
    .do(() => {
      window.localStorage.removeItem('token');
      this.ui.toastSuccess('Log Out Successful', 'You are logged out');
      return this.store.dispatch({ type: '[App] Redirect Router' }); });

  /**
   *
   * @param {Actions} actions$
   * @param {Store<any>} store
   * @param {SystemUserApi} userApi
   * @param {UIService} ui
   */
  constructor(
      private actions$: Actions,
      private store: Store<any>,
      private userApi: SystemUserApi,
      private ui: UIService) {}
}
