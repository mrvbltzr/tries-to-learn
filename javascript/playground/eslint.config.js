import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
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
        },
    },

    // Global Ignores: prevents ESLint from looking at build artifacts or dependencies.
    {
        ignores: ['dist/**/*', 'node_modules/**/*', 'package-lock.json', 'eslint.config.js', 'vite.config.js'],
    },
]);
