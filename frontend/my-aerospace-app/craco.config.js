const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: {
    plugins: {
      add: [
        new CopyWebpackPlugin({
          patterns: [
            { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Workers'), to: 'Workers' },
            { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/ThirdParty'), to: 'ThirdParty' },
            { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Assets'), to: 'Assets' },
            { from: path.resolve(__dirname, 'node_modules/cesium/Build/Cesium/Widgets'), to: 'Widgets' }
          ],
        }),
      ],
    },
  },
};
