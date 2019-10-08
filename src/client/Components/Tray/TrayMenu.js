import React from 'react';
import { connect } from 'react-redux';

import TrayMenuIcon from './TrayMenuIcon';
import TrayMenuItem from './TrayMenuItem';
import TrayMenuDelimiter from './TrayMenuDelimiter';

import { logout } from '../../modules/auth/store/actions';
import { openWindow } from '../../modules/windows/store/actions';
import { BrowserWindow, TerminalWindow } from '../../utils/consts';

const possibleActions = {
  logout,
};

const trayMenuItems = [{
  ...BrowserWindow,
  isApp: true,
}, {
  ...TerminalWindow,
  isApp: true,
}, {
  name: 2,
  isDelimiter: true,
}, {
  name: 'Preferences',
  isApp: true,
  icon: '',
}, {
  name: 'Games',
  isApp: true,
  icon: '',
}, {
  name: 'System',
  isApp: true,
  icon: '',
}, {
  name: 1,
  isDelimiter: true,
}, {
  name: 'Help',
  isApp: false,
  icon: '',
}, {
  name: 'About',
  isApp: false,
  icon: '',
}, {
  name: 'Logout',
  isApp: false,
  action: 'logout',
  icon: '',
}];

@connect(null, { openWindow, ...possibleActions })
class TrayMenu extends React.Component {
  state = { isMenuOpened: false };

  onClick = () => {
    this.setState((prevState) => {
      return {
        isMenuOpened: !prevState.isMenuOpened,
      };
    });
  }

  getOnClickItem = (trayMenuItem, isApp) => {
    if (isApp) {
      return () => {
        this.props.openWindow(trayMenuItem);
      };
    }

    return this.props[trayMenuItem.action] || (() => {});
  }

  renderTrayMenuItem = (trayMenuItem) => {
    if (trayMenuItem.isDelimiter) {
      return (
        <TrayMenuDelimiter key={trayMenuItem.name} />
      );
    }

    const onClick = this.getOnClickItem(trayMenuItem, trayMenuItem.isApp);
    return (
      <TrayMenuItem
        onClick={onClick}
        key={trayMenuItem.name}
        trayMenuItem={trayMenuItem}
      />
    );
  }

  render() {
    const { isMenuOpened } = this.state;

    return (
      <div
        className="tray-menu"
        onClick={this.onClick}
      >
        <TrayMenuIcon />

        {isMenuOpened && (
          <div className="tray-menu-items-wrapper">
            {trayMenuItems.map(this.renderTrayMenuItem)}
          </div>
        )}
      </div>
    );
  }
}

export default TrayMenu;
