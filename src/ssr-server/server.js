import 'babel-polyfill';

import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Root from '../client/Root';
import createStore from '../core/createStore';

const PORT = 3000;
const app = express();

// const store = createStore({ auth: { user: true } });
const store = createStore();

const clientScript = './react-app.js';
const reactRoot = ReactDOMServer.renderToString(<Root store={store} />);

app.use(express.static('build', { index: false }));
app.use(express.static('assets', { index: false }));
app.get('/', async (req, res) => {
  // TODO: move to serialize
  const storeData = JSON.stringify(store.getState());

  return res.send(
    `<html>
      <head>
        <script>
          window.__data = ${storeData};
        </script>
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <link href="index.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@1.207/distr/fira_code.css">
      </head>

      <body style="margin: 0; font-size: calc(12px + 0.25vw);">
        <div id="root">${reactRoot}</div>
      </body>
      <script src=${clientScript}></script>
    </html>`,
  );
});

// eslint-disable-next-line
app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`); });
