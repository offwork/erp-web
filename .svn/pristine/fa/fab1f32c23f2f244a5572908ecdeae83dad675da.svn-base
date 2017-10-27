import { sortBy } from 'lodash/index';

import * as app from './app.actions';

export interface State  {
    activeDomain: any;
    development: boolean;
    domains: any[];
    settings: any;
    contentDashboard: any[];
    systemDashboard: any[];
    modules: any;
}

const initialState: any = {
    activeDomain: null,
    development: false,
    domains: [],
    settings: {
        nodeEnv: 'development',
        registrationEnabled: true,
    },
    contentDashboard: [],
    systemDashboard: [],
    modules: {}
};

export function reducers(state = initialState, action: app.Actions): State {
    switch (action.type) {

        case app.APP_LOAD_MODULE:
            const modules = state.modules;
            modules[action.payload.moduleName] = action.payload.moduleConfig;
            return Object.assign({}, state, modules);

        case app.APP_DOMAIN_ADD:
            return Object.assign({}, state, {
                domains: [...state.domains, action.payload],
                activeDomain: state.activeDomain || action.payload
            });

        case app.APP_DOMAIN_SELECT:
        case app.APP_DOMAIN_SET:
            return Object.assign({}, state, { activeDomain: action.payload });

        case app.APP_SETTING_ADD:
            const settings = state.settings;
            settings[action.payload.key] = action.payload.value;
            return Object.assign({}, state, { settings });

        case app.APP_CONTENT_DASHBOARD:
            return Object.assign({}, state, {
                contentDashboard: sortBy([...state.contentDashboard, action.payload], ['weight'])
            });

        case app.APP_SYSTEM_DASHBOARD:
            return Object.assign({}, state, {
                systemDashboard: sortBy([...state.systemDashboard, action.payload], ['weight'])
            });

        default:
            return state;
    }
}
