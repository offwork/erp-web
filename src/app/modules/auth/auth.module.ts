import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UIModule } from '../../core/ui/ui.module';

import { AuthService } from './auth.service';
import { SystemUserApi } from "../../shared/services/SystemUser";

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RecoverComponent } from './components/recover/recover.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    UIModule,
    AuthRoutingModule,
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RecoverComponent,
    RegisterComponent,
    ResetComponent,
  ],
  providers: [AuthService, SystemUserApi],
})
export class AuthModule { }
