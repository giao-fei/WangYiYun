const WorkboxPlugin = require("workbox-webpack-plugin")

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  outputDir: 'music',
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints:'warning',
      //入口起点的最大体积
      maxEntrypointSize: 50000000000,
      //生成文件的最大体积
      maxAssetSize: 3000000000,
      //只给出 js 文件的性能提示
      assetFilter: function(assetFilename) {
        return assetFilename.endsWith('.js');
      }
    }, 
    devServer: {
      open: true,
      port: 8080,
    },
    externals: isProd ? {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    } : {},
    plugins: [
      new WorkboxPlugin.GenerateSW()
    ]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({ // 把px单位换算成rem单位
            rootValue: 14, // 换算的基数(设计图750的根字体为75)
            // selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
            propList: ['*']
          })
        ]
      },
      sass: {
        prependData: `
          @import "@/style/variables.scss";
          @import "@/style/mixin.scss";
        `
      },
    },
  },
};
