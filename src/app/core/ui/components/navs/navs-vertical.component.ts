import {Component, EventEmitter, Input, Output} from '@angular/core';
import { UINavLink } from "./navs.interface";

@Component({
  selector: 'kl-ui-navs-vertical',
  template: `
    <ul class="nav" *ngFor="let item of navs; let i = index;">
      <li class="nav-item">
        <a href="javascript:void(0);" class="nav-link"
           (click)="action.emit({ index: i })">
          <i [class]="item.icon" aria-hidden="true"></i> {{item.title}}
        </a>
      </li>
    </ul>
  `
})

export class UINavsVerticalComponent {
  @Input() public navs: UINavLink[];
  @Output() public action = new EventEmitter();
}
