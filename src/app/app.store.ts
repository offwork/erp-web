import { NgModule } from '@angular/core';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import * as app from './state';
import * as auth from './modules/auth';
import * as layout from './core/layout';

import { AppEffects } from './state/app.effects';
import { UserEffects } from './modules/auth/state/auth.effects';
import { LayoutEffects } from './core/layout/state/layout.effects';

export interface State {
  app: app.State;
  auth: auth.State;
  layout: layout.State;
}

const reducers: ActionReducerMap<State> = {
  app: app.reducers,
  auth: auth.reducers,
  layout: layout.reducers,
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ AppEffects, UserEffects, LayoutEffects ]),
  ],
})
export class AppStoreModule {}
