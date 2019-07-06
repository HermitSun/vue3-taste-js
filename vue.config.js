const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// 生产环境部署的路径
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/vue3-taste-js/'
  : '/'

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'vue3-taste-js',
  assetsDir: '', // 放置生成的静态资源路径
  indexPath: 'index.html', // 指定生成的 index.html路径
  pages: undefined, // 构建多页
  productionSourceMap: false, // 开启生产环境的 source map
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('plugins', resolve('src/plugins'))
      .set('views', resolve('src/views'))
    config.resolve.extensions
      .add('*', '.js', '.json', '.vue')
  },
  devServer: {
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    port: 8085 // 端口号
  }
}
