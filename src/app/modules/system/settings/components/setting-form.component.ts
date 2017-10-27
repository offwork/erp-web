import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'kl-setting-form',
  template: `
    <kl-ui-form *ngIf="item"
                [config]="formConfig"
                [item]="item"
                (action)="handleAction($event)"></kl-ui-form>
  `,
})
export class SettingFormComponent implements OnInit {

  public formConfig: any = {};
  public item: any;

  constructor(
    private service: SettingsService,
    private uiService: UIService,
    private router: Router) { }

  ngOnInit() {}

  handleAction(event) { console.log('[Setting Form]: ', event); }
}
