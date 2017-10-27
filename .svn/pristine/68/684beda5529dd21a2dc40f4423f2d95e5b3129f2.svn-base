import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { PagesService } from '../pages.service';

@Component({
  selector: 'kl-page-detail',
  template: `
    <kl-ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Page'">
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class PageDetailComponent implements OnInit {
  public tabs: UITabLink[] = [];
  public item: any;

  constructor(
    private service: PagesService,
    private route: ActivatedRoute) {}

  ngOnInit() {}
}
