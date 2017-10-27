import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class UserListComponent {

  constructor(
    public service: UsersService,
    public uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) {}

  action(event) { console.log('[System User List]: ', event); }
}
