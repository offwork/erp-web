import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { PagesService } from '../pages.service';

@Component({
  selector: 'kl-page-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <kl-ui-form *ngIf="item"
                    [config]="formConfig"
                    [item]="item"
                    (action)="handleAction($event)"></kl-ui-form>
      </div>
      <div class="col-md-6">
        <kl-content-page [item]="item"></kl-content-page>
      </div>
    </div>
  `,
})
export class PageFormComponent implements OnInit {
  public formConfig: any = {};
  public item: any;

  constructor(
    private service: PagesService,
    private uiService: UIService,
    private router: Router) {}

  ngOnInit() { }

  handleAction(event) { console.log('[Page Form]: ', event); }
}
