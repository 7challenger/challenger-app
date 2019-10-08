import React from 'react';

class TerminalView extends React.Component {
  render() {
    return (
      <div
        tabIndex="0"
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        className="terminal-wrapper"
      >
        <div className="terminal-view">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TerminalView;
