/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'NaN & Infinity',
    snippets: [
        {
            label: 'Demonstrating NaN (Not-a-Number)',
            output: (console) => {
                console.log(0 / 0);
                console.log(NaN + 5);
            },
            snippet: `
console.log(0 / 0);
console.log(NaN + 5);`,
        },
        {
            label: 'Demonstrating infinity and negative zero',
            output: (console) => {
                console.log(1 / 0);
                console.log(-1 / 0);
                console.log(-0);
            },
            snippet: `
console.log(1 / 0);
console.log(-1 / 0);
console.log(-0);`,
        },
    ],
};
