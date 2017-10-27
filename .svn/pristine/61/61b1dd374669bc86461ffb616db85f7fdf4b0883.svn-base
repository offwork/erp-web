import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { EventsService } from '../events.service';

@Component({
  selector: 'kl-event-detail',
  template: `
    <kl-ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Event'">
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class EventDetailComponent implements OnInit {

  public tabs: UITabLink[] = [];
  public item: any;

  constructor(
    private service: EventsService,
    private route: ActivatedRoute) {}

  ngOnInit() { }
}
