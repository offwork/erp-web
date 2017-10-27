import { AfterViewInit, Component } from '@angular/core';
import {Store} from "@ngrx/store";

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { SpinnerTempComponent } from './spinner-temp.component';

@Component({
  template: `
    <block-ui [template]="blockTemplate">
      <kl-layout-header></kl-layout-header>
      <div class="app-body">
        <kl-layout-sidebar></kl-layout-sidebar>
        <kl-layout-main></kl-layout-main>
        <kl-aside></kl-aside>
      </div>
      <kl-layout-footer></kl-layout-footer>
    </block-ui>
  `,
  styles: [`
    kl-layout-main {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 100%;
      min-height: calc(100vh - 105px);
    }
  `],
})

export class FullLayoutComponent implements AfterViewInit {
  @BlockUI() blockUI: NgBlockUI;
  blockTemplate: SpinnerTempComponent = SpinnerTempComponent;

  constructor(private store: Store<any>) {}

  ngAfterViewInit() {
    this.store
      .select('layout')
      .subscribe(
        (res: any) => {
          // res.spinnerListen ? this.blockUI.start('fading') : this.blockUI.stop();
          if ( res.spinnerListen ) {
            this.blockUI.start('bounce');
            setTimeout(() => { this.blockUI.stop(); }, 5000);
          } else {
            this.blockUI.stop();
          }
        }
      );
  }
}
