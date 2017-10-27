import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppAdministrationComponent } from './components/app/app-admin.component';
import { IndexAdministrationComponent } from './components/index-admin.component';
import { ITAdministrationComponent } from './components/it/it-admin.component';

const routes: Routes = [{
  path: '',
  data: { title: 'Administration' },
  children: [
    { path: '',
      component: IndexAdministrationComponent,
      children: [
        { path: '', redirectTo: 'information', pathMatch: 'full' },
        { path: 'information', component: ITAdministrationComponent },
        { path: 'application', component: AppAdministrationComponent },
      ],
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
