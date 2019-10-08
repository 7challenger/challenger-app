import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';

import Root from './Root';
import createStore from '../core/createStore';

const store = createStore(window.__data);
delete window.__data;

hydrate(
  <Root store={store} />,
  document.getElementById('root'),
);
