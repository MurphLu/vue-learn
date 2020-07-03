const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery: "jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },
  devServer: {
    proxy: {
      '/api' : {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}