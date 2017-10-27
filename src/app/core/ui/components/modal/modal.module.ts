import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { UIModalFromComponent } from './modal-from.component';
import { UIModalComponent } from './modal.component';


@NgModule({
  imports: [
    CommonModule,
    ModalModule.forRoot(),
  ],
  exports: [
    UIModalFromComponent,
    UIModalComponent,
  ],
  declarations: [
    UIModalFromComponent,
    UIModalComponent,
  ],
})
export class UIModalModule {}
