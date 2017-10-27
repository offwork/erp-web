import {Component} from '@angular/core';
import { UITabLink } from '../../../../core/ui';

@Component({
  selector: 'kl-administration',
  template: `
    <kl-ui-page [tabs]="tabs">
      <router-outlet></router-outlet>
    </kl-ui-page>
    <!-- ng2 toasty not working nested in the child modules | you're this consider -->
    <kl-ui-templates></kl-ui-templates>
  `,
  styles: [``]
})

export class IndexAdministrationComponent {
  public tabs: UITabLink[] = [
    { icon: 'icon-bulb', title: 'BT Yönetim', link: 'information' },
    { icon: 'icon-equalizer', title: 'Uygulama Yönetim', link: 'application' },
  ];
}
