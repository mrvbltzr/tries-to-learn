// @ts-nocheck
/* eslint-disable */

/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Function Expression',
    snippets: [
        {
            label: 'Function Statements and Expressions',
            output: (console) => {
                function add(x, y) {
                    return x + y;
                }

                const sum = function (x, y) {
                    return x + y;
                };

                console.log(add(4, 5));
                console.log(sum(9, 3));
            },
            snippet: `
function add(x, y) {
    return x + y;
}

const sum = function(x, y) {
    return x + y;
};

console.log(add(4, 5)); // 9
console.log(sum(9, 3)); // 12`,
        },
        {
            label: 'Named Function Expressions',
            output: (console) => {
                const product = function multiply(x, y) {
                    return x * y;
                };

                console.log(product(3, 5));
                console.log(() => multiply(3, 5));
            },
            snippet: `
const product = function multiply(x, y) {
    return x * y;
};

console.log(product(3, 5)); // 15
console.log(multiply(3, 5)); // Result: ReferenceError: multiply is not defined`,
        },
        {
            label: 'Storing and running functions in code',
            output: (console) => {
                function add(x, y) {
                    return x + y;
                }
                const subtract = function (x, y) {
                    return x - y;
                };
                function multiply(x, y) {
                    return x * y;
                }
                function divide(x, y) {
                    return x / y;
                }

                const operations = [add, subtract, multiply, divide];

                console.log(operations[1](100, 4));

                for (let func of operations) {
                    let result = func(30, 5);
                    console.log(result);
                }

                const thing = {
                    doSomething: multiply,
                };

                console.log(thing.doSomething(50, 2));
            },
            snippet: `
function add(x, y) { return x + y; }
const subtract = function(x, y) { return x - y; };
function multiply(x, y) { return x * y; }
function divide(x, y) { return x / y; }

const operations = [add, subtract, multiply, divide];

console.log(operations[1](100, 4)); // 96

for (let func of operations) {
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doSomething: multiply
};

console.log(thing.doSomething(50, 2)); // 100`,
        },
    ],
};
