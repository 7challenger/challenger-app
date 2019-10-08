module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    'react/prefer-stateless-function': 0,
    'react/destructuring-assignment': 0,
    'react/sort-comp': 0,
    'react/prop-types': 0,
    'no-underscore-dangle': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'arrow-body-style': 0,
    'react/jsx-props-no-spreading': 0,
    'operator-linebreak': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'object-curly-newline': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'react/static-property-placement': 0,
    'react/forbid-prop-types': 0,
  },
  plugins: [
    'react',
  ]
};
