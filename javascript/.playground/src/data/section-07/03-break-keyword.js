/**
 * @type {import('@/types').ExampleCollection}
 */
export default {
    name: 'Break Keyword',
    snippets: [
        {
            label: 'Breaking a for loop when i equals 5',
            run: (console) => {
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
            run: (console) => {
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
