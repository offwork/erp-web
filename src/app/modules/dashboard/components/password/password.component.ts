import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UIService } from '../../../../core/ui';
import { DashboardService } from '../../dashboard.service';
import { get } from 'lodash';

@Component({
  selector: 'kl-password',
  template: `
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-6 offset-md-3 mb-1">
        <h5>Change Password</h5>
        <hr/>
        <kl-ui-form [config]="config" [item]="item" (action)="handleAction($event)"></kl-ui-form>
      </div>
    </div>
  </div>
  `
})

export class PasswordComponent implements OnInit {

  public item: any;
  public config: any = {};

  constructor(
    private store: Store<any>,
    private uiService: UIService,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    this.config = this.dashboardService.formConfigPassword();
    this.store
      .select('auth')
      .subscribe((res: any) => this.item = get(res, 'currentUser.user'));
  }

  handleAction(event) {
    switch (event.action) {
      case 'save':
        return this.dashboardService.upsertItem(event.item, () => {
            this.uiService.toastSuccess(
              'Change Password Success',
              'Your password has been changed successfully'
            );
          },
          err => this.uiService.toastError('Change Password Fail', err.message)
        );
      default:
        return console.log('Unknown Event Action', event);
    }
  }
}
