/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Comparison Operators',
    snippets: [
        {
            label: 'Basic Numeric Comparisons',
            output: (console) => {
                console.log(-2 > 1);
                console.log(10 < 9999);
                console.log(2 >= 2);
                console.log(2 >= 5);
            },
            snippet: `
console.log(-2 > 1);
console.log(10 < 9999);
console.log(2 >= 2);
console.log(2 >= 5);
`,
        },
        {
            label: 'Comparing Length Properties',
            output: (console) => {
                console.log('Hello!'.length >= 'Hello'.length);
            },
            snippet: `console.log("Hello!".length >= "Hello".length);`,
        },
        {
            label: 'String Comparisons via Unicode',
            output: (console) => {
                console.log('a' > 'A');
                console.log('B' < 'a');
                console.log('#' < '$');
            },
            snippet: `
console.log('a' > 'A'); // true (lowercase has a higher Unicode value)
console.log('B' < 'a'); // true (all uppercase come before lowercase)
console.log('#' < '$'); // true (based on their specific Unicode order)
`,
        },
    ],
};
