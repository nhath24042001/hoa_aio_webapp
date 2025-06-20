import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-plugin-prettier';
import simpleImport from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    name: 'eslint:recommended',
    files: ['**/*.{js,mjs,cjs,ts}'],
    plugins: {
      tseslint,
      prettier,
      simpleImport,
      unusedImports
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      'simpleImport/imports': 'warn',
      'simpleImport/exports': 'warn',
      // 'tseslint/no-unused-vars': 'off',
      'unusedImports/no-unused-imports': 'warn',
      'unusedImports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],
      // 'tseslint/no-explicit-any': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'always',
          semi: true,
          trailingComma: 'none',
          tabWidth: 2,
          endOfLine: 'auto',
          useTabs: false,
          singleQuote: true,
          printWidth: 120,
          jsxSingleQuote: true
        }
      ]
    }
  },
  { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts}'], plugins: { js }, extends: ['js/recommended'] },
  tseslint.configs.recommended
]);
