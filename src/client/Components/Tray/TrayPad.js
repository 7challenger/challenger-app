import React from 'react';
import cs from 'classnames';

const getOnClick = (window, isActive, restoreWindow, minimizeWindow) => {
  if (isActive) {
    return () => minimizeWindow(window.name);
  }

  return () => restoreWindow(window.name);
};

const TrayPad = ({ window, isActive, restoreWindow, minimizeWindow }) => {
  const onClick = getOnClick(window, window.isVisible, restoreWindow, minimizeWindow);

  return (
    <div
      onClick={onClick}
      className={cs('tray-pad', { 'tray-pad__is-active': window.isVisible && isActive })}
    >
      <img
        alt=""
        className="tray-menu-icon"
        src={window.icon || './tray-icon.png'}
        style={{ paddingRight: '5px' }}
      />

      {window.name}
    </div>
  );
};

export default TrayPad;
