const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Импортируем плагин
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development"; // По умолчанию режим development
let target = "web";
if (process.env.NODE_ENV === "production") {
  // Режим production, если
  // при запуске вебпака было указано --mode=production
  mode = "production";
  target = "browserslist";
}

const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html", // Данный html будет использован как шаблон
  }),
  new MiniCssExtractPlugin({
    filename: "[name].[contenthash].css", // Формат имени файла
  }), // Добавляем в список плагинов
]; // Создаем массив плагинов

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode,
  plugins,
  entry: "./src/index.js",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.tsx?$/,
        use: {
            loader: "ts-loader",
            options: {
                compilerOptions: {
                    noEmit: false,
                  },
            }
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: mode === "production" ? "asset" : "asset/resource", // В продакшен режиме
        // изображения размером до 8кб будут инлайнится в код
        // В режиме разработки все изображения будут помещаться в dist/assets
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
};
