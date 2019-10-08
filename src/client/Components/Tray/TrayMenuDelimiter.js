import React from 'react';

class TrayMenuDelimiter extends React.Component {
  onClick = (event) => {
    event.stopPropagation();
  }

  render() {
    return (
      <div
        className="tray-menu-delimiter"
        onClick={this.onClick}
      />
    );
  }
}

export default TrayMenuDelimiter;
