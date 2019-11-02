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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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

        <div
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', marginBottom: '15px' }}>
              <img src="./avatar-icon.png" alt="" style={{ marginRight: '30px', padding: '3px', width: '100px', height: '100px', border: '2px white solid' }} />
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#a8aaa5', fontSize: '14px', fontWeight: '400', marginBottom: '10px' }}>Username:</span>
                <input onChange={this.onUserNameChange} ref={this.userNameInputRef} style={{ padding: '2 10px', color: 'white', backgroundColor: '#282828', fontSize: '18px', borderRadius: '5px' }} />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ color: '#a8aaa5', fontSize: '14px', fontWeight: '400', marginBottom: '10px' }}>Password:</span>
                {loginError && <span style={{ color: 'red', fontSize: '14px', fontWeight: '400', marginBottom: '10px' }}>{loginError}</span>}
                <input onChange={this.onPasswordChange} style={{ padding: '2 10px', color: 'white', backgroundColor: '#282828', fontSize: '18px', borderRadius: '5px' }} type="password" />
              </div>

              <button onClick={this.onSubmit} style={{ marginTop: '10px', backgroundColor: '#25476a', color: 'white', padding: '5px 20px', alignSelf: 'flex-end', borderRadius: '3px', border: '1px grey solid' }} type="submit">Unlock</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
