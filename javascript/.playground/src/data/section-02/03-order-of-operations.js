/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Order of Operations',
    snippets: [
        {
            label: 'Order of operations',
            run: (console) => {
                console.log(3 - 9 * 2);
                console.log((3 - 9) * 2);
            },
            snippet: `
console.log(3 - 9 * 2);
console.log((3 - 9) * 2);`,
        },
    ],
};
