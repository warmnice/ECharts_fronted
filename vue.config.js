export default {
    chainWebpack: (config) => {
      config.module
        .rule('vue')
        .use('vue-loader')
        .loader('vue-loader')
        .tap((options) => {
          options.compiler = require.resolve('@vue/compiler-sfc');
          return options;
        });
    },
    // 其他配置...
  };
  