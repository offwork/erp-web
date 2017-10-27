import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CookieBrowser } from './storage/cookie.browser';
import { ErrorHandler } from './services/error.service';
import { InternalStorage, SDKStorage } from './storage/storage.swaps';
import { KalemAuth } from './services/auth.service';
import { JSONSearchParams } from './services/search.params';
import { SDKModels } from './models/SDKModels';
import { StorageBrowser } from './storage/storage.browser';
import { SystemUserApi } from "./services/SystemUser";

@NgModule({
  imports: [ CommonModule, HttpClientModule ],
  exports: [],
  declarations: [],
  providers: [
    ErrorHandler
  ],
})
export class SDKBrowserModule {
  static forRoot(internalStorageProvider: any = {
    provide: InternalStorage,
    useClass: CookieBrowser
  }): ModuleWithProviders {
    return {
      ngModule: SDKBrowserModule,
      providers: [
        KalemAuth,
        JSONSearchParams,
        SDKModels,
        SystemUserApi,
        internalStorageProvider,
        { provide: SDKStorage, useClass: StorageBrowser }
      ]
    }
  }
}

export * from './models/index';
export * from './services/index';
export * from './kl.config';
export * from './storage/storage.swaps';
export { CookieBrowser } from './storage/cookie.browser';
export { StorageBrowser } from './storage/storage.browser';
