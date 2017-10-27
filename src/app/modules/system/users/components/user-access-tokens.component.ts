import { Component, OnInit } from '@angular/core'
import { UIService } from '../../../../core/ui';

import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-access-tokens',
  templateUrl: './user-access-tokens.component.html',
})
export class UserAccessTokensComponent implements OnInit {

  public item: any;
  public items: any[];

  constructor() {}

  ngOnInit() { this.refreshTokens(); }

  refreshTokens() { }

  handleAction(event) { console.log('[User Access Token]: ',  event); }
}
