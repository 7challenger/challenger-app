import React from 'react';
import { connect } from 'react-redux';

import Window from '../../modules/windows/Components/Window';
import { closeWindow } from '../../modules/windows/store/actions';

import { validateCommand } from './utils';

import TerminalView from './TerminalView';
import {
  Line,
  Lines,
  ActiveLine,
  BottomLine,
} from './Lines';

@connect(null, { closeWindow })
class Terminal extends React.Component {
  state = { lines: [] }

  onSubmit = async (lineValue) => {
    const { lines } = this.state;
    const newLines = await validateCommand(lineValue, lines);

    this.setState({ lines: newLines });
  }

  renderLine = (line, index) => {
    return (
      <Line key={index}>
        {line}
      </Line>
    );
  }

  render() {
    return (
      <Window
        window={this.props.window}
        onFocus={this.props.onFocus}
        onClose={this.props.closeWindow}
        isCurrentWindowVisible={this.props.isCurrentWindowVisible}
      >
        <TerminalView
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}
        >
          <Lines>
            {this.state.lines.map(this.renderLine)}
            <ActiveLine
              onSubmit={this.onSubmit}
              withFocusPropRef={this.props.withFocusPropRef}
            />
          </Lines>

          <BottomLine />
        </TerminalView>
      </Window>
    );
  }
}

export default Terminal;
