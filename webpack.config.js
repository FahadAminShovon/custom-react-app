const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = (env, argv) => {
  return {
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
      clean: true,
    },
    devServer: {
      port: env && env.PORT ? Number(env.PORT) : 3000,
      open: true,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        { test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }] },
        {
          test: /\.css$/,
          use: [
            { loader: MiniCSSExtractPlugin.loader },
            { loader: 'css-loader', options: { modules: true } },
          ],
        },
        { test: /\.(jpg|jpeg|png)/, type: 'asset' },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      new MiniCSSExtractPlugin({
        filename: 'main.css',
      }),
    ],
  };
};
