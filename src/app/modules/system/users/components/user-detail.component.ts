import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-detail',
  template: `
    <kl-ui-page [tabs]="tabs">
      <header>
        <kl-user-header [user]="item?.user"></kl-user-header>
      </header>
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class UserDetailComponent implements OnInit {

  public tabs: UITabLink[] = [];
  public item: any = {};

  constructor(
    public service: UsersService,
    private route: ActivatedRoute) {}

  ngOnInit() {}
}
