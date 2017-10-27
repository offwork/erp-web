import { Component, Input } from '@angular/core';
import { UITabLink } from './tabs.interface';

@Component({
    selector: 'kl-ui-tabs-vertical',
    template: `
      <div class="list-group">
        <a *ngFor="let item of tabs" class="list-group-item list-group-item-action"
           routerLinkActive="active" [routerLink]="item.link">
          <i [class]="item.icon"></i> &nbsp; {{ item.title }}
        </a>
      </div>
    `,
})

export class UITabsVerticalComponent {
  @Input() public tabs: UITabLink[];
}
