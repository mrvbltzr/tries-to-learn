/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Create and Execute Function',
    snippets: [
        {
            label: 'Defining and calling the function',
            output: (console) => {
                function grumpies() {
                    console.log('UG... you again?');
                    console.log('For the last time...');
                    console.log('Leave me alone!');
                }

                grumpies();
            },
            snippet: `
// Step 1: Define the function
function grumpies() {
    console.log('UG... you again?');
    console.log('For the last time...');
    console.log('Leave me alone!');
}

// Step 2: Execute the function
grumpies();
`,
        },
        {
            label: 'Defining and calling the function inside of a loop',
            output: (console) => {
                function hello() {
                    console.log('Hello World!');
                }

                for (let i = 0; i < 5; i++) {
                    hello();
                }
            },
            snippet: `
function hello() {
    console.log('Hello World!');
}

for (let i = 0; i < 5; i++) {
    hello();
}
`,
        },
        {
            label: 'Logic for a single random die roll',
            output: (console) => {
                function rollDie() {
                    let roll = Math.floor(Math.random() * 6) + 1;
                    console.log(`rolled ${roll}`);
                }

                rollDie();
            },
            snippet: `
function rollDie() {
    // Generate a number from 1 to 6
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(\`rolled \${roll}\`);
}

rollDie();`,
        },
        {
            label: 'Calling a function within another function',
            output: (console) => {
                function rollDie() {
                    let roll = Math.floor(Math.random() * 6) + 1;
                    console.log(`rolled ${roll}`);
                }

                function throwDice() {
                    rollDie();
                    rollDie();
                    rollDie();
                    rollDie();
                    rollDie();
                    rollDie();
                }

                throwDice();
            },
            snippet: `
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(\`rolled \${roll}\`);
}

function throwDice() {
    // We call the rollDie function multiple times
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

throwDice();`,
        },
    ],
};
