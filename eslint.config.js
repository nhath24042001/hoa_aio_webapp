import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angularEslint from "@angular-eslint/eslint-plugin";
import angularParser from "@angular-eslint/template-parser";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        console: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@angular-eslint": angularEslint,
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
  {
    // This section handles the test files
    files: ["src/**/*.spec.ts", "src/**/*.test.ts"], // Update the pattern if necessary
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
    },
    globals: {
      describe: "readonly",  // Add Jasmine globals
      it: "readonly",
      beforeEach: "readonly",
      afterEach: "readonly",
      expect: "readonly",
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "@angular-eslint": angularEslint,
    },
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
    },
  },
  {
    files: ["src/**/*.html"],
    languageOptions: {
      parser: angularParser,
    },
    plugins: {
      "@angular-eslint": angularEslint,
    },
    rules: {
      ...angularEslint.configs.recommended.rules,
    },
  },
  {
    ignores: ["dist", "node_modules"],
  },
  prettier,
];
