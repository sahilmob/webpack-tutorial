const path = require("path");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  }
});
