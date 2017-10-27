import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { BsModalService } from 'ngx-bootstrap/modal';

import { UIModule } from '../../core/ui';

import { ContentDashboardComponent } from './content.component';
import { HasContentAccess } from './content.guards';
import { DomainResolver } from './content.resolvers';
import { ContentRoutingModule } from './content-routing.module';

import { ContentService } from './content.service';

@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    UIModule,
    ButtonsModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    TabsModule,
    ContentRoutingModule,
  ],
  declarations: [
    ContentDashboardComponent,
  ],
  exports: [
    ContentDashboardComponent,
  ],
  providers: [
    BsModalService,
    HasContentAccess,
    DomainResolver,
    ContentService,
  ],
  entryComponents: []
})
export class ContentModule {}
