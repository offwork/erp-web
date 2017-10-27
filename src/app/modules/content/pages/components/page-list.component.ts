import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { PagesService } from '../pages.service';

@Component({
  selector: 'kl-page-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class PageListComponent {

  public formConfig: any = {};

  constructor(
    public service: PagesService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) {}

  action(event) { console.log('[Page List]: ', event); }
}
