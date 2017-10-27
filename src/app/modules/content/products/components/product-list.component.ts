import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class ProductListComponent {

  constructor(
    public service: ProductsService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) {}

  action(event) { console.log('[Products List]: ', event); }
}
