import React from 'react';

export const Lines = ({ children }) => {
  return (
    <ul className="terminal-lines-wrapper">
      {children}
    </ul>
  );
};

export const Line = ({ children }) => {
  if (typeof children === 'string') {
    return (
      <li className="terminal-line" dangerouslySetInnerHTML={{ __html: children }} />
    );
  }

  return (
    <li className="terminal-line">
      {children}
    </li>
  );
};


export class ActiveLine extends React.Component {
  state = { text: '' }

  label = 'hackme $'

  onChange = (event) => {
    this.setState({ text: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(`${this.label} ${this.state.text}`);
    this.setState({ text: '' });
  }

  render() {
    return (
      <Line>
        <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
          <label className="terminal-activeline-label">{this.label}</label>

          <input
            id="activeLine"
            autoComplete="off"
            value={this.state.text}
            onChange={this.onChange}
            ref={this.props.withFocusPropRef}
            className="terminal-activeline-input"
          />
        </form>
      </Line>
    );
  }
}

export const BottomLine = () => {
  return (
    <div>
      ~/hackme/projects/
    </div>
  );
};
