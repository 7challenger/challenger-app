const commonConfig = require('./webpack.common');

module.exports = {
  ...commonConfig,
  entry: './src/client/index.js',
  target: 'web',

  output: {
    ...commonConfig.output,
    filename: 'react-app.js',
    sourceMapFilename: '[file].map',
  },
};
