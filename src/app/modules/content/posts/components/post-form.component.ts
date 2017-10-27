import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { PostsService } from '../posts.service';

@Component({
  selector: 'kl-post-form',
  template: `
    <div class="row">
      <div class="col-md-6">
        <kl-ui-form *ngIf="item"
                    [config]="formConfig"
                    [item]="item"
                    (action)="handleAction($event)"></kl-ui-form>
      </div>
      <div class="col-md-6">
        <kl-content-post [item]="item"></kl-content-post>
      </div>
    </div>
  `,
})
export class PostFormComponent implements OnInit {
  public formConfig: any = {};
  public item: any;

  constructor(
    private service: PostsService,
    private uiService: UIService,
    private router: Router) {}

  ngOnInit() {}

  handleAction(event) { console.log('[Post Form]: ', event); }
}
