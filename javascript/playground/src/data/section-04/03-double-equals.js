// @ts-nocheck
/* eslint-disable */

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Double Equals',
    snippets: [
        {
            label: 'Basic Equality with Same Types',
            output: (console) => {
                console.log(5 == 5);
                console.log('apple' == 'apple');
                console.log(false == false);
            },
            snippet: `
output.log(5 == 5); // true
output.log('apple' == 'apple'); // true
output.log(false == false); // true
`,
        },
        {
            label: 'Equality with Coercion (Different Types)',
            output: (console) => {
                console.log(5 == '5');
                console.log(0 == '');
                console.log(0 == false);
                console.log(null == undefined);
            },
            snippet: `
5 == '5'; // true (number vs string)
0 == ''; // true (number vs empty string)
0 == false; // true (number vs boolean)
null == undefined; // true (distinct primitives)
`,
        },
    ],
};
