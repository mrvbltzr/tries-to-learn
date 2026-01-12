import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import jsdoc from 'eslint-plugin-jsdoc';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
    // Basic JS Setup: applies standard recommended rules to all JS files.
    {
        files: ['**/*.{js,mjs,cjs}'],
        languageOptions: { globals: { ...globals.browser } },
        ...js.configs.recommended,
    },

    // Prettier Override: it turns off all ESLint rules that might conflict with Prettier formatting.
    eslintConfigPrettier,

    // Custom JS Rule Overrides: this is where our specific styling preferences live.
    {
        files: ['**/*.{js,mjs,cjs}'],
        rules: {
            'no-unused-vars': 'warn',
            'curly': ['error', 'all'],
            'object-curly-newline': [
                'warn',
                {
                    ImportDeclaration: 'never',
                    ExportDeclaration: {
                        multiline: true,
                        minProperties: 2,
                    },
                    ObjectPattern: { consistent: true },
                    ObjectExpression: {
                        multiline: true,
                        minProperties: 2,
                    },
                },
            ],
        },
    },

    // JSDoc/TSDoc Support: Sets up the plugin and recommended documentation rules.
    {
        ...jsdoc.configs['flat/recommended'],
        files: ['**/*.{js,mjs,cjs}'],
        rules: {
            'jsdoc/check-indentation': 'error',
            'jsdoc/check-tag-names': 'error',
            'jsdoc/require-hyphen-before-param-description': 'error',
            'jsdoc/tag-lines': ['error', 'any', { startLines: 1 }],
            'jsdoc/no-blank-blocks': ['error', { enableFixer: true }],
        },
    },

    // Global Ignores: prevents ESLint from looking at build artifacts or dependencies.
    {
        ignores: [
            'dist/**/*',
            'src/data/**/*',
            'node_modules/**/*',
            'package-lock.json',
            'eslint.config.js',
            'vite.config.js',
        ],
    },
]);
