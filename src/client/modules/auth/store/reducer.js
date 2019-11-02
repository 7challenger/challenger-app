import * as AT from './actionTypes';

const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.AUTHENTICATE_USER:
      return {
        ...state,
        user: true,
      };

    case AT.LOGIN_SUCCESS:
      return {
        ...state,
        user: true,
      };

    case AT.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case AT.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default: return state;
  }
};

export default authReducer;
