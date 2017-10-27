import { Action } from '@ngrx/store';
 
export const LAYOUT_HEADER_NAV      = '[Layout] Header Nav';
export const LAYOUT_FOOTER_LEFT     = '[Layout] Footer Left';
export const LAYOUT_FOOTER_RIGHT    = '[Layout] Footer Right';
export const LAYOUT_SIDEBAR_NAV     = '[Layout] Sidebar Nav';

export class HeaderNav implements Action {
    readonly type = LAYOUT_HEADER_NAV;
    constructor(public payload: any) { }
}
  
export class FooterLeft implements Action {
  readonly type = LAYOUT_FOOTER_LEFT;
  constructor(public payload: any) { }
}
  
export class FooterRight implements Action {
  readonly type = LAYOUT_FOOTER_RIGHT;
  constructor(public payload: any) { }
}
  
export class SidebarNav implements Action {
  readonly type = LAYOUT_SIDEBAR_NAV;
  constructor(public payload: any) { }
}

export type Actions
    = HeaderNav
    | FooterLeft
    | FooterRight
    | SidebarNav;
