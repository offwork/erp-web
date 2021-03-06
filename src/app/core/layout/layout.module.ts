import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BlockUIModule } from 'ng-block-ui';

// Components
import { AsideComponent } from './components/aside/aside.components'
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderDomainsComponent } from './components/header/header-domains.component';
import { HeaderNavComponent } from './components/header/header-nav.component';
import { HeaderUserComponent } from './components/header/header-user.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SpinnerTempComponent } from './components/layout/spinner-temp.component';
import { SimpleLayoutComponent } from './components/layout/simple-layout.component';
import { FullLayoutComponent } from './components/layout/full-layout.component';

// Directives
import { AsideToggleDirective } from './directives/aside/aside.directives';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav/nav.directives';
import {
  MobileSidebarToggleDirective,
  SidebarToggleDirective,
  SidebarMinimizeDirective,
  SidebarOffCanvasCloseDirective } from './directives/sidebar/sidebar.directives';

export const components: any[] = [
  AsideComponent,
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
  HeaderDomainsComponent,
  HeaderNavComponent,
  HeaderUserComponent,
  MainComponent,
  SidebarComponent,
  SimpleLayoutComponent,
  FullLayoutComponent,
  SpinnerTempComponent,
];

export const directives: any[] = [
  AsideToggleDirective,
  MobileSidebarToggleDirective,
  NavDropdownDirective,
  NavDropdownToggleDirective,
  SidebarToggleDirective,
  SidebarMinimizeDirective,
  SidebarOffCanvasCloseDirective,
];

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    BlockUIModule,
    RouterModule,
  ],
  exports: [
    ...components,
    ...directives,
  ],
  declarations: [
    ...components,
    ...directives,
  ],
  entryComponents: [ SpinnerTempComponent ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class LayoutModule { }
