import { Component } from '@angular/core';
import { UITabLink } from '../../../../core/ui';

@Component({
  selector: 'kl-dashboard',
  template: `
    <kl-ui-page [tabs]="tabs">
      <router-outlet></router-outlet>
    </kl-ui-page>
  `
})

export class IndexComponent {
  public tabs: UITabLink[] = [
    { icon: 'icon-grid', title: 'Overview', link: 'index' },
    { icon: 'icon-user', title: 'Profile', link: 'profile' },
    { icon: 'icon-key', title: 'Password', link: 'password' },
    { icon: 'icon-info', title: 'About', link: 'about' },
  ];
}
