// @ts-nocheck
/* eslint-disable */

/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Block Scopes',
    snippets: [
        {
            label: 'Comparing let and var inside a block',
            output: (console) => {
                if (true) {
                    let animal = 'eel';
                    var fish = 'shrimp';
                }

                console.log(() => animal);
                console.log(fish);
            },
            snippet: `
if (true) {
    let animal = 'eel';
    var fish = 'shrimp';
}

console.log(animal); // Result: Error: animal is not defined
console.log(fish); // "shrimp"`,
        },
        {
            label: 'How Var leaks out of loops and causes issues',
            output: (console) => {
                var i = 10;
                for (var i = 0; i < 3; i++) {}
                console.log(i);

                let j = 10;
                for (let j = 0; j < 3; j++) {}
                console.log(j);
            },
            snippet: `
var i = 10;

for (var i = 0; i < 3; i++) {
    // This loop uses var
}

console.log(i); // Result: 3 (The value 10 was overwritten)

let j = 10;

for (let j = 0; j < 3; j++) {
    // This loop uses let
}

console.log(j); // Result: 10 (The loop variable did not leak)`,
        },
        {
            label: 'Using scopes inside a doubling function',
            output: (console) => {
                function doubleArray(arr) {
                    const result = [];

                    for (let num of arr) {
                        let double = num * 2;
                        result.push(double);
                    }

                    return result;
                }

                const doubled = doubleArray([1, 2, 3]);
                console.log(doubled);
            },
            snippet: `
function doubleArray(arr) {
    const result = [];

    for (let num of arr) {
        let double = num * 2;
        result.push(double);
    }

    return result;
}

const doubled = doubleArray([1, 2, 3]);
console.log(doubled); // [2, 4, 6]`,
        },
    ],
};
