/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Modulo and Exponentiation',
    snippets: [
        {
            label: 'Demonstrating modulo operator',
            output: (console) => {
                console.log(27 % 2);
                console.log(25 % 5);
                console.log(25 % 3);
                console.log(14 % 4);
            },
            snippet: `
console.log(27 % 2);
console.log(25 % 5);
console.log(25 % 3);
console.log(14 % 4);`,
        },
        {
            label: 'Using exponentiation to calculate powers',
            output: (console) => {
                console.log(2 ** 3);
                console.log(5 ** 2);
                console.log(5 ** 5);
            },
            snippet: `
console.log(2 ** 3);
console.log(5 ** 2);
console.log(5 ** 5);`,
        },
    ],
};
