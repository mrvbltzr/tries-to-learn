/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Break Keyword',
    snippets: [
        {
            label: 'Breaking a for loop when i equals 5',
            output: (console) => {
                for (let i = 0; i < 10; i++) {
                    console.log(i);
                    if (i === 5) {
                        break;
                    }
                }
            },
            snippet: `
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break;
    }
}`,
        },
        {
            label: 'Using break to exit a while (true) guessing game',
            output: (console) => {
                const target = Math.floor(Math.random() * 10);
                let guess = Math.floor(Math.random() * 10);

                while (true) {
                    if (target === guess) {
                        break;
                    }
                    console.log(`Target: ${target} Guess: ${guess}`);
                    guess = Math.floor(Math.random() * 10);
                }

                console.log(`Target: ${target} Guess: ${guess} >> Congrats you win!`);
            },
            snippet: `
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (true) {
    if (target === guess) {
        break;
    }

    console.log(\`Target: \${target} Guess: \${guess}\`);
    guess = Math.floor(Math.random() * 10);
}
console.log(\`Target: \${target} Guess: \${guess} >> Congrats you win!\`);`,
        },
    ],
};
