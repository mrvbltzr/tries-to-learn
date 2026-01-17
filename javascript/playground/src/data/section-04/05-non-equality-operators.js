// @ts-nocheck
/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Non Equality-Operators',
    snippets: [
        {
            label: 'Non-equality Comparisons',
            output: (output) => {
                output.log(1 != '1');
                output.log(1 !== '1');
            },
            snippet: `
1 != '1'; // false (they are treated as equal)
1 !== '1'; // true (they are not strictly equal because types differ)
`,
        },
    ],
};
