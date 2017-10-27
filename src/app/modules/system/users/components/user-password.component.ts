import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService, FormService } from '../../../../core/ui';
import { UsersService } from '../users.service';

@Component({
  selector: 'kl-user-password',
  templateUrl: './user-password.component.html',
})
export class UserPasswordComponent implements OnInit {

  public formConfig: any = {
    hasHeader: false,
    fields: [],
    showCancel: true,
  };

  public item: any;

  constructor(
    public service: UsersService,
    public uiService: UIService,
    private formService: FormService,
    private router: Router) {}

  ngOnInit() {}

  handleAction(event) { console.log('[System User Password]: ', event); }
}
