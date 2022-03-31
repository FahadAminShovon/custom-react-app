const HtmlWebpackPlugin = require('html-webpack-plugin');
const { __rootdirname } = require('../../utils');
const path = require('path');

exports.page = ({ title, url = '', chunks } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__rootdirname, 'public', 'index.html'),
      publicPath: '/',
      chunks,
      filename: `${url && url + '/'}index.html`,
      context: { title },
    }),
  ],
});
