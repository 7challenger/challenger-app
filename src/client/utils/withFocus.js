import React from 'react';
import { connect } from 'react-redux';

import { setActiveWindow } from '../modules/windows/store/actions';

const getIsCurrentWindowVisible = (state, name) => {
  const currentWindow = state.windows.map[name];
  return currentWindow && currentWindow.isVisible;
};

const withFocus = (name) => (Component) => {
  @connect((state) => {
    return {
      window: state.windows.map[name] || null,
      isCurrentWindowVisible: getIsCurrentWindowVisible(state, name),
    };
  }, {
    setActiveWindow,
  })
  class WithFocus extends React.Component {
    componentRef = React.createRef()

    onFocus = () => {
      this.props.setActiveWindow(name, true);

      if (this.componentRef.current) {
        this.componentRef.current.focus();
      }
    }

    onBlur = () => {
      this.props.setActiveWindow(name, false);
    }

    render() {
      const { isCurrentWindowVisible } = this.props;

      return this.props.window && (
        <Component
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          window={this.props.window}
          withFocusPropRef={this.componentRef}
          isCurrentWindowVisible={isCurrentWindowVisible}
        />
      );
    }
  }

  return WithFocus;
};

export default withFocus;
