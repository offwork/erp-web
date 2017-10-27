import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'kl-domain-form',
  template: `
    <kl-ui-form *ngIf="item" [config]="formConfig" [item]="item" (action)="handleAction($event)"></kl-ui-form>
  `,
})
export class DomainFormComponent implements OnInit {

  public formConfig: any = {};
  public item: any;

  constructor(
    private service: DomainsService,
    private uiService: UIService,
    private router: Router) { }

  ngOnInit() {}

  handleAction(event) { console.log('[Domain Form]: ', event); }
}
