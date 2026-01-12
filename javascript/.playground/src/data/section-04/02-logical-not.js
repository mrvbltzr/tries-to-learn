// @ts-nocheck
/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Logical NOT (!)',
    snippets: [
        {
            label: 'Using the logical NOT operator',
            run: (output) => {
                output.log(!true);
                output.log(!0);
                output.log(!'hello');
                output.log(!!0);
            },
            snippet: `
console.log(!true);
console.log(!0);
console.log(!"hello");
console.log(!!0);`,
        },
    ],
};
