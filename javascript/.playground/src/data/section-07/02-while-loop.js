/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'While Loop',
    snippets: [
        {
            label: 'Printing numbers 0 through 5 with a while loop',
            run: (console) => {
                let j = 0;

                while (j <= 5) {
                    console.log(j);
                    j++;
                }
            },
            snippet: `
let j = 0;

while (j <= 5) {
    console.log(j);
    j++;
}`,
        },
        {
            label: 'Random Guessing Game (Note: This may result in either long or short output.)',
            run: (console) => {
                const target = Math.floor(Math.random() * 10);
                let guess = Math.floor(Math.random() * 10);

                while (guess !== target) {
                    console.log(`Target: ${target} Guess: ${guess}`);
                    guess = Math.floor(Math.random() * 10);
                }

                console.log(`Target: ${target} Guess: ${guess}`);
                console.log('Congrats, you win!');
            },
            snippet: `
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
    console.log(\`Target: \${target} Guess: \${guess}\`);
    // Updating the guess to eventually make the condition false
    guess = Math.floor(Math.random() * 10);
}

console.log(\`Target: \${target} Guess: \${guess}\`);
console.log("Congrats, you win!");`,
        },
    ],
};
