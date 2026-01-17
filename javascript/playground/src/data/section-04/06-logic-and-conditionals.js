// @ts-nocheck
/* eslint-disable */

/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Logic and Conditionals',
    snippets: [
        {
            label: '[IF] Simple Equality Check',
            output: (console) => {
                if (1 === 1) {
                    console.log("It's true");
                }
            },
            snippet: `
if (1 === 1) {
    console.log("It's true");
}
`,
        },
        {
            label: '[IF] Performance Review Logic',
            output: (console) => {
                let rating = 3;

                if (rating === 3) {
                    console.log('YOU ARE A SUPERSTAR');
                }
            },
            snippet: `
let rating = 3;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR");
}
`,
        },
        {
            label: '[IF] Checking for Odd Numbers',
            output: (console) => {
                let num = 37;

                if (num % 2 !== 0) {
                    console.log('Odd number');
                }
            },
            snippet: `
let num = 37;

if (num % 2 !== 0) {
    console.log("Odd number");
}
`,
        },
        {
            label: '[IF-ELSE-IF] Difference between separate if statements vs else if',
            output: (console) => {
                let rating = 3;

                if (rating === 3) {
                    console.log('SUPERSTAR');
                }

                if (rating >= 2) {
                    console.log('MEETS EXPECTATIONS');
                }

                if (rating === 3) {
                    console.log('SUPERSTAR');
                } else if (rating === 2) {
                    console.log('MEETS EXPECTATIONS');
                }
            },
            snippet: `
let rating = 3;

// With two separate ifs, BOTH could run if conditions overlap
if (rating === 3) {
    console.log("SUPERSTAR");
}
if (rating >= 2) {
    console.log("MEETS EXPECTATIONS");
}
// Result: Both "SUPERSTAR" and "MEETS EXPECTATIONS" print.

// With else if, only the FIRST true condition runs
if (rating === 3) {
    console.log("SUPERSTAR");
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
}
// Result: Only "SUPERSTAR" prints.
        `,
        },
        {
            label: '[IF-ELSE-IF] Using multiple else if statements for a performance review',
            output: (console) => {
                let rating = 1;

                if (rating === 3) {
                    console.log('YOU ARE A SUPERSTAR!');
                } else if (rating === 2) {
                    console.log('MEETS EXPECTATIONS');
                } else if (rating === 1) {
                    console.log('NEEDS IMPROVEMENT');
                }
            },
            snippet: `
let rating = 1;

if (rating === 3) {
    console.log("YOU ARE A SUPERSTAR!");
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
    console.log("NEEDS IMPROVEMENT");
}
        `,
        },
        {
            label: '[ELSE] Using else as a fallback for invalid ratings',
            output: (console) => {
                let rating = 5;

                if (rating === 3) {
                    console.log('YOU ARE A PRO!');
                } else if (rating === 2) {
                    console.log('MEH');
                } else if (rating === 1) {
                    console.log('TERRIBLE');
                } else {
                    console.log('invalid rating');
                }
            },
            snippet: `
let rating = 5;

if (rating === 3) {
    console.log('YOU ARE A PRO!');
} else if (rating === 2) {
    console.log('MEH');
} else if (rating === 1) {
    console.log('TERRIBLE');
} else {
    console.log('invalid rating');
}
        `,
        },
        {
            label: '[ELSE] Simple if/else for high score tracking',
            output: (console) => {
                let highScore = 1430;
                let userScore = 1200;

                if (userScore >= highScore) {
                    console.log(`Congrats, you have the new high score of ${userScore}`);
                    highScore = userScore;
                } else {
                    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
                }
            },
            snippet: `
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(\`Congrats, you have the new high score of \${userScore}\`);
    highScore = userScore;
} else {
    console.log(\`Good game. Your score of \${userScore} did not beat the high score of \${highScore}\`);
}`,
        },
        {
            label: '[IF-ELSE] Simple if/else for high score tracking',
            output: (console) => {
                let highScore = 1430;
                let userScore = 1200;

                if (userScore >= highScore) {
                    console.log(`Congrats, you have the new high score of ${userScore}`);
                    highScore = userScore;
                } else {
                    console.log(`Good game. Your score of ${userScore} did not beat the high score of ${highScore}`);
                }
            },
            snippet: `
let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
    console.log(\`Congrats, you have the new high score of \${userScore}\`);
    highScore = userScore;
} else {
    console.log(\`Good game. Your score of \${userScore} did not beat the high score of \${highScore}\`);
}
        `,
        },
        {
            label: 'Checking the truthiness of a number',
            output: (console) => {
                let mystery = 5;

                if (mystery) {
                    console.log('truthy');
                } else {
                    console.log('falsy');
                }
            },
            snippet: `
let mystery = 5;

if (mystery) {
    console.log('truthy');
} else {
    console.log('falsy');
}`,
        },
    ],
};
