const { merge } = require('webpack-merge');
const { loadImages, loadJavascript, extractCSS, page } = require('./parts');
const getCommonConfig = (env, argv) => {
  return {
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  };
};

module.exports = (env, argv) => {
  return merge([
    loadImages(),
    loadJavascript(),
    extractCSS(),
    page(),
    getCommonConfig(env, argv),
  ]);
};
