import {AfterViewInit, Component} from '@angular/core';

import { Store } from '@ngrx/store';

/*
  <header class="app-header navbar">
      <button class="navbar-toggler d-lg-none" type="button" mobile-nav-toggle>&#9776;</button>
      <a class="navbar-brand" [routerLink]="['/']"></a>
      <!-- <a class="nav-link navbar-toggler sidebar-toggle" href="#">&#9776;</a> -->
      <button klSidebarMinimizer class="navbar-toggler d-md-down-none" type="button" >&#9776;</button>
      <kl-layout-header-nav></kl-layout-header-nav>
      <ul class="nav navbar-nav ml-auto">
        <kl-layout-header-domains></kl-layout-header-domains>
        <kl-layout-header-user></kl-layout-header-user>
        <button class="navbar-toggler d-md-down-none" type="button" klAsideMenuToggler>&#9776;</button>
      </ul>
    </header>
*/

@Component({
  selector: 'kl-layout-header',
  template: `
    <header class="app-header navbar">
      <button class="navbar-toggler d-lg-none" type="button" mobile-nav-toggle>&#9776;</button>
      <a class="navbar-brand" [routerLink]="['/']"></a>
      <a class="navbar-brand-collapsed" [routerLink]="['/']"></a>
      <!-- <a class="nav-link navbar-toggler sidebar-toggle" href="#">&#9776;</a> -->
      <button klSidebarMinimizer (click)="toggleCollapsedSidebar()" class="navbar-toggler d-md-down-none" type="button" >&#9776;</button>
      <kl-layout-header-nav></kl-layout-header-nav>
      <ul class="nav navbar-nav ml-auto">
        <!-- <kl-layout-header-domains></kl-layout-header-domains> -->
        <kl-layout-header-user></kl-layout-header-user>
        <button class="navbar-toggler d-md-down-none" type="button" klAsideMenuToggler>&#9776;</button>
      </ul>
    </header>
  `,
  styles: [`
    .navbar-brand {
      background-size: 120px !important;
    }
  `],
})

export class HeaderComponent implements AfterViewInit {

  public config: any;
  private collapsed: boolean = false;

  constructor(private store: Store<any>) { }

  ngAfterViewInit() {}

  toggleCollapsedSidebar() {
    this.collapsed = !this.collapsed;
    this.store.dispatch({type: '[Layout] Sidebar Collapsed', payload: this.collapsed});
  }
}
