import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { ExtensionsRoutingModule } from './extensions-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    TabsModule.forRoot(),
    ExtensionsRoutingModule,
  ],
  exports: [
    CommonModule,
    ButtonsModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    TabsModule,
  ]
})
export class ExtensionsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExtensionsModule
    };
  }
}
