const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: process.env.VUE_APP_BACKEND_URL,
        changeOrigin: true
      },
    }
  }
}