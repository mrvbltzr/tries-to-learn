// @ts-nocheck
/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Non Equality-Operators',
    snippets: [
        {
            label: 'Non-equality Comparisons',
            run: (output) => {
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
