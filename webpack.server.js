const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },
  externals: [webpackNodeExternals()],
};
