const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    path: `${__dirname}/../../build`,
    chunkFilename: '[name].chunk.js',
  },

  devtool: 'source-map',

  optimization: {
    minimizer: [
      new TerserPlugin({ sourceMap: true }),
    ],
  },

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          sourceMap: true,
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    }],
  },
};
