/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Comparison Operators',
    snippets: [
        {
            label: 'Basic Numeric Comparisons',
            run: (output) => {
                output.log(-2 > 1);
                output.log(10 < 9999);
                output.log(2 >= 2);
                output.log(2 >= 5);
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
            run: (output) => {
                output.log('Hello!'.length >= 'Hello'.length);
            },
            snippet: `console.log("Hello!".length >= "Hello".length);`,
        },
        {
            label: 'String Comparisons via Unicode',
            run: (output) => {
                output.log('a' > 'A');
                output.log('B' < 'a');
                output.log('#' < '$');
            },
            snippet: `
console.log('a' > 'A'); // true (lowercase has a higher Unicode value)
console.log('B' < 'a'); // true (all uppercase come before lowercase)
console.log('#' < '$'); // true (based on their specific Unicode order)
`,
        },
    ],
};
