import { NgModule } from '@angular/core';
import { UIModule } from '../../core/ui';

import { SystemDashboardComponent } from './system.component';

import { SystemRoutingModule } from './system-routing.module';
import { HasSystemAccess } from './system.guards';

@NgModule({
  imports: [
    UIModule,
    SystemRoutingModule,
  ],
  declarations: [
    SystemDashboardComponent,
  ],
  providers: [
    HasSystemAccess,
  ],
  exports: [
    SystemDashboardComponent,
  ],
})
export class SystemModule { }
