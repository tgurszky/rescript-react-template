const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    react: "react",
    "react-dom": "react-dom",
  },
  output: {
    filename: "[name]_[fullhash].js",
    path: path.resolve(__dirname, "..", "dist"),
    library: "vendor_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "..", "config", "manifest.json"),
      name: "vendor_[fullhash]",
    }),
  ],
};
