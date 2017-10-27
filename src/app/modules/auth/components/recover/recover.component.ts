import { Component } from '@angular/core';

/*  */
@Component({
    selector: 'kl-password-recover',
    template: `
      <kl-ui-message>
        <h3>Sifrenizi hatırlamıyor musunuz?</h3>
        <p>Kayıtlı e-posta adresinizi yazın.</p>
        <div class="input-group mb-1">
          <span class="input-group-addon"><i class="icon-envelope"></i></span>
          <input [(ngModel)]="user.email" required="true" type="text" class="form-control" placeholder="E-Posta">
        </div>
        <div class="row">
          <div class="col-xs-6">
            <button type="submit" class="btn btn-block btn-danger" [routerLink]="['/', 'login']">Geri</button>
          </div>
          <div class="col-xs-6 ml-auto">
            <button class="btn btn-block btn-success" type="button" (click)="recover()">Gönder</button>
          </div>
        </div>
      </kl-ui-message>
    `,
  styles: [`
  .row {
    padding: 15px;
  }
    h3, p {
      color: #eee;
    }
  `]
})

export class RecoverComponent {

  public user: any = {
    email: '',
  };

  constructor() { }

  recover() {}
}
