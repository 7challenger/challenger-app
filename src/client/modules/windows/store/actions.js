import * as AT from './actionTypes';

export const setActiveWindow = (windowName, activeStatus) => {
  return { type: AT.SET_ACTIVE_WINDOW, activeStatus, windowName };
};

export const openWindow = (windowObj) => {
  return { type: AT.OPEN_WINDOW, window: windowObj };
};

export const closeWindow = (windowObj) => {
  return { type: AT.CLOSE_WINDOW, window: windowObj };
};

export const minimizeWindow = (windowName) => {
  return { type: AT.MINIMIZE_WINDOW, windowName };
};

export const restoreWindow = (windowName) => {
  return { type: AT.RESTORE_WINDOW, windowName };
};
