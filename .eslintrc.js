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
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx', '.js', '.ts'] }],
    'import/extensions': [1, 'never', { svg: 'always' }],
    'no-use-before-define': 0,
  },
};
