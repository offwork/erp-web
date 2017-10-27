import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { ProductsService } from '../products.service';

@Component({
  selector: 'kl-product-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <kl-ui-form *ngIf="item"
                    [config]="formConfig"
                    [item]="item"
                    (action)="handleAction($event)"></kl-ui-form>
      </div>
      <div class="col-md-6">
        <kl-content-product [item]="item"></kl-content-product>
      </div>
    </div>
  `,
})
export class ProductFormComponent implements OnInit {

  public formConfig: any = {};
  public item: any;

  constructor(
    private service: ProductsService,
    private uiService: UIService,
    private router: Router) {}

  ngOnInit() {}

  handleAction(event) { console.log('[Products List]: ', event); }
}
