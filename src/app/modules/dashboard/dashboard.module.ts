import { NgModule } from '@angular/core';
import { UIModule } from '../../core/ui';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';

import { ContentModule } from '../content';
import { SystemModule } from '../system';

import { AboutComponent } from './components/about/about.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexComponent } from './components/index/index.component';
import { PasswordComponent } from './components/password/password.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  imports: [
    UIModule,
    DashboardRoutingModule,
    ContentModule,
    SystemModule,
  ],
  declarations: [
    AboutComponent,
    DashboardComponent,
    IndexComponent,
    PasswordComponent,
    ProfileComponent,
  ],
  providers: [
    DashboardService,
  ]
})
export class DashboardModule { }
