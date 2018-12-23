module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb/base',
    'plugin:prettier/recommended'
  ],
  rules: {
    'no-console': 'off',
    'prettier/prettier': ['error', { singleQuote: true }]
  },
  settings: {
    'import/resolver': {
      'babel-module': {}
    }
  }
};
