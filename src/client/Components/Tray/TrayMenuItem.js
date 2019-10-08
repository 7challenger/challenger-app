import React from 'react';

class TrayMenuItem extends React.Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="tray-menu-item"
      >
        {this.props.trayMenuItem.name}
      </div>
    );
  }
}

export default TrayMenuItem;
