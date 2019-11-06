import React from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const getCoords = (prevStateCoords, currentCoords, clientRect) => {
  const newCoords = {
    ...prevStateCoords,
    top: prevStateCoords.top + (currentCoords.top - clientRect.top),
    left: prevStateCoords.left + (currentCoords.left - clientRect.left),
  };

  return newCoords;
};

const defaultWidth = 500;
const defaultHeight = 400;

const fullscreenWidth = 'calc(100% - 4px)';
const fullscreenHeight = 'calc(100% - 34px)';

const topLeftCorner = { left: 0, top: 30, width: fullscreenWidth, height: fullscreenHeight };

class Window extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clientRect: null,
      coords: props.window.coords,
      isFullscreenToggled: false,
    };

    this.lastCoords = this.state.coords;
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

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.onDrag);
  }

  onMouseUp = (event) => {
    this.props.onFocus(event);
    document.removeEventListener('mousemove', this.onDrag);
  }

  onMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();

    this.setState({ clientRect: { top: event.clientY, left: event.clientX } });
    document.addEventListener('mousemove', this.onDrag);
  }

  onDrag = (event) => {
    const currentCoords = { top: event.clientY, left: event.clientX };

    this.setState((prevState) => {
      const coords = getCoords(prevState.coords, currentCoords, prevState.clientRect);
      return { coords, clientRect: currentCoords };
    });
  }

  onMinimize = () => {

  }

  onFullscreenToggle = () => {
    if (this.state.isFullscreenToggled) {
      this.setState({
        coords: this.lastCoords,
        isFullscreenToggled: false,
      });
      return;
    }

    this.lastCoords = this.state.coords;
    this.setState({
      coords: topLeftCorner,
      isFullscreenToggled: true,
    });
  }

  onClick = (event) => {
    event.stopPropagation();
    this.props.onClose(this.props.window);
  }

  render() {
    const { coords } = this.state;
    const { name } = this.props.window;
    const { top = 0, left = 0, width = defaultWidth, height = defaultHeight } = coords;

    return (
      <div
        style={{ top, left, width, height }}
        className={cs('window', {
          'is-visible': this.props.isCurrentWindowVisible,
          'is-invisible': !this.props.isCurrentWindowVisible,
        })}
      >
        <div
          onMouseUp={this.onMouseUp}
          onMouseDown={this.onMouseDown}
          onDoubleClick={this.onFullscreenToggle}
          style={{
            backgroundColor: 'gray',
            display: 'flex',
            padding: '0 10px',
          }}
        >
          <div style={{ flex: 1 }}>
            {name}
          </div>

          <div style={{ display: 'flex' }}>
            <div
              style={{ paddingRight: '10px' }}
              onClick={this.onMinimize}
            >
              _
            </div>

            <div
              style={{ paddingRight: '10px' }}
              onClick={this.onFullscreenToggle}
            >
              ▢
            </div>

            <div
              style={{ paddingRight: '10px' }}
              onClick={this.onClick}
            >
              x
            </div>
          </div>
        </div>

        {this.props.children}
      </div>
    );
  }
}

export default Window;
