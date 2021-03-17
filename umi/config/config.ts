import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  /**
   * 站点路由。
   * 
   * https://umijs.org/zh-CN/docs/routing#%E8%B7%AF%E7%94%B1
   */
  routes,

  /**
   * ssr 服务端渲染，在本地开发时，可以注释 ssr 配置，实时更新速度更快，开发体验更佳。
   * 
   * https://umijs.org/zh-CN/config#ssr
   */
  ssr: {
    // HTML 中移除 window.getInitialProps 变量，避免 HTML 中有大量数据影响 SEO 效果，场景：静态站点。
    removeWindowInitialProps: true,
  },

  /**
   * 按需加载。
   * 
   * https://umijs.org/zh-CN/docs/deployment#%E6%8C%89%E9%9C%80%E5%8A%A0%E8%BD%BD
   */
  dynamicImport: {
    loading: '@/component/PageLoading/index',
  },

  /**
   * 静态资源在非根目录时需要设置。
   *
   * 如当静态资源在 /public 目当下时设置为
   * publicPath: '/public/',
   *
   * 如果同时要兼顾开发环境正常调试，可以设置为
   * publicPath: process.env.NODE_ENV === 'production' ? '/public/' : '/',
   * 
   * https://umijs.org/zh-CN/config#publicpath
   */
  publicPath: '/',

  /**
   * 打包输出产物的目录，及当使用 umi build 命令时，所输出产物将放到 egg 目录中。
   * https://umijs.org/zh-CN/config#outputpath
   */
  outputPath: '../egg/app/public',

  /**
   * 当使用 ssr 服务器端渲染 和 dynamicImport 按需加载功能时，需要将 manifest.json 文件存放到 egg/config 目录中去。
   * manifest.fileName 的路径是相对于 outputPath 路径的。
   * https://umijs.org/zh-CN/config#manifest
   */
  manifest: {
    fileName: '../../config/manifest.json',
  },

  /**
   * 产物文件名加 hash 值，可以减少增量发布的文件数量。
   * https://umijs.org/zh-CN/config#hash
   */
  hash: true,

  /**
   * 使用 Helmet，可以在每一个页面指定 title，但必须关闭全局默认标题。
   * https://umijs.org/zh-CN/config#title
   */
  title: false,
  
  /**
   * 关闭 umi 自带的 布局组件。
   * https://umijs.org/zh-CN/docs/convention-routing#%E5%85%A8%E5%B1%80-layout
   */
  layout: false,

  /**
   * 配置 favicon 地址。
   */
  favicon: 'https://www.meizu.com/static/global/images/favicon-90c2e618ff.ico',
  
  /**
   * 配置是否启用单数模式的目录。
   * 比如 src/pages 的约定在开启后为 src/page 目录。
   */
  singular: true,

  /**
   * 设置 node_modules 目录下依赖文件的编译方式。
   * 默认是 all，全部编译；none 默认值编译 es5-imcompatible-versions 里声明的依赖。
   * https://umijs.org/zh-CN/config#nodemodulestransform
   */
  nodeModulesTransform: {
    type: 'none',
  },

  /**
   * 快速刷新，只在开发模式中有效。
   */
  fastRefresh: {},
});
