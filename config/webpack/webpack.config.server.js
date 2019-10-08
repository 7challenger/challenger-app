const nodeExternals = require('webpack-node-externals');
const commonConfig = require('./webpack.common');

module.exports = {
  ...commonConfig,
  entry: './src/ssr-server/server.js',
  target: 'node',

  externals: [nodeExternals()],

  output: {
    ...commonConfig.output,
    filename: 'server.js',
  },
};
