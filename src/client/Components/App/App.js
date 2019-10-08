import React from 'react';
import { connect } from 'react-redux';

import Tray from '../Tray/Tray';
import AppWrapper from './AppWrapper';
import Distro from '../Distro/Distro';
import Browser from '../Browser/Browser';
import Terminal from '../Terminal/Terminal';
import DateTimeWidget from '../DateTimeWidget/DateTimeWidget';

import withFocus from '../../utils/withFocus';
import { TerminalWindow, BrowserWindow } from '../../utils/consts';
import ClientRenderer from '../../utils/ClientRenderer';
import { openWindow } from '../../modules/windows/store/actions';

const WithFocusBrowser = withFocus(BrowserWindow.name)(Browser);
const WithFocusTerminal = withFocus(TerminalWindow.name)(Terminal);

const startupApps = [
  // BrowserWindow,
  TerminalWindow,
];

@connect(null, { openWindow })
class App extends React.Component {
  componentDidMount() {
    startupApps.forEach(this.openApp);
  }

  openApp = (windowObj) => {
    this.props.openWindow(windowObj);
  }

  render() {
    return (
      <AppWrapper>
        <Tray />

        <ClientRenderer>
          <DateTimeWidget />
        </ClientRenderer>

        <Distro />
        <WithFocusBrowser />
        <WithFocusTerminal />
      </AppWrapper>
    );
  }
}

export default App;
