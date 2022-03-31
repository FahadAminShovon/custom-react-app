const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const getProdConfig = (env, argv) => {
  return {};
};

module.exports = (env, argv) => {
  return merge([commonConfig(env, argv), getProdConfig(env, argv)]);
};
