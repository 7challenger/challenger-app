import React from 'react';
import { connect } from 'react-redux';

import { closeWindow } from '../../modules/windows/store/actions';
import Window from '../../modules/windows/Components/Window';

import BrowserView from './BrowserView';

@connect(null, { closeWindow })
class Browser extends React.Component {
  render() {
    return (
      <Window
        window={this.props.window}
        onFocus={this.props.onFocus}
        onClose={this.props.closeWindow}
        isCurrentWindowVisible={this.props.isCurrentWindowVisible}
      >
        <BrowserView />
      </Window>
    );
  }
}

export default Browser;
