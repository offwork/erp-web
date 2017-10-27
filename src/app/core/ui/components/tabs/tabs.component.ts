import { Component, Input } from '@angular/core';
import { UITabLink } from './tabs.interface';

@Component({
    selector: 'kl-ui-tabs',
    template: `
      <ul class="nav-tabs-menu" role="tablist">
        <li *ngFor="let item of tabs" class="tab-menu-items">
          <a [routerLink]="item.link" data-toggle="tab"
             role="tab" aria-controls="home"
             aria-expanded="true"
             routerLinkActive="active" class="nav-link">
            <i [class]="item.icon"></i> &nbsp; {{ item.title }}
          </a>
        </li>
      </ul>
    `,
    styles: [`
      .nav-tabs-menu {
        margin: 0;
        padding: 0;
      }
      .tab-menu-items {
        list-style: none;
        color: #20a8d8;
        display: inline-block;
      }
    `],
})
/*
      .nav.nav-tabs .nav-link {
        margin-top: 10px;
        border: none;
      }
      .nav-item {
        list-style: none;
        color: #20a8d8;
        display: inline-block;
      }
      .nav.nav-tabs .nav-link.active {
        border-top: 1px solid #c2cfd6;
        border-left: 1px solid #c2cfd6;
        border-right: 1px solid #c2cfd6;
      }
 */
export class UITabsComponent {
  @Input() public tabs: UITabLink[];
}
