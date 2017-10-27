import { Action } from '@ngrx/store';

export const APP_LOAD_MODULE        = '[App] Load Module';
export const APP_RELOAD             = '[App] Reload';
export const APP_DOMAIN_ADD         = '[App] Domain Add';
export const APP_DOMAIN_SELECT      = '[App] Domain Select';
export const APP_DOMAIN_SET         = '[App] Domain Set';
export const APP_SETTING_ADD        = '[App] Setting Add';
export const APP_REDIRECT_DASHBOARD = '[App] Redirect Dashboard';
export const APP_REDIRECT_LOGIN     = '[App] Redirect Login';
export const APP_REDIRECT_ROUTER    = '[App] Redirect Router';
export const APP_CONTENT_DASHBOARD  = '[App] Content Dashboard';
export const APP_SYSTEM_DASHBOARD   = '[App] System Dashboard';


export class LoadModule implements Action {
    readonly type = APP_LOAD_MODULE;
    constructor(public payload: any) { }
}

export class Reload implements Action {
    readonly type = APP_RELOAD;
    constructor(public payload?: any) { }
}

export class DomainAdd implements Action {
    readonly type = APP_DOMAIN_ADD;
    constructor(public payload: any) { }
}

export class DomainSelect implements Action {
    readonly type = APP_DOMAIN_SELECT;
    constructor(public payload: any) { }
}

export class DomainSet implements Action {
    readonly type = APP_DOMAIN_SET;
    constructor(public payload: any) { }
}
  
export class AddSetting implements Action {
    readonly type = APP_SETTING_ADD;
    constructor(public payload: any) { }
}

export class RedirectDashboard implements Action {
    readonly type = APP_REDIRECT_DASHBOARD;
    constructor(public payload: any) { }
}

export class RedirectLogin implements Action {
    readonly type = APP_REDIRECT_LOGIN;
    constructor(public payload: any) { }
}

export class RedirectRouter implements Action {
    readonly type = APP_REDIRECT_ROUTER;
    constructor(public payload: any) { }
}

export class ContentDashboard implements Action {
    readonly type = APP_CONTENT_DASHBOARD;
    constructor(public payload: any) { }
}

export class SystemDashboard implements Action {
    readonly type = APP_SYSTEM_DASHBOARD;
    constructor(public payload: any) { }
}

export type Actions
    = LoadModule
    | Reload
    | DomainAdd
    | DomainSelect
    | DomainSet
    | AddSetting
    | RedirectDashboard
    | RedirectLogin
    | RedirectRouter
    | ContentDashboard
    | SystemDashboard;
