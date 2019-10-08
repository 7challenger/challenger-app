import React from 'react';

class AppWrapper extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    );
  }
}

export default AppWrapper;
