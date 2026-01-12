/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Basic Arithmetic Operations',
    snippets: [
        {
            label: 'Performing basic arithmetic operations',
            run: (console) => {
                // Addition
                console.log(3 + 4);
                console.log(1.5 + 8);

                // Subtraction
                console.log(12 - 4.5);

                // Multiplication
                console.log(4 * 1.2);

                // Division
                console.log(4 / 2);
                console.log(10 / 3);
            },
            snippet: `
// Addition
console.log(3 + 4);
console.log(1.5 + 8);

// Subtraction
console.log(12 - 4.5);

// Multiplication
console.log(4 * 1.2);

// Division
console.log(4 / 2);
console.log(10 / 3);`,
        },
    ],
};
