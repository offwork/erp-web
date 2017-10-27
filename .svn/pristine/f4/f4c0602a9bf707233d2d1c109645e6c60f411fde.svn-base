import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UIService } from '../../../../core/ui';
import { DashboardService } from '../../dashboard.service';
import { get } from 'lodash';

@Component({
  selector: 'kl-profile',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <img *ngIf="item" [src]="item.avatar"
               class="img-fluid rounded float-left mb-2" width="200px"/>
        </div>
        <div class="col-md-8">
          <h3>{{ item.firstName }} {{ item.lastName }}</h3>
          <hr/>
          <span class="float-right lead">{{ item.email }}</span>
        </div>
        <div class="col-md-12">
          <kl-ui-form *ngIf="item" [config]="config" [item]="item"
                      (action)="handleAction($event)"></kl-ui-form>
        </div>
      </div>
    </div>
  `
})

export class ProfileComponent implements OnInit {

  public item: any;
  public config: any = {};

  constructor(
    private store: Store<any>,
    private uiService: UIService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.config = this.dashboardService.formConfigProfile();
    this.store
      .select('auth')
      .subscribe((res: any) => {
        this.item = get(res, 'currentUser.user');
        console.log('DASHBOARD PROFILE: ', this.item, '\nRESPONSE: ', res);
      });
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.dashboardService.upsertItem(event.item, () => {
            this.uiService.toastSuccess(
              'Change Profile Success',
              `Your profile has been ${event.item.id ? 'created' : 'updated '} successfully`
            );
          },
          err => this.uiService.toastError('Change Password Fail', err.message)
        );
      default:
        return console.log('Unknown Event Action', event);
    }
  }
}
