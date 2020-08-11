module.exports = {
  lintOnSave: false,
  devServer: {
    port: 8081 // 端口号配置
  },
  configureWebpack: {
    externals: {
      AMap: "AMap" // 高德地图配置
    }
  }
};
