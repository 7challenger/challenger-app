import React from 'react';
import { connect } from 'react-redux';

import { loginThunk } from '../store/thunks';
import ClientRenderer from '../../../utils/ClientRenderer';
import DateTimeWidgetProvider from '../../../Components/DateTimeWidget/DateTimeWidgetProvider';

@connect((state) => {
  return {
    loginError: state.auth.error,
  };
}, { loginThunk })
class Login extends React.Component {
  userNameInputRef = React.createRef()

  state = { userName: null, password: null }

  componentDidMount() {
    if (this.userNameInputRef.current) {
      this.userNameInputRef.current.focus();
    }
  }

  onSubmit = (event) => {
    const { userName, password } = this.state;
    event.preventDefault();

    this.props.loginThunk({ userName, password });
  }

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  }

  onUserNameChange = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    const { loginError } = this.props;

    return (
      <form className="app-wrapper" style={{ backgroundColor: '#313639' }}>
        <div className="login-tray">
          <div style={{ color: 'white' }}>
            <ClientRenderer>
              <DateTimeWidgetProvider>
                {({ time, weekDay }) => {
                  return `${weekDay}, ${time}`;
                }}
              </DateTimeWidgetProvider>
            </ClientRenderer>
          </div>
        </div>

        <div className="login-form">
          <div className="login-input__username-block">
            <img
              alt="login-avatar"
              src="./avatar-icon.png"
              className="login-avatar"
            />
            <div className="login-input-form">
              <span className="login-input__label">Username:</span>
              <input
                className="login-input"
                ref={this.userNameInputRef}
                onChange={this.onUserNameChange}
              />
            </div>
          </div>

          <div className="login-input__password-block">
            <div className="login-input-form__password">
              <span className="login-input__label">Password:</span>

              {loginError && (
                <span
                  style={{ color: 'red' }}
                  className="login-input__label"
                >
                  {loginError}
                </span>
              )}

              <input
                type="password"
                className="login-input"
                onChange={this.onPasswordChange}
              />
            </div>

            <button
              type="submit"
              onClick={this.onSubmit}
              className="login-submit-button"
            >
              Unlock
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
