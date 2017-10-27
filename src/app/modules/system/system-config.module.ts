import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

const moduleName        = 'system';
const link = (...links) =>  ([ '/', moduleName, ...links ]);
const moduleConfig      = {
  name: 'System',
  icon: 'icon-settings',
  topLinks: [
    { weight: 110, label: 'Domains', icon: 'icon-globe', link: link('domains') },
    { weight: 120, label: 'Settings', icon: 'icon-settings', link: link('settings') },
    { weight: 130, label: 'Users', icon: 'icon-people', link: link('users') },
    { weight: 140, label: 'Administration', icon: 'icon-key', link: link('administration') },
  ],
  sidebarLinks: [
    { weight: 100, type: 'title', label: 'System' },
    { weight: 110, label: 'Domains', icon: 'icon-globe', link: link('domains') },
    { weight: 120, label: 'Settings', icon: 'icon-settings', link: link('settings') },
    { weight: 130, label: 'Users', icon: 'icon-people', link: link('users') },
    { weight: 140, label: 'Administration', icon: 'icon-key', link: link('administration') },
  ],
  dashboardLinks: {
    system: [
      { count: '∞', label: 'Domains', type: 'info', icon: 'icon-globe', link: link('domains') },
      { count: '∞', label: 'Settings', type: 'success', icon: 'icon-settings', link: link('settings') },
      { count: '∞', label: 'Users', type: 'warning', icon: 'icon-people', link: link('users') },
      { count: '∞', label: 'Administration', type: 'danger', icon: 'icon-key', link: link('administration') },
    ]
  },
};

@NgModule()
export class SystemConfigModule {

  constructor(protected store: Store<any>) {
    this.store.dispatch({ type: '[App] Load Module', payload: { moduleName, moduleConfig }});
  }

}

