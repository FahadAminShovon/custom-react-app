const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const getDevConfig = (env, argv) => {
  return {
    devServer: {
      port: env && env.PORT ? Number(env.PORT) : 3000,
      open: true,
    },
  };
};

module.exports = (env, argv) => {
  return merge([commonConfig(env, argv), getDevConfig(env, argv)]);
};
