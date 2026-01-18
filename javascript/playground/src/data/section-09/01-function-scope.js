// @ts-nocheck
/* eslint-disable */

/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Function Scope',
    snippets: [
        {
            label: 'Variables are not accessible outside functions',
            output: (console) => {
                function lol() {
                    let person = 'Tom';
                    const age = 45;
                    var color = 'teal';
                }

                lol();
                console.log(() => person);
            },
            snippet: `
function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
}

lol();
console.log(person); // Result: Uncaught ReferenceError: person is not defined`,
        },
        {
            label: 'Variables with the same name in different scopes',
            output: (console) => {
                let bird = 'Mandarin Duck';

                function birdWatch() {
                    let bird = 'Golden Pheasant';
                    console.log(bird);
                }

                birdWatch();
                console.log(bird);
            },
            snippet: `
let bird = 'Mandarin Duck';

function birdWatch() {
    let bird = 'Golden Pheasant';
    console.log(bird); // "Golden Pheasant"
}

birdWatch();
console.log(bird); // "Mandarin Duck"`,
        },
    ],
};
