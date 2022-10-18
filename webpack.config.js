const path = require('path');


module.exports = {
    entry  : "./src/index.js",
    mode : "development",
    output : {
        filename : "main.js",
        path : path.resolve(__dirname,"dist"),
        clean : false
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            include: path.resolve(__dirname, 'src'),
            use: ['style-loader', 'css-loader', 'postcss-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
      static: 'dist',
      port: 3000,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    }

}