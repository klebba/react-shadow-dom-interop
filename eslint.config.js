import globals from 'globals';
import NetflixCommon from '@netflix/eslint-config';

export default [
  {
    ...NetflixCommon,
    files: ['**/*.js'],
    languageOptions: { globals: globals.browser },
  },
  {
    ignores: [
      'node_modules',
    ],
  },
];
