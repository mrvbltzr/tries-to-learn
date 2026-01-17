/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'parseInt & parseFloat',
    snippets: [
        {
            label: 'Parsing integers with various inputs',
            output: (output) => {
                output.log(parseInt('10'));
                output.log(parseInt('10.5'));
                output.log(parseInt('10px'));
                output.log(parseInt('px10'));
                output.log(parseInt('11', 2));
            },
            snippet: `
console.log(parseInt('10'));
console.log(parseInt('10.5'));
console.log(parseInt('10px'));
console.log(parseInt('px10'));
console.log(parseInt('11', 2));`,
        },
        {
            label: 'Parsing floats with various inputs',
            output: (output) => {
                output.log(parseFloat('10'));
                output.log(parseFloat('10.5'));
                output.log(parseFloat('10.5px'));
                output.log(parseFloat('px10.5'));
                output.log(parseFloat('3.14e-2'));
            },
            snippet: `
console.log(parseFloat('10'));
console.log(parseFloat('10.5'));
console.log(parseFloat('10.5px'));
console.log(parseFloat('px10.5'));
console.log(parseFloat('3.14e-2'));`,
        },
    ],
};
