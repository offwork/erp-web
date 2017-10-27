import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'kl-layout-breadcrumbs',
  template: `<label>Yonetim</label>`,
  styles: [`
    label {
      color: #20a8d8;
    }
  `]
})

/*
<ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>
        <li class="breadcrumb-item"
            *ngIf="breadcrumb.label.title && breadcrumb.url.substring(breadcrumb.url.length - 1) == '/' || breadcrumb.label.title && last"
            [ngClass]="{active: last}">
          <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>
          <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>
        </li>
      </ng-template>
*/

export class BreadcrumbsComponent implements OnInit {

    public breadcrumbs: Array<Object>;

    constructor(private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
      this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event) => {
        this.breadcrumbs = [];
        let currentRoute: any = this.route.root;
        let url: any = '';

        do {
          let childrenRoutes: any = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach((route: any) => {
            if (route.outlet === 'primary') {
              let routeSnapshot: any = route.snapshot;
              url += '/' + routeSnapshot.url.map((segment: any) => segment.path).join('/');
              this.breadcrumbs.push({
                label: route.snapshot.data,
                url: url
              });
              currentRoute = route;
            }
          })
        } while (currentRoute);
      })
    }
}
