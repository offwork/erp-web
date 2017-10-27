import * as auth from './auth.actions';

export interface State {
  currentUser: any;
  loggedIn: boolean;
  realms: any[];
  roles: {
    assigned: any[],
    unassigned: any[],
  };
}

const initialState: State = {
  currentUser: null,
  loggedIn: false,
  realms: [],
  roles: {
    assigned: [],
    unassigned: [],
  },
};

export function reducers(state = initialState, action: auth.Actions): State {
  switch (action.type) {
    case auth.AUTH_LOGIN:
      return Object.assign({}, state);

    case auth.AUTH_LOGOUT_SUCCESS:
      return Object.assign({}, state, { currentUser: null, loggedIn: false });

    case auth.AUTH_LOGIN_SUCCESS:
      return Object.assign({}, state, { currentUser: action.payload, loggedIn: true });

    default:
      return state;
  }
}
