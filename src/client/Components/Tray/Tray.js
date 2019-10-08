import React from 'react';
import { connect } from 'react-redux';

import { restoreWindow, minimizeWindow } from '../../modules/windows/store/actions';

import TrayPad from './TrayPad';
import TrayMenu from './TrayMenu';

@connect((state) => {
  return {
    windowsList: state.windows.list,
    activeWindowName: state.windows.activeName,
  };
}, {
  restoreWindow,
  minimizeWindow,
})
class Tray extends React.Component {
  renderTrayPad = (window) => {
    const { activeWindowName } = this.props;

    return (
      <TrayPad
        window={window}
        key={window.name}
        restoreWindow={this.props.restoreWindow}
        minimizeWindow={this.props.minimizeWindow}
        isActive={window.name === activeWindowName}
      />
    );
  }

  render() {
    const { windowsList } = this.props;

    return (
      <div className="tray-wrapper">
        <TrayMenu />
        <div className="tray-left">
          {windowsList.map(this.renderTrayPad)}
        </div>
      </div>
    );
  }
}

export default Tray;
