import React from 'react';
import { Provider } from 'react-redux';

import AuthWrapper from './utils/authWrapper';


class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <AuthWrapper />
      </Provider>
    );
  }
}

export default Root;
