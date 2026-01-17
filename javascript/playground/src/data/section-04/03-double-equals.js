// @ts-nocheck
/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Double Equals',
    snippets: [
        {
            label: 'Basic Equality with Same Types',
            output: (output) => {
                output.log(5 == 5);
                output.log('apple' == 'apple');
                output.log(false == false);
            },
            snippet: `
output.log(5 == 5); // true
output.log('apple' == 'apple'); // true
output.log(false == false); // true
`,
        },
        {
            label: 'Equality with Coercion (Different Types)',
            output: (output) => {
                output.log(5 == '5');
                output.log(0 == '');
                output.log(0 == false);
                output.log(null == undefined);
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
