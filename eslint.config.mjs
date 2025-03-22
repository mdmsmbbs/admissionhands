import js from '@eslint/js';
import next from 'eslint-plugin-next';
import pluginReact from 'eslint-plugin-react';

export default [
  js.configs.recommended,
  next.configs.recommended,
  pluginReact.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'react/no-unescaped-entities': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
