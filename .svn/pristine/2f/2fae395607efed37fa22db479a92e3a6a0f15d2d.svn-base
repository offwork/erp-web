import { NgModule } from '@angular/core';
import { UIModule } from '../../../core/ui';

import { PagesRoutingModule } from './pages-routing.module';

import { PagesService } from './pages.service';
import { PagesResolver } from './pages.resolvers';

import { PageComponent } from './components/page.component';
import { PageDetailComponent } from './components/page-detail.component';
import { PageFormComponent } from './components/page-form.component';
import { PageListComponent } from './components/page-list.component';

@NgModule({
  imports: [
    UIModule,
    PagesRoutingModule,
  ],
  declarations: [
    PageComponent,
    PageDetailComponent,
    PageFormComponent,
    PageListComponent,
  ],
  providers: [
    PagesService,
    PagesResolver,
  ],
})
export class PagesModule {}
