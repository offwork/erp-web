import { Component, Input } from '@angular/core';

@Component({
  selector: 'kl-content-page',
  template: `
    <kl-ui-card>
      <kl-ui-card-header>
        <i class="icon-book-open"></i>
        {{item.name}}
      </kl-ui-card-header>
      <kl-ui-card-content>
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.content" [innerHtml]="item.content"></div>
      </kl-ui-card-content>
    </kl-ui-card>
  `,
})
export class PageComponent {
  @Input() item: any = {};
}
