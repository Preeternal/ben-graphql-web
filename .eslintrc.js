module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx', '.js', '.ts'] },
    ],
    'import/extensions': [1, 'never', { svg: 'always' }],
    'no-use-before-define': 0,
    'import/prefer-default-export': 0,
    'react/require-default-props': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-curly-newline': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
