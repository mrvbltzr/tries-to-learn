/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'String: Template Literals',
    snippets: [
        {
            label: 'Using template literals for string interpolation',
            output: (output) => {
                let animal = 'pig';
                let sound = 'oink';
                let sentence = `${animal} says ${sound}!`;
                output.log(sentence);
            },
            snippet: `
let animal = 'pig';
let sound = 'oink';
let sentence = \`\${animal} says \${sound}!\`;
console.log(sentence);`,
        },
        {
            label: 'Building a string with multiple interpolations',
            output: (output) => {
                let item = 'cucumbers';
                let price = 1.99;
                let quantity = 4;
                let total = price * quantity;
                let res = `You bought ${quantity} ${item}. The total price is $${total}.`;
                output.log(res);
            },
            snippet: `
let item = 'cucumbers';
let price = 1.99;
let quantity = 4;
let total = price * quantity;
let output = \`You bought \${quantity} \${item}. The total price is $\${total}.\`;
console.log(output);`,
        },
    ],
};
