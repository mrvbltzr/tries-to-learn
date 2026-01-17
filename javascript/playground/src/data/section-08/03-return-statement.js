/* eslint-disable no-unreachable */
// @ts-nocheck

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Return Statement',
    snippets: [
        {
            label: 'Capturing return values from functions',
            output: (console) => {
                const scream = 'hello'.toUpperCase();
                console.log(scream);

                function addAndPrint(x, y) {
                    console.log(x + y);
                }

                const sum = addAndPrint(1, 2);
                console.log(sum);

                function add(x, y) {
                    return x + y;
                }

                const total = add(4, 5);
                console.log(total);
            },
            snippet: `
const scream = "hello".toUpperCase();
console.log(scream);

function addAndPrint(x, y) {
    console.log(x + y);
}

const sum = addAndPrint(1, 2);
console.log(sum); // undefined

function add(x, y) {
    return x + y;
}

const total = add(4, 5);
console.log(total); // 9`,
        },
        {
            label: 'Code after return will not execute',
            output: (console) => {
                function square(x) {
                    return x * x;
                    console.log('All done');
                }

                console.log(square(4));
            },
            snippet: `
function square(x) {
    return x * x;
    console.log('All done'); // This will never run
}

console.log(square(4)); // 16`,
        },
        {
            label: 'Multiple returns in a function',
            output: (console) => {
                function isPurple(color) {
                    if (color.toLowerCase() === 'purple') {
                        return true;
                        console.log('Yay');
                    }
                    return false;
                }

                console.log(isPurple('purple'));
                console.log(isPurple('red'));
            },
            snippet: `
function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
        console.log('Yay'); // This will never run
    }

    return false;
}

console.log(isPurple('purple')); // true
console.log(isPurple('red')); // false`,
        },
        {
            label: 'Shortening a boolean function',
            output: (console) => {
                function isPurple(color) {
                    return color.toLowerCase() === 'purple';
                }

                console.log(isPurple('red'));
            },
            snippet: `
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

console.log(isPurple('red')); // false`,
        },
        {
            label: 'Using return to stop a loop early',
            output: (console) => {
                function containsPurple(arr) {
                    for (let color of arr) {
                        if (color === 'purple' || color === 'magenta') {
                            return true;
                        }
                    }
                    return false;
                }

                const colors = ['blue', 'pink', 'magenta'];
                console.log(containsPurple(colors));
            },
            snippet: `
function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true; // Found it, stop everything
        }
    }
    return false;
}

const colors = ['blue', 'pink', 'magenta'];
console.log(containsPurple(colors)); // true`,
        },
    ],
};
