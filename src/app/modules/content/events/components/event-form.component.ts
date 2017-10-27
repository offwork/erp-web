import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { EventsService } from '../events.service';

@Component({
  selector: 'kl-event-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <kl-ui-form *ngIf="item"
                    [config]="formConfig"
                    [item]="item"
                    (action)="handleAction($event)"></kl-ui-form>
      </div>
      <div class="col-md-6">
        <kl-content-event [item]="item"></kl-content-event>
      </div>
    </div>
  `,
})
export class EventFormComponent implements OnInit {

  public formConfig: any = {};
  public item: any = {};

  constructor(
    private service: EventsService,
    private uiService: UIService,
    private router: Router) {}

  ngOnInit() { }

  handleAction(event) { console.log('[Content Event Form]: ', event); }
}
