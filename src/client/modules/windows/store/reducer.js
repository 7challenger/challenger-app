import * as AT from './actionTypes';
import * as utils from './utils';

const initialState = {
  activeName: null,

  list: [],
  map: {},
};

const windowsReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.OPEN_WINDOW:
      return {
        ...state,
        ...utils.doOpenWindow(state, action),
      };

    case AT.CLOSE_WINDOW:
      return {
        ...state,
        ...utils.doCloseWindow(state, action),
      };

    case AT.SET_ACTIVE_WINDOW:
      return {
        ...state,
        ...utils.doSetActiveWindow(state, action),
      };

    case AT.MINIMIZE_WINDOW:
      return {
        ...state,
        ...utils.doMinimizeWindow(state, action),
      };

    case AT.RESTORE_WINDOW:
      return {
        ...state,
        ...utils.doRestoreWindow(state, action),
      };

    default: return state;
  }
};

export default windowsReducer;
