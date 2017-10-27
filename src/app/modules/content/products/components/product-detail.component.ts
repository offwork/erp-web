import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { ProductsService } from '../products.service';

@Component({
  selector: 'kl-product-detail',
  template: `
    <kl-ui-page [tabs]="tabs" [title]="item ? item.name : 'Add New Product'">
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class ProductDetailComponent implements OnInit {

  public tabs: UITabLink[] = [];
  public item: any;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute) {}

  ngOnInit() {}
}
