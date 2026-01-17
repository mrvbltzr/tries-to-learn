/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'String: Methods',
    snippets: [
        {
            label: 'Converting a string to uppercase',
            output: (output) => {
                let message = 'you are so grounded mister';
                let upperCaseMessage = message.toUpperCase();
                output.log(upperCaseMessage);
                output.log(message);
            },
            snippet: `
let message = 'you are so grounded mister';
let upperCaseMessage = message.toUpperCase();
console.log(upperCaseMessage);
console.log(message);`,
        },
        {
            label: 'Converting a string to lowercase',
            output: (output) => {
                let message = 'YOU ARE SO GROUNDED MISTER';
                let lowerCaseMessage = message.toLowerCase();
                output.log(lowerCaseMessage);
                output.log(message);
            },
            snippet: `
let message = 'YOU ARE SO GROUNDED MISTER';
let lowerCaseMessage = message.toLowerCase();
console.log(lowerCaseMessage);
console.log(message);`,
        },
        {
            label: 'Using the trim method to remove whitespace from a string',
            output: (output) => {
                let color = '   purple   ';
                let trimmedColor = color.trim();
                output.log(trimmedColor);
                output.log(color);
                let chainedResult = color.trim().toUpperCase();
                output.log(chainedResult);
            },
            snippet: `
let color = '   purple   ';
let trimmedColor = color.trim();
console.log(trimmedColor);
console.log(color);
let chainedResult = color.trim().toUpperCase();
console.log(chainedResult);`,
        },
        {
            label: 'Finding the index of a substring',
            output: (output) => {
                const tvShow = 'catdog';
                output.log(tvShow.indexOf('cat'));
                output.log(tvShow.indexOf('dog'));
            },
            snippet: `
const tvShow = 'catdog';
console.log(tvShow.indexOf('cat'));
console.log(tvShow.indexOf('dog'));`,
        },
        {
            label: 'Slicing strings',
            output: (output) => {
                const sport = 'baseball';
                output.log(sport.slice(4));
                const superHero = 'SuperHero';
                output.log(superHero.slice(0, 5));
            },
            snippet: `
const sport = 'baseball';
console.log(sport.slice(4));
const superHero = 'SuperHero';
console.log(superHero.slice(0, 5));`,
        },
        {
            label: 'Replacing substrings',
            output: (output) => {
                const str = 'baseball is entertaining';
                output.log(str.replace('entertaining', 'OC'));
                const ha = 'ha ha ha';
                output.log(ha.replace('ha', 'hee'));
            },
            snippet: `
const str = 'baseball is entertaining';
console.log(str.replace('entertaining', 'OC'));
const ha = 'ha ha ha';
console.log(ha.replace('ha', 'hee'));`,
        },
    ],
};
