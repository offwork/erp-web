import { Component, Input } from '@angular/core';

@Component({
  styles: [`
    :host {
      text-align: center;
      color: #1976D2;
    }
    div.sk-three-bounce > div {
      background-color: rgb(14, 164, 197)!important;
    }
    div.sk-circle > div.sk-child::before {
      background-color: rgb(14, 164, 197)!important;
    }
    div.sk-fading-circle > div.sk-circle::before {
      background-color: rgb(14, 164, 197)!important;
    }
  `],
  template: `
    <div class="block-ui-template">
      <div *ngIf="message ===  'bounce'" class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
      </div>
      <div *ngIf="message === 'circle'" class="sk-circle">
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
      </div>
      <div *ngIf="message === 'fading'" class="sk-fading-circle">
        <div class="sk-circle1 sk-circle"></div>
        <div class="sk-circle2 sk-circle"></div>
        <div class="sk-circle3 sk-circle"></div>
        <div class="sk-circle4 sk-circle"></div>
        <div class="sk-circle5 sk-circle"></div>
        <div class="sk-circle6 sk-circle"></div>
        <div class="sk-circle7 sk-circle"></div>
        <div class="sk-circle8 sk-circle"></div>
        <div class="sk-circle9 sk-circle"></div>
        <div class="sk-circle10 sk-circle"></div>
        <div class="sk-circle11 sk-circle"></div>
        <div class="sk-circle12 sk-circle"></div>
      </div>
    </div>
  `
})

export class SpinnerTempComponent {
  constructor() {}
}
