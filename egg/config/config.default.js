/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615036747099_9796';

  // add your middleware config here
  config.middleware = [];

  // 放置静态资源，egg-static
  // https://github.com/eggjs/egg-static
  config.static = {
    prefix: '/',
  };

  config.assets = {
    // 此路径要与 umi 中的设置一致
    // 当为 / 时，这里要见写 ''，避免输出 //
    publicPath: '',
    // 使用 egg-bin dev 时，要把 config 里的 manifest.json 文件删除
    devServer: {
      enable: true,
      command: 'umi dev',
      port: 8000,
      env: {
        APP_ROOT: '../umi',
        BROWSER: 'none',
        ESLINT: 'none',
        SOCKET_SERVER: 'http://127.0.0.1:8000',
        PUBLIC_PATH: 'http://127.0.0.1:8000',
      },
    },
  };

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
  };

  config.proxy = true;

  config.security = {
    csrf: false,
    xframe: {
      enable: false,
    },
  };

  return {
    ...config,
  };
};
