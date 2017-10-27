import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UIModule } from '../../../core/ui';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';

import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { AdministrationRoutingModule } from './admin-routing.module';
import { AdministrationService } from './admin.service';
import { AddContentService } from './services/add-content.service';
import { SystemAdminService } from './services/system-admin.service';
import { InterceptorService } from './services/interceptor.service';

import { AppAdministrationComponent } from './components/app/app-admin.component';
import { IndexAdministrationComponent } from './components/index-admin.component';
import { ITAdministrationComponent } from './components/it/it-admin.component';
import { NavsContentComponent } from './components/it/navs-content.component';

import { CellActionComponent } from './components/it/views/cell-action.component';

import {
  BranchesComponent,
  CompaniesComponent,
  StoresComponent,
  UserRolesComponent,
  UsersComponent,
  ZonesComponent } from './components/it';

import { NavContentDirective } from './directives/nav-content.directive';
import { RefreshGridDirective } from './directives/refresh-grid.directive';

@NgModule({
  imports: [
    WjCoreModule,
    WjGridModule,
    WjGridFilterModule,
    WjInputModule,
    ButtonsModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    FormsModule,
    HttpClientModule,
    UIModule,
    AdministrationRoutingModule,
  ],
  declarations: [
    NavContentDirective,
    RefreshGridDirective,
    AppAdministrationComponent,
    IndexAdministrationComponent,
    ITAdministrationComponent,
    NavsContentComponent,
    BranchesComponent,
    CompaniesComponent,
    StoresComponent,
    UserRolesComponent,
    UsersComponent,
    ZonesComponent,
    CellActionComponent,
  ],
  providers: [
    AdministrationService,
    AddContentService,
    SystemAdminService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  entryComponents: [
    BranchesComponent,
    CompaniesComponent,
    StoresComponent,
    UserRolesComponent,
    UsersComponent,
    ZonesComponent,
    CellActionComponent,
  ]
})
export class SystemAdminModule {}
