module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.ts', '.tsx', 'd.ts', '.jsx'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
