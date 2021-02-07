const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "vendor_[fullhash].js",
    path: path.join(__dirname, "..", "dist"),
    library: "vendor_[fullhash]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "..", "dist", "vendor-manifest.json"),
      name: "vendor_[fullhash]",
    }),
  ],
};
