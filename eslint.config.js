// eslint.config.js (hoặc eslint.config.mjs nếu sử dụng ES Modules)
import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import angular from '@angular-eslint/eslint-plugin';

export default {
  files: ['**/*.ts'],
  extends: [
    js.configs.recommended,
    tseslint.configs.recommended,
    tseslint.configs.stylistic,
    // angular.configs.tsRecommended,
  ],
  processor: angular.processInlineTemplates,
  rules: {
    '@angular-eslint/directive-selector': [
      'error',
      {
        type: 'attribute',
        prefix: 'app',
        style: 'camelCase',
      },
    ],
    '@angular-eslint/component-selector': [
      'error',
      {
        type: 'element',
        prefix: 'app',
        style: 'kebab-case',
      },
    ],
  },
  // overrides: [
  //   {
  //     files: ['**/*.html'],
  //     extends: [
  //       ...angular.configs.templateRecommended,
  //       ...angular.configs.templateAccessibility,
  //     ],
  //   },
  // ],
};

// TODO: Re-config ESLint for Angular
