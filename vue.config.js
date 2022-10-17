const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //关掉语法检测
  lintOnSave: false,
  assetsDir: 'static',
  productionSourceMap: false
})
