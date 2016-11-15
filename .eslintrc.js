module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'rules': {
        'array-bracket-spacing': ['error', 'always', { 'singleValue': false, 'arraysInArrays': false, 'objectsInArrays': false }],
        'brace-style': ['error', '1tbs', {allowSingleLine: false}],
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'consistent-this': ['error', '_this', 'root'],
        'curly': 'error',
        'eol-last': 'error',
        'eqeqeq': ['error', 'always'],
        'indent': 'error',
        'key-spacing': ['error', {beforeColon: false, afterColon: true}],
        'keyword-spacing': 'error',
        'linebreak-style': ['error', 'unix'],
        'new-cap': ['error', {capIsNew: false}],
        'no-caller': 'error',
        'no-console': 'off',
        'no-extend-native': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-multiple-empty-lines': 'error',
        'no-new': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used' }],
        'no-use-before-define': ['error', {functions: false, classes: true }],
        'no-with': 'error',
        'object-curly-spacing': ['error', 'never'],
        'padded-blocks': ['error', 'never'],
        'semi': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', 'never'],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': ['error', 'always'],
        'wrap-iife': ['error', 'any'],
        'yoda': 'error'
    }
};
