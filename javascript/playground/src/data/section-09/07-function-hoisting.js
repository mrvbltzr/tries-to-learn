// @ts-nocheck

/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Function Hoisting',
    snippets: [
        {
            label: 'Function hoisting with declarations',
            output: (console) => {
                howl();

                function howl() {
                    console.log('AWOOOO');
                }
            },
            snippet: `
howl(); // Result: AWOOOO

function howl() {
    console.log('AWOOOO');
}`,
        },
        {
            label: 'Function hoisting with expressions',
            output: (console) => {
                hoot();

                var hoot = function () {
                    console.log('Whoo hoo!');
                };
            },
            snippet: `
hoot(); // Result: Uncaught TypeError: hoot is not a function

var hoot = function() {
    console.log('Whoo hoo!');
};`,
        },
        {
            label: 'Function hoisting with var versus let',
            output: (console) => {
                console.log(animal);
                var animal = 'tapir';

                console.log(() => shrimp);
                let shrimp = 'harlequin shrimp';
            },
            snippet: `
console.log(animal);
var animal = 'tapir';
// Result: undefined (Declaration is hoisted, but not the value)

console.log(shrimp);
let shrimp = 'harlequin shrimp'; // Result: ReferenceError`,
        },
    ],
};
