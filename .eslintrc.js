module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['airbnb-base', 'prettier'],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
    browser: false,
  },
  settings: {
    'import/resolver': {
      node: {
        // Allow import and resolve for *.ts modules.
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
  },
}
