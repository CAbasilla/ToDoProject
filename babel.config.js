module.exports = {
  presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
  env: {
    production: {
      plugins: [
        'react-native-paper/babel',
        [
          '@babel/plugin-transform-react-jsx',
          {
            runtime: 'automatic',
            importSource: 'nativewind',
          },
        ],
      ],
    },
  },
};
