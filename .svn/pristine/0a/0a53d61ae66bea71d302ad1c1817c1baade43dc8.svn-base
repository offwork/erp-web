import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UITabLink } from '../../../../core/ui';
import { PostsService } from '../posts.service';

@Component({
  selector: 'kl-post-detail',
  template: `
    <kl-ui-page [tabs]="tabs" [title]="item ? item.title : 'Add New Post'">
      <router-outlet></router-outlet>
    </kl-ui-page>
  `,
})
export class PostDetailComponent implements OnInit {

  public tabs: UITabLink[] = [];
  public item: any;

  constructor(private service: PostsService,
    private route: ActivatedRoute) {}

  ngOnInit() {}
}
