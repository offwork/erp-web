import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

import { UIService } from '../../../../core/ui';
import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-roles',
  templateUrl: './user-roles.component.html',
})
export class UserRolesComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = [];
  public item: any;
  public items: any[];
  public columns = [{
    label: 'Role',
    field: 'name',
  }, {
    label: 'Description',
    field: 'description',
  }];

  constructor(
    public service: UsersService,
    public uiService: UIService) {}

  ngOnInit() { this.refresh(); }

  ngOnDestroy() { }

  refresh() { }

  handleAction(event) { console.log('[System User Role]: ', event); }
}
