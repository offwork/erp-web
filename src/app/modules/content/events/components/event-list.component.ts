import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { EventsService } from '../events.service';

@Component({
  selector: 'kl-event-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class EventListComponent {

  constructor(
    public service: EventsService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) {}

  action(event) { console.log('[Content Event List]: ', event); }
}
