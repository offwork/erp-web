import { Action } from '@ngrx/store';

export const AUTH_LOGIN                 = '[Auth] Login';
export const AUTH_LOGIN_ERROR           = '[Auth] Login Error';
export const AUTH_LOGIN_SUCCESS         = '[Auth] Login Success';

export const AUTH_LOGOUT                = '[Auth] Logout';
export const AUTH_LOGOUT_ERROR          = '[Auth] Logout Error';
export const AUTH_LOGOUT_SUCCESS        = '[Auth] Logout Success';

export const AUTH_PASS_REQUEST          = '[Auth] Password Request';
export const AUTH_PASS_REQUEST_ERROR    = '[Auth] Password Request Error';
export const AUTH_PASS_REQUEST_SUCCESS  = '[Auth] Password Request Success';

export const AUTH_PASS_VERIFY           = '[Auth] Password Verify';
export const AUTH_PASS_VERIFY_ERROR     = '[Auth] Password Verify Error';
export const AUTH_PASS_VERIFY_SUCCESS   = '[Auth] Password Verify Success';

export const AUTH_REGISTER              = '[Auth] Register';
export const AUTH_REGISTER_ERROR        = '[Auth] Register Error';
export const AUTH_REGISTER_SUCCESS      = '[Auth] Register Success';

interface Credentials {
  realm: string;
  email: string;
  password: string;
}

/** LOGIN **/
export class Login implements Action {
  readonly type = AUTH_LOGIN;
  constructor(public payload: Credentials) {}
}

export class LoginError implements Action {
  readonly type = AUTH_LOGIN_ERROR;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AUTH_LOGIN_SUCCESS;
  constructor(public payload: any) {}
}

/** LOGOUT **/
export class Logout implements Action {
  readonly type = AUTH_LOGOUT;
  constructor(public payload: any = {}) {}
}

export class LogoutError implements Action {
  readonly type = AUTH_LOGOUT_ERROR;
  constructor(public payload: any = {}) {}
}

export class LogoutSuccess implements Action {
  readonly type = AUTH_LOGOUT_SUCCESS;
  constructor(public payload: any = {}) {}
}

/** PASSWORD REQUEST **/
export class PasswordRequest implements Action {
  readonly type = AUTH_PASS_REQUEST;
  constructor(public payload: any) {}
}

export class PasswordRequestError implements Action {
  readonly type = AUTH_PASS_REQUEST_ERROR;
  constructor(public payload: any) {}
}

export class PasswordRequestSuccess implements Action {
  readonly type = AUTH_PASS_REQUEST_SUCCESS;
  constructor(public payload: any) {}
}

/** PASSWORD VERIFY **/
export class PasswordVerify implements Action {
  readonly type = AUTH_PASS_VERIFY;
  constructor(public payload: any) {}
}

export class PasswordVerifyError implements Action {
  readonly type = AUTH_PASS_VERIFY_ERROR;
  constructor(public payload: any) {}
}

export class PasswordVerifySuccess implements Action {
  readonly type = AUTH_PASS_VERIFY_SUCCESS;
  constructor(public payload: any) {}
}

/** PASSWORD VERIFY **/
export class Register implements Action {
  readonly type = AUTH_REGISTER;
  constructor(public payload: any) {}
}

export class RegisterError implements Action {
  readonly type = AUTH_REGISTER_ERROR;
  constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
  readonly type = AUTH_REGISTER_SUCCESS;
  constructor(public payload: any) {}
}

export type Actions
  = Login
  | LoginError
  | LoginSuccess
  | Logout
  | LogoutError
  | LogoutSuccess
  | PasswordRequest
  | PasswordRequestError
  | PasswordRequestSuccess
  | PasswordVerify
  | PasswordVerifyError
  | PasswordVerifySuccess
  | Register
  | RegisterError
  | RegisterSuccess;
