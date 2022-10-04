/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  root: true,
  'extends': [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    'sourceType': 'module'
  }
}
