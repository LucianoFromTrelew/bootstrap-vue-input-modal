const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  externals: {
    vue: 'vue',
    bootstrapVue: 'bootstrap-vue',
    vueAwesome: 'vue-awesome',
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'b-input-modal.min.js',
      libraryTarget: 'window',
      library: 'InputModal',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/InputModal.vue'),
    output: {
      filename: 'b-input-modal.js',
      libraryTarget: 'umd',
      library: 'b-input-modal',
      umdNamedDefine: true
    }
  })
];
