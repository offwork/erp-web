import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Local Modules
import { LayoutModule } from './core/layout';
import { UIModule } from './core/ui';

// Local Components/Routes/Services
import { AppConfigModule } from './app-config.module';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app.store';

import { ExtensionsModule } from './extensions.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './shell/not-found/not-found.component';
import { RouterComponent } from './shell/router/router.component';

import { LogService } from './log.service';
import { AuthService } from './modules/auth';

import { SDKModels } from "./shared/models/SDKModels";
import { SystemUserApi } from "./shared/services/SystemUser";
import { KalemAuth } from "./shared/services/auth.service";
import { JSONSearchParams } from "./shared/services/search.params";

import { InternalStorage } from "./shared/storage/storage.swaps";

/*
* Script Loader
* */
import 'script-loader!jszip/dist/jszip.min.js';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

    LayoutModule,
    UIModule,

    AppStoreModule,
    AppRoutingModule,
    AppConfigModule,

    ExtensionsModule.forRoot(),
  ],
  providers: [
    LogService,
    AuthService,
    SystemUserApi,
    SDKModels,
    KalemAuth,
    InternalStorage,
    JSONSearchParams,
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    RouterComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
