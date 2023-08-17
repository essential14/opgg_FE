const { defineConfig } = require("@vue/cli-service");
module.exports = {
  transpileDependencies: true,

  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
};
