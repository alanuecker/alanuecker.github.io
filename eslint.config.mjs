import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
// import react from "eslint-plugin-react";
// import globals from "globals";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          arrowParens: 'avoid',
        },
      ],
    },
  },
  {
    ignores: ['dist', '**/node_modules'],
  },
  // todo: disabled due to error
  // {
  //   files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
  //   plugins: {
  //     react,
  //   },
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //     globals: {
  //       ...globals.browser,
  //     },
  //   },
  //   rules: {
  //     'prettier/prettier': [
  //       'error',
  //       {
  //         singleQuote: true,
  //         trailingComma: 'all',
  //         arrowParens: 'avoid',
  //       },
  //     ],
  //     'react/jsx-uses-react': 'error',
  //     'react/jsx-uses-vars': 'error',
  //   },
  // },
  eslintPluginPrettierRecommended,
);
