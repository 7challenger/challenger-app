import omitBy from 'lodash/omitBy';

const generateListFromMap = (map) => {
  return Object.values(map);
};

const updateWindowInMap = (state, action, currentWindow, setActive) => {
  const activeName = setActive
    ? action.windowName
    : null;

  const newWindowsMap = { ...state.map, [action.windowName]: currentWindow };
  const newWindowsList = generateListFromMap(newWindowsMap);

  return {
    ...state,
    activeName,
    map: newWindowsMap,
    list: newWindowsList,
  };
};

export const doOpenWindow = (state, action, setActive = true) => {
  const processedWindow = {
    ...action.window,
    isVisible: true,
  };

  const activeName = setActive
    ? processedWindow.name
    : null;

  const newWindowsMap = {
    ...state.map,
    [action.window.name]: processedWindow,
  };
  const newWindowsList = generateListFromMap(newWindowsMap);

  return {
    ...state,
    activeName,
    map: newWindowsMap,
    list: newWindowsList,
  };
};

export const doCloseWindow = (state, action) => {
  const predicate = ({ name }) => action.window.name === name;

  const newWindowsMap = omitBy(state.map, predicate);
  const newWindowsList = generateListFromMap(newWindowsMap);

  return {
    ...state,
    map: newWindowsMap,
    list: newWindowsList,
  };
};

export const doSetActiveWindow = (state, action) => {
  if (action.activeStatus) {
    return {
      ...state,
      activeName: action.windowName,
    };
  }

  return {
    ...state,
    activeName: null,
  };
};

export const doMinimizeWindow = (state, action) => {
  const currentWindow = {
    ...state.map[action.windowName],
    isVisible: false,
  };

  return updateWindowInMap(state, action, currentWindow, false);
};


export const doRestoreWindow = (state, action) => {
  const currentWindow = {
    ...state.map[action.windowName],
    isVisible: true,
  };

  return updateWindowInMap(state, action, currentWindow, true);
};
