import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'kl-setting-detail',
  template: `
    <kl-ui-page [tabs]="tabs">
      <header>
        <kl-setting-header [item]="item"></kl-setting-header>
      </header>
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class SettingDetailComponent implements OnInit {

  public tabs: UITabLink[] = [];
  public item: any;

  constructor(
    private service: SettingsService,
    private route: ActivatedRoute) { }

  ngOnInit() {}
}
