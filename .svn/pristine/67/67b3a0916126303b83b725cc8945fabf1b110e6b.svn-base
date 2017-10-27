import { Component, Input } from '@angular/core';

@Component({
  selector: 'kl-content-event',
  template: `
    <kl-ui-card>
      <kl-ui-card-header>
        <i class="icon-event"></i>
        {{item.name}}
      </kl-ui-card-header>
      <kl-ui-card-content>
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.description" [innerHtml]="item.description"></div>
      </kl-ui-card-content>
      <kl-ui-card-footer>
        <div *ngIf="item.date"><strong>Date: </strong>{{item.date}}</div>
        <div *ngIf="item.location"><strong>Location: </strong>{{item.location}}</div>
      </kl-ui-card-footer>
    </kl-ui-card>
  `,
})
export class EventComponent {
  @Input() item: any = {};
}
