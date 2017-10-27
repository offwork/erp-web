
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kl-layout-header-nav',
  template: `
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item px-1" *ngFor="let item of items">
        <a class="nav-link" routerLinkActive="active" [routerLink]="item.link">
          <i *ngIf="item.icon" [class]="item.icon"></i>
          <ng-template *ngIf="item.label">{{item.label}}</ng-template>
        </a>
      </li>
    </ul>
  `
})

export class HeaderNavComponent implements OnInit {

    public items;

    constructor() {}

    ngOnInit() {}

}
