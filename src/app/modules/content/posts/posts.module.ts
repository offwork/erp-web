import { NgModule } from '@angular/core';
import { UIModule } from '../../../core/ui';

import { PostsRoutingModule } from './posts-routing.module';

import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolvers';

import { PostComponent } from './components/post.component';
import { PostDetailComponent } from './components/post-detail.component';
import { PostFormComponent } from './components/post-form.component';
import { PostListComponent } from './components/post-list.component';

@NgModule({
  imports: [
    UIModule,
    PostsRoutingModule,
  ],
  declarations: [
    PostComponent,
    PostDetailComponent,
    PostFormComponent,
    PostListComponent,
  ],
  providers: [
    PostsService,
    PostsResolver,
  ],
})
export class PostsModule {}
