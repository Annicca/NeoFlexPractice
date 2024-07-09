const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const libImport = '@import "/src/app/styles/mixins/index.scss";';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/app/index.scss", "./src/app/index.tsx"],
  mode: "development",
  output: {
    filename: "bundle.[fullhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    assetModuleFilename: path.join("assets", "[name].[contenthash][ext]"),
  },
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 3000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "app", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "defaults" }]],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.s[a|c]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          ,
          "css-loader",
          "postcss-loader",
          "sass-loader",
          "webpack-append?" + libImport,
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "[name].[contenthash][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: "[name].[contenthash][ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "[name].[contenthash][ext]",
        },
      },
    ],
  },
};
