import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { DomainsService } from '../domains.service';

@Component({
  selector: 'kl-domain-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
  styles: [``]
})
export class DomainListComponent {

  constructor(
    public service: DomainsService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) { }

  action(event) { console.log('[Domain List]: ', event); }
}
