// @ts-nocheck

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'String',
    snippets: [
        {
            label: 'Concatenate first name and last name to form a full name',
            output: (console) => {
                let firstName = 'Karen';
                let lastName = 'Yuzuhira';
                let fullName = firstName + ' ' + lastName;
                console.log(fullName);
            },
            snippet: `
let firstName = 'Karen';
let lastName = 'Yuzuhira';
let fullName = firstName + ' ' + lastName;
console.log(fullName);`,
        },
        {
            label: 'Using invalid arithmetic operators with strings',
            output: (console) => {
                console.log('Invalid' / 'Operators');
            },
            snippet: `
console.log('Invalid' / 'Operators');`,
        },
        {
            label: 'Demonstrating the string length property',
            output: (console) => {
                let myString = 'example';
                let stringLength = myString.length;
                console.log(stringLength);
            },
            snippet: `
let myString = 'example';
let stringLength = myString.length;
console.log(stringLength);`,
        },
        {
            label: 'Accessing characters in a string using index',
            output: (console) => {
                let actress = 'Ranran Fujii';
                console.log(actress[0]);
                console.log(actress[1]);
                console.log(actress[10]);
                console.log(actress[12]);
                console.log(actress[120]);
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
            output: (console) => {
                let gibberish = 'some gibberish';
                let lastChar = gibberish[gibberish.length - 1];
                console.log(lastChar);
            },
            snippet: `
let gibberish = 'some gibberish';
let lastChar = gibberish[gibberish.length - 1];
console.log(lastChar);`,
        },
        {
            label: 'Demonstrating string immutability',
            output: (console) => {
                let faveActress = 'Fukada';
                faveActress[0] = 'P';
                console.log(faveActress);
            },
            snippet: `
let faveActress = 'Fukada';
faveActress[0] = 'P';
console.log(faveActress);`,
        },
    ],
};
