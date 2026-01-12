/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config & import('@trivago/prettier-plugin-sort-imports').PrettierConfig}
 */
const config = {
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    quoteProps: 'consistent',

    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrder: [
        '<BUILTIN_MODULES>',
        '<THIRD_PARTY_MODULES>',
        '^@/.*\\.css$',
        '^@/.*\\.(png|jpg|jpeg|gif|svg|webp)$',
        '^@/.*data.*$',
        '^@/(?!.*data.*)(.*)$',
    ],
};

export default config;
