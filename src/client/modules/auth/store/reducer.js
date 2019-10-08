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

    case AT.LOGIN:
      return {
        ...state,
        user: true,
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
