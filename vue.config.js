// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:8080'
//   }
// }

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3030",
        changeOrigin: true,
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },
};
