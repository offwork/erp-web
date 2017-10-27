import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap';

import { UIButtonsComponent } from './buttons.component';

@NgModule({
  declarations: [
    UIButtonsComponent,
  ],
  exports: [
    UIButtonsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class UIButtonsModule {}
