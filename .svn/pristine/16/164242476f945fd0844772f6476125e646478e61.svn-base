import { Component, Input } from '@angular/core';

@Component({
  selector: 'kl-content-product',
  template: `
    <kl-ui-card>
      <kl-ui-card-header>
        <i class="icon-basket"></i>
        {{item.name}}
      </kl-ui-card-header>
      <kl-ui-card-content>
        <p *ngIf="item.storageFile?.url"><img src="{{item.storageFile?.url}}" class="img-fluid" ></p>
        <div *ngIf="item.description" [innerHtml]="item.description"></div>
      </kl-ui-card-content>
      <kl-ui-card-footer>
        <span *ngIf="item.sku">SKU: {{item.sku}}</span>
      </kl-ui-card-footer>
    </kl-ui-card>
  `,
})
export class ProductComponent {
  @Input() item: any = {};
}
