export const UserId = 'user';

const BrowserTitle = 'Browser';
const TerminalTitle = 'Terminal';

export const windowTitles = {
  Browser: BrowserTitle,
  Terminal: TerminalTitle,
};

export const TerminalWindow = {
  name: windowTitles.Terminal,
  icon: './term-icon.png',

  coords: {
    top: 110,
    left: 900,
  },

  meta: {
    opensOnStartup: true,
  },
};

export const BrowserWindow = {
  name: windowTitles.Browser,
  icon: './browser-icon.png',

  coords: {
    top: 110,
    left: 450,
  },

  meta: {
    opensOnStartup: false,
  },
};
