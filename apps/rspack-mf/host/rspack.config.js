const { composePlugins, withNx, withReact } = require('@nx/rspack');
const path = require('path');
// const { ModuleFederationPlugin } = require('@rspack/core').container;
const {
  ModuleFederationPlugin,
} = require('@module-federation/enhanced/rspack');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.output.publicPath = 'auto';
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        remote: 'remote@http://localhost:4201/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          version: '18.3.1',
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          version: '18.3.1',
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react/jsx-runtime': {
          singleton: true,
          version: '18.3.1',
          requiredVersion: '18.3.1',
          eager: true,
        },
        'react/jsx-dev-runtime': {
          singleton: true,
          version: '18.3.1',
          requiredVersion: '18.3.1',
          eager: true,
        },
      },
    })
  );
  return config;
});
