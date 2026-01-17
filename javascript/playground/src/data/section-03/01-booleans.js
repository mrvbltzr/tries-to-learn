// @ts-nocheck

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Booleans',
    snippets: [
        {
            label: 'Creating boolean variables',
            output: (console) => {
                let isLoggedIn = true;
                let gameOver = false;
                const isWaterWet = true;

                console.log(isLoggedIn);
                console.log(gameOver);
                console.log(isWaterWet);
            },
            snippet: `
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

console.log(isLoggedIn);
console.log(gameOver);
console.log(isWaterWet);
`,
        },
        {
            label: 'Changing boolean to number variable type',
            output: (console) => {
                let isAngry = false;
                console.log(isAngry);

                isAngry = 1239; // Valid JavaScript, but bad practice
                console.log(isAngry);
            },
            snippet: `
let isAngry = false;
console.log(isAngry);

isAngry = 1239; // Valid JavaScript, but bad practice
console.log(isAngry);
`,
        },
    ],
};
