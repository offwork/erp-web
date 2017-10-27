import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'kl-domain-detail',
  template: `
    <kl-ui-page [tabs]="tabs">
      <header>
        <kl-domain-header [item]="item"></kl-domain-header>
      </header>
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class DomainDetailComponent implements OnInit {

  public tabs: UITabLink[] = [
    { icon: 'fa fa-pencil', title: 'Edit', link: 'edit' },
  ];
  public item: any;

  constructor(
    private service: DomainsService,
    private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
