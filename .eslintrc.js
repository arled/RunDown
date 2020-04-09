module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['jest', 'prettier', 'import'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    'no-shadow': 'off',
    'no-void': 'off',
    'react-native/no-inline-styles': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: 'use(Navigation(Will|Did)FocusEffect|Async)$',
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-undef': 'off',
    'jest/no-disabled-tests': 'off',
    'no-use-before-define': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/class-name-casing': 'error',
    'spaced-comment': ['warn', 'always'],
    'no-constant-condition': ['error', { checkLoops: false }],
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/jsx-boolean-value': ['error', 'never', { always: [] }],
    'react/display-name': 'off',
    'default-case': ['error', { commentPattern: '^no default$' }],
    'no-else-return': ['error', { allowElseIf: false }],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use.
    },
  },
  // Override specific rules based off file type.
  overrides: [],
}
