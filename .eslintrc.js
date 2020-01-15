module.exports = {
  extends: 'airbnb-base',
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    "linebreak-style": 0,
    "global-require": 0,
    "eslint linebreak-style": [0, "error", "windows"],
    'consistent-return': 0,
    'function-paren-newline': 0,
    'no-else-return': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': ['error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'strict': ['error', 'global'],
    'operator-linebreak': [2, 'after'],
    'multiline-ternary': ['error', 'always-multiline'],
  },
  parserOptions: {
    sourceType: 'script',
  },

  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [
          'node_modules',
          '.',
        ]
      }
    }
  }
};
