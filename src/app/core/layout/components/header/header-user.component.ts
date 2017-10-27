import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { get } from 'lodash';

@Component({
  selector: 'kl-layout-header-user',
  template: `
    <li class="nav-item dropdown" dropdown (onToggle)="toggled($event)">
      <a href class="nav-link dropdown-toggle" dropdownToggle (click)="false">
        <img class="img-avatar" [src]="'/assets/img/avatars/5.jpg'" alt="admin@kalemyazilim.com">
        <span class="d-md-down-none">{{user?.firstName}} {{user?.lastName}}</span>
      </a>
      <div class="dropdown-menu dropdown-menu-right" *dropdownMenu aria-labelledby="simple-dropdown">
        <div class="dropdown-header text-center"><strong>Account</strong></div>
        <a class="dropdown-item" [routerLink]="[ '/', 'profile' ]">
          <i class="icon-user"></i> Profile
        </a>
        <a class="dropdown-item" [routerLink]="[ '/', 'password' ]">
          <i class="icon-key"></i> Password
        </a>
        <a class="dropdown-item" [routerLink]="[ '/', 'logout' ]">
          <i class="fa fa-lock"></i> Logout
        </a>
      </div>
    </li>
  `,
  styles: [``]
})

export class HeaderUserComponent implements OnInit {

  public user: any;
  public disabled = false;

  constructor(private store: Store<any>) {
    this.store
      .select('auth')
      .subscribe((res: any) => this.user = get(res, 'currentUser.user') );
  }

  ngOnInit() {}

  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
}
