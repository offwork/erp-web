import {Component, Input} from '@angular/core';

@Component({
  selector: 'kl-ui-message',
  template: `
    <div class="app flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card">
            <div class="card-header">
              <kl-ui-logo></kl-ui-logo>
            </div>
            <div class="card-body">
              <h3 *ngIf="message" class="my-3 text-xs-center">{{message}}</h3>
              <ng-content></ng-content>
            </div>
            <div class="copyright"> 2017 © Kalem Yazılım</div>
          </div>
        </div>
      </div>
    </div>
    <div class="backstretch">
      <img src="../../../../../assets/img/bg.jpg">
    </div>
  `,
  styles: [`
    .card {
      background-color: transparent !important;
      border: none !important;
    }

    .copyright {
      text-align: center;
      margin: 0 auto;
      padding: 10px;
      color: #eee;
      font-size: 13px
    }

    .card-header {
      background: transparent !important;
      border: none !important;
      max-width: 360px;
      min-width: 360px;
    }

    .card-body {
      background-color: rgba(0, 25, 41, 0.36);
      max-width: 360px;
      min-width: 360px;
    }
    .backstretch {
      background-repeat: no-repeat;
      left: 0;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      z-index: -999999;
      position: fixed;
    }
    .backstretch > img {
      width: 100%;
      height: 100%;
    }
  `]
})

export class UIMessageComponent {
  @Input() public message: string = null;
}
