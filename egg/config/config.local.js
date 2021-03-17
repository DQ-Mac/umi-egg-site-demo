'use strict';

module.exports = () => {
  const config = (exports = {});

  config.logger = {
    level: 'NONE',
    consoleLevel: 'DEBUG',
  };

  // config.assets = {
  //   devServer: {
  //     debug: true,
  //   },
  // };

  return config;
};
