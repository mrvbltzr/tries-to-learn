/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Order of Operations',
    snippets: [
        {
            label: 'Order of operations',
            output: (console) => {
                console.log(3 - 9 * 2);
                console.log((3 - 9) * 2);
            },
            snippet: `
console.log(3 - 9 * 2);
console.log((3 - 9) * 2);`,
        },
    ],
};
