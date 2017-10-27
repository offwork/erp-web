import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'kl-password-reset',
  template: `
    <kl-ui-message>
      <h3>Şifre Yenileme</h3>
      <p>Hesabınızı doğruladığınız için teşekkür ederiz. Şifrenizi değiştire bilirsiniz.</p>
      <div class="form-group">
        <label>Yeni Şifre</label>
        <div class="input-group mb-1">
          <span class="input-group-addon"><i class="icon-lock"></i></span>
          <input [(ngModel)]="user.password" required="true" type="password" class="form-control"
                 placeholder="Password">
        </div>
      </div>
      <div class="form-group">
        <label>Şifre Tekrarı</label>
        <div class="input-group mb-1">
          <span class="input-group-addon"><i class="icon-lock"></i></span>
          <input [(ngModel)]="user.verify" required="true" type="password" class="form-control" placeholder="Verify">
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <button type="submit" class="btn btn-block btn-primary px-2" (click)="reset()">Şifremi Yenile</button>
        </div>
      </div>
    </kl-ui-message>
  `,
  styles: [`
  .row {
    padding: 15px;
  }
    h3, label, p {
      color: #eee;
    }
  `]
})

export class ResetComponent implements OnInit {

  public user: any = {
    password: '',
    verify: '',
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  reset() {
  }
}
