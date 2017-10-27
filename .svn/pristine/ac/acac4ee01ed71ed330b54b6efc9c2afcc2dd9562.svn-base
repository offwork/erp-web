import { NgModule } from '@angular/core';
import { UIModule } from '../../../core/ui';

import { UsersRoutingModule } from './users-routing.module';

import { UsersService } from './users.service';
import { UserResolver } from './users.resolvers';

import { UserAccessTokensComponent } from './components/user-access-tokens.component';
import { UserDetailComponent } from './components/user-detail.component';
import { UserFormComponent } from './components/user-form.component';
import { UserHeaderComponent } from './components/user-header.component';
import { UserListComponent } from './components/user-list.component';
import { UserPasswordComponent } from './components/user-password.component';
import { UserRolesComponent } from './components/user-roles.component';

@NgModule({
  imports: [
    UIModule,
    UsersRoutingModule,
  ],
  declarations: [
    UserAccessTokensComponent,
    UserDetailComponent,
    UserFormComponent,
    UserHeaderComponent,
    UserListComponent,
    UserPasswordComponent,
    UserRolesComponent,
  ],
  providers: [
    UsersService,
    UserResolver,
  ],
})
export class SystemUsersModule {}
