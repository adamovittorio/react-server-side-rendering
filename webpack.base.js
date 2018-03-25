
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'es2015',
            'stage-0',
          ],
          plugins: [
            ['transform-decorators-legacy'],
          ],
        },
      },
    ],
  },
};
