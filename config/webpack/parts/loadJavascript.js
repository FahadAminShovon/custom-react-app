exports.loadJavascript = () => ({
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: [{ loader: 'babel-loader' }] }],
  },
});
