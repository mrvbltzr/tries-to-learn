/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Accessing Data',
    snippets: [
        {
            label: 'Accessing items and checking length',
            output: (console) => {
                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

                console.log(colors.length); // 7
                console.log(colors[0]); // "red"
                console.log(colors[3]); // "green"
            },
            snippet: `
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

console.log(colors.length); // 7
console.log(colors[0]); // "red"
console.log(colors[3]); // "green"`,
        },
        {
            label: 'Accessing the last item and out-of-bounds indices',
            output: (console) => {
                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
                console.log(colors[colors.length - 1]);
                console.log(colors[7]);
            },
            snippet: `
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// The last index is length (7) minus 1
console.log(colors[colors.length - 1]); // "violet"

// Accessing an index that doesn't exist
console.log(colors[7]); // undefined`,
        },
    ],
};
