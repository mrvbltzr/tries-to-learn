/**
 * @type {import('@/types').ExampleCollection}
 */
export default {
    name: 'Arguments and Parameters',
    snippets: [
        {
            label: 'Greeting a person',
            run: (console) => {
                function greet(nickname) {
                    console.log(`Hi, ${nickname}!`);
                }

                greet('Tim');
                greet(25);
                greet();
            },
            snippet: `
function greet(nickname) {
    console.log(\`Hi, \${nickname}!\`);
}

greet('Tim');
/* Result: Hi, Tim! */

greet(25);
/* Result: Hi, 25! */

greet();
/* Result: Hi, undefined! */
`,
        },
        {
            label: 'Rolling dice a specific number of times',
            run: (console) => {
                function rollDie() {
                    return Math.floor(Math.random() * 6) + 1;
                }

                function throwDice(numRolls) {
                    for (let i = 0; i < numRolls; i++) {
                        console.log(rollDie());
                    }
                }

                throwDice(3);
            },
            snippet: `
function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        console.log(rollDie());
    }
}

throwDice(3);`,
        },
        {
            label: '[Multiple Parameters] Adding and dividing numbers',
            run: (console) => {
                function sum(x, y) {
                    console.log(x + y);
                }

                sum(4, 5);

                function divide(a, b) {
                    console.log(a / b);
                }

                divide(1, 4);
                divide(4, 1);
            },
            snippet: `
function sum(x, y) {
  console.log(x + y);
}

sum(4, 5);
/* Result: 9 */

function divide(a, b) {
    console.log(a / b);
}

// Order matters: 1 is a, 4 is b
divide(1, 4);
/* Result: 0.25 */

// Now 4 is a, 1 is b
divide(4, 1);
/* Result: 4 */`,
        },
        {
            label: 'Passing strings or missing values',
            run: (console) => {
                function divide(a, b) {
                    console.log(a / b);
                }

                divide('hi', 4);
                divide(5);
            },
            snippet: `
function divide(a, b) {
    console.log(a / b);
}

// Passing a string instead of a number
divide('hi', 4);
/* Result: NaN */

// Missing the second argument (b becomes undefined)
divide(5);
/* Result: NaN */`,
        },
    ],
};
