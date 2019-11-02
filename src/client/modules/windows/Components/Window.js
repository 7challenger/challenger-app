import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const getCoords = (prevStateCoords, currentCoords, clientRect) => {
  const newCoords = {
    top: prevStateCoords.top + (currentCoords.top - clientRect.top),
    left: prevStateCoords.left + (currentCoords.left - clientRect.left),
  };

  return newCoords;
};

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.dragRef = React.createRef();
    this.state = { isMouseDown: false, coords: props.window.coords, clientRect: null };
  }

  static defaultProps = {
    window: {
      coords: {},
    },
  }

  static propTypes = {
    window: PropTypes.object,
  }


  componentDidMount() {
    this.props.onFocus();
  }

  onMouseUp = () => {
    this.setState({ isMouseDown: false }, this.props.onFocus);
    document.removeEventListener('mousemove', this.onDrag);
  }

  onMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ isMouseDown: true, clientRect: { top: event.clientY, left: event.clientX } });
    document.addEventListener('mousemove', this.onDrag);
  }

  onDrag = (event) => {
    const { isMouseDown } = this.state;

    if (isMouseDown) {
      const currentCoords = { top: event.clientY, left: event.clientX };

      this.setState((prevState) => {
        const coords = getCoords(prevState.coords, currentCoords, prevState.clientRect);
        return { coords, clientRect: currentCoords };
      });
    }
  }

  onClickClose = (event) => {
    event.stopPropagation();

    this.props.onClose(this.props.window);
  }

  render() {
    const { coords } = this.state;
    const { name } = this.props.window;
    const { top = 0, left = 0 } = coords;

    return (
      <div
        style={{ top, left }}
        className={cs('window', {
          'is-visible': this.props.isCurrentWindowVisible,
          'is-invisible': !this.props.isCurrentWindowVisible,
        })}
      >
        <div
          // onMouseMove={this.onDrag}
          onMouseUp={this.onMouseUp}
          // onMouseLeave={this.onMouseUp}
          onMouseDown={this.onMouseDown}
          style={{
            backgroundColor: 'gray',
            display: 'flex',
            padding: '0 10px',
          }}
        >
          <div style={{ flex: 1 }}>
            {name}
          </div>

          <div onClick={this.onClickClose}>
            X
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Window;
