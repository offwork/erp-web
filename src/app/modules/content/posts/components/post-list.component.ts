import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UIService } from '../../../../core/ui';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  template: `
    <div class="card">
      <div class="card-block">
        <!-- <ui-data-grid #grid (action)="action($event)" [service]="service"></ui-data-grid> -->
      </div>
    </div>
  `,
})
export class PostListComponent {

  constructor(
    public service: PostsService,
    private uiService: UIService,
    private router: Router,
    private route: ActivatedRoute) {}

  action(event) { console.log('[Post List]: ', event); }
}
