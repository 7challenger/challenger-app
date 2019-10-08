import React from 'react';
import { connect } from 'react-redux';


import App from '../Components/App/App';
import Login from '../modules/auth/Components/Login';

@connect((state) => {
  return {
    isUserAuthenticated: !!state.auth.user,
  };
})
class AuthWrapper extends React.Component {
  render() {
    const { isUserAuthenticated } = this.props;
    if (isUserAuthenticated) {
      return <App />;
    }

    return <Login />;
  }
}

export default AuthWrapper;
