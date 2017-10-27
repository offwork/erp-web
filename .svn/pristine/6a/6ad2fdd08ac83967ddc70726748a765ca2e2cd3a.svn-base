import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'kl-setting-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class SettingListComponent {

  constructor(
    public service: SettingsService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) { }

  action(event) { console.log('[Setting List]: ', event); }
}
