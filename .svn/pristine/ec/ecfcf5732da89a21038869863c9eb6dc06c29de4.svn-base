import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-form',
  template: `
    <kl-ui-form *ngIf="item"
                [config]="formConfig"
                [item]="item"
                (action)="handleAction($event)"></kl-ui-form>
  `,
})
export class UserFormComponent implements OnInit {

  public formConfig: any = {};
  public item: any;

  constructor(
    private service: UsersService,
    private uiService: UIService,
    private router: Router) { }

  ngOnInit() { }

  handleAction(event) { console.log('[System User Form]: ', event); }
}
