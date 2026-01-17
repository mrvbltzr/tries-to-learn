/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Ternary Operator',
    snippets: [
        {
            label: 'Rewriting a simple if/else statement',
            output: (console) => {
                let num = 7;

                if (num === 7) {
                    console.log('Lucky');
                } else {
                    console.log('bad');
                }

                num === 7 ? console.log('Lucky') : console.log('bad');
            },
            snippet: `
let num = 7;

// Long version:
if (num === 7) {
  console.log('Lucky');
} else {
  console.log('bad');
}

// Ternary version:
num === 7 ? console.log('Lucky') : console.log('bad');`,
        },
        {
            label: 'Assigning a value to a variable',
            output: (console) => {
                let status = 'offline';
                let color = status === 'offline' ? 'red' : 'green';
                console.log(color);
            },
            snippet: `
let status = 'offline';

// We want to assign a color based on the status
let color = status === 'offline' ? 'red' : 'green';

console.log(color); // Logs 'red'`,
        },
    ],
};
