import React from 'react';

const TrayIcon = ({ icon: Icon }) => {
  return (
    <div className="tray-icon">
      <Icon.Component />
    </div>
  );
};

export default TrayIcon;
