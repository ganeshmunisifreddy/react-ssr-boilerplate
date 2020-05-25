const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

let serverConfig = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
