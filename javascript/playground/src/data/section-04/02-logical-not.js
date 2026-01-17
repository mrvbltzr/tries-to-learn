// @ts-nocheck

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Logical NOT (!)',
    snippets: [
        {
            label: 'Using the logical NOT operator',
            output: (console) => {
                console.log(!true);
                console.log(!0);
                console.log(!'hello');
                console.log(!!0);
            },
            snippet: `
console.log(!true);
console.log(!0);
console.log(!"hello");
console.log(!!0);`,
        },
    ],
};
