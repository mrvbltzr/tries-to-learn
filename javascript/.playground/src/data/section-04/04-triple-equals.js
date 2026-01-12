// @ts-nocheck
/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Triple Equals',
    snippets: [
        {
            label: 'Strict vs. Loose Equality',
            run: (output) => {
                output.log(2 == '2');
                output.log(2 === '2');
                output.log(0 == false);
                output.log(0 === false);
                output.log(undefined == null);
                output.log(undefined === null);
            },
            snippet: `
console.log(2 == '2'); // true (value is the same, type is ignored)
console.log(2 === '2'); // false (types are different)

console.log(0 == false); // true
console.log(0 === false); // false

console.log(undefined == null); // true
console.log(undefined === null); // false
`,
        },
        {
            label: 'Checking Login Status',
            run: (output) => {
                let isLoggedIn = 0;
                output.log(isLoggedIn == false);
                output.log(isLoggedIn === false);
            },
            snippet: `
let isLoggedIn = 0;

isLoggedIn == false; // true (this could be a bug)
isLoggedIn === false; // false (this is more accurate)
        `,
        },
    ],
};
