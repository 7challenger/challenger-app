import {
  combineReducers,
  createStore as _createStore,
  applyMiddleware as _applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer as authReducer } from '../client/modules/auth';
import { reducer as windowsReducer } from '../client/modules/windows';

const arg = 'arg';

const middlewares = [thunk.withExtraArgument(arg), logger];

const applyMiddleware = (_middlewares) => {
  return _applyMiddleware(..._middlewares);
};

const createStore = (data = {}) => {
  const rootReducer = combineReducers({
    auth: authReducer,
    windows: windowsReducer,
  });

  const store = _createStore(rootReducer, data, applyMiddleware(middlewares));
  return store;
};

export default createStore;
