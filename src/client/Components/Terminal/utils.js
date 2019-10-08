const ls = 'ls';
const clear = 'clear';
const generate = 'generate';

const mockProjects = [
  { name: 'todo-list', color: 'red' },
  { name: 'todo-list', color: 'yellow' },
  { name: 'todo-list', color: 'blue' },
];

const formatBold = (string) => {
  return `<b>${string}</b>`;
};

const formatColor = (string, color) => {
  return `<span style="color: ${color};">${string}</span>`;
};

const formatBoldColor = (string, color = '') => {
  return formatBold(formatColor(string, color));
};

const tokenizeLineValue = (lineValue) => {
  return lineValue.split('$ ')[1];
};

export const validateCommand = async (command, lines) => {
  const tokenedCommand = tokenizeLineValue(command);

  switch (tokenedCommand) {
    case clear:
      return [];

    case generate:
      return [
        ...lines,
        command,
        formatColor('generating', 'white'),
      ];

    case ls:
      return [
        ...lines,
        command,
        mockProjects.map(({ name, color }) => formatBoldColor(name, color)).join(' '),
      ];

    default:
      return [
        ...lines,
        command,
        `command not found: ${tokenedCommand}`,
      ];
  }
};
