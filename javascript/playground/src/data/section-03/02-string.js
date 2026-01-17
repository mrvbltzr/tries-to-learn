// @ts-nocheck

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'String',
    snippets: [
        {
            label: 'Concatenate first name and last name to form a full name',
            output: (output) => {
                let firstName = 'Karen';
                let lastName = 'Yuzuhira';
                let fullName = firstName + ' ' + lastName;
                output.log(fullName);
            },
            snippet: `
let firstName = 'Karen';
let lastName = 'Yuzuhira';
let fullName = firstName + ' ' + lastName;
console.log(fullName);`,
        },
        {
            label: 'Using invalid arithmetic operators with strings',
            output: (output) => {
                output.log('Invalid' / 'Operators');
            },
            snippet: `
console.log('Invalid' / 'Operators');`,
        },
        {
            label: 'Demonstrating the string length property',
            output: (output) => {
                let myString = 'example';
                let stringLength = myString.length;
                output.log(stringLength);
            },
            snippet: `
let myString = 'example';
let stringLength = myString.length;
console.log(stringLength);`,
        },
        {
            label: 'Accessing characters in a string using index',
            output: (output) => {
                let actress = 'Ranran Fujii';
                output.log(actress[0]);
                output.log(actress[1]);
                output.log(actress[10]);
                output.log(actress[12]);
                output.log(actress[120]);
            },
            snippet: `
let actress = 'Ranran Fujii';
console.log(actress[0]);
console.log(actress[1]);
console.log(actress[10]);
console.log(actress[12]);
console.log(actress[120]);`,
        },
        {
            label: 'Accessing the last character of a string',
            output: (output) => {
                let gibberish = 'some gibberish';
                let lastChar = gibberish[gibberish.length - 1];
                output.log(lastChar);
            },
            snippet: `
let gibberish = 'some gibberish';
let lastChar = gibberish[gibberish.length - 1];
console.log(lastChar);`,
        },
        {
            label: 'Demonstrating string immutability',
            output: (output) => {
                let faveActress = 'Fukada';
                faveActress[0] = 'P';
                output.log(faveActress);
            },
            snippet: `
let faveActress = 'Fukada';
faveActress[0] = 'P';
console.log(faveActress);`,
        },
    ],
};
