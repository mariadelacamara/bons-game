module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'react/jsx-uses-vars': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'no-unused-vars': 'error',
    'react/destructuring-assignment': ['error', 'always'],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }]
  },
}
