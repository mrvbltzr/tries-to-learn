// @ts-nocheck
/* eslint-disable */

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Triple Equals',
    snippets: [
        {
            label: 'Strict vs. Loose Equality',
            output: (console) => {
                console.log(2 == '2');
                console.log(2 === '2');
                console.log(0 == false);
                console.log(0 === false);
                console.log(undefined == null);
                console.log(undefined === null);
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
            output: (console) => {
                let isLoggedIn = 0;
                console.log(isLoggedIn == false);
                console.log(isLoggedIn === false);
            },
            snippet: `
let isLoggedIn = 0;

isLoggedIn == false; // true (this could be a bug)
isLoggedIn === false; // false (this is more accurate)
        `,
        },
    ],
};
