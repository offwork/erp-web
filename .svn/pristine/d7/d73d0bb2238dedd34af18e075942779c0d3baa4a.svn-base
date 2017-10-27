import {Component} from '@angular/core';
import {Store} from '@ngrx/store';

import * as auth from '../../state/auth.actions';

@Component({
  template: `
    <kl-ui-message>
      <div class="form-group">
        <label>Email</label>
        <div class="input-group mb-1">
          <span class="input-group-addon">
            <i class="icon-user"></i>
          </span>
          <input  required type="text" class="form-control" placeholder="Email">
        </div>
      </div>
      <div class="form-group">
        <label>Şifre</label>
        <div class="input-group mb-1">
          <span class="input-group-addon">
            <i class="icon-lock"></i>
          </span>
          <input [(ngModel)]="credentials.password" required type="password" class="form-control"
                 placeholder="Password">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-4">
          <div class="form-check">
            <label class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">Beni Hatırla</span>
            </label>
          </div>
        </div>
        <div class="col-xs-8 ml-auto">
          <button type="submit" class="btn btn-block btn-success" (click)="login()">
            Giriş
          </button>
        </div>
      </div>
      <button type="button" class="btn btn-link" [routerLink]="['/', 'password-recover']">Şifremi Unuttum</button>
      <hr>
      <div class="login-options">
        <ul class="social-icons">
          <li>
            <a class="kalemyazilim" data-original-title="kalemyazilim" target="_blank"
               href="https://www.kalemyazilim.com"> </a>
          </li>
          <li>
            <a class="facebook" data-original-title="Facebook" target="_blank"
               href="https://www.facebook.com/kalemyazilim"> </a>
          </li>
          <li>
            <a class="twitter" data-original-title="Twitter" target="_blank"
               href="https://twitter.com/Kalem_Yazilim"> </a>
          </li>
          <li>
            <a class="instagram" data-original-title="Instagram" target="_blank"
               href="https://www.instagram.com/kalem_yazilim"> </a>
          </li>
          <li>
            <a class="googleplus" data-original-title="Goole Plus" target="_blank"
               href="https://plus.google.com/u/0/113932430858629757249"> </a>
          </li>
          <li>
            <a class="linkedin" data-original-title="Linkedin" target="_blank"
               href="https://www.linkedin.com/company/kalem-yazilim-ltd."> </a>
          </li>
          <li>
            <a class="youtube" data-original-title="Youtube" target="_blank"
               href="https://www.youtube.com/channel/UCYQPknm8XxPjO7PaCgeYtpg"> </a>
          </li>
        </ul>
      </div>
    </kl-ui-message>
  `,
  styles: [`
    .form-group > label {
      float: left;
      color: #eee;
    }
    hr {
      border-top: 1px dotted #eee;
    }
    .btn-link {
      padding:  0;
      color: #eee;
    }
    .btn-link:hover {
      color: #32c5d2;
      text-decoration: none;
      padding: 0;
    }
    .row {
      padding: 15px 15px 0 15px;
    }
    .custom-control-description {
      color: #eee !important;
    }
  `]
})

export class LoginComponent {

  public settings: any;
  public credentials = {
    grant_type: 'password',
    password: '12345678',
    username: 'ADMIN'
  };

  constructor(private store: Store<any>) {
    this.store
      .select('app')
      .subscribe((res: any) => {});
  }

  login() {
    this.store.dispatch({type: auth.AUTH_LOGIN, payload: this.credentials});
  }
}
