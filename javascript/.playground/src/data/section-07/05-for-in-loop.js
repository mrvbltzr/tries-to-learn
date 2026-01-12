/**
 * @type {import('@/types').ExampleCollection}
 */
export default {
    name: 'The for...in Loop',
    snippets: [
        {
            label: 'Using for...in to loop and sum object values',
            run: (console) => {
                const jeopardyWinnings = {
                    regularPlay: 2522700,
                    watsonChallenge: 300000,
                    tournamentOfChampions: 500000,
                    ultimateTournamentOfChampions: 100000,
                };

                let total = 0;

                for (let prop in jeopardyWinnings) {
                    console.log(prop);
                    total += jeopardyWinnings[prop];
                }

                console.log(`Ken Jennings total earnings: $${total}`);
            },
            snippet: `
const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    ultimateTournamentOfChampions: 100000
};

let total = 0;

for (let prop in jeopardyWinnings) {
    console.log(prop);
    total += jeopardyWinnings[prop];
}

console.log(\`Ken Jennings total earnings: $\${total}\`); // $3422700`,
        },
        {
            label: 'Showing how for...in returns indices from an array',
            run: (console) => {
                const nums = [88, 99, 77, 66];

                for (let k in nums) {
                    console.log(k);
                }
            },
            snippet: `
const nums = [88, 99, 77, 66];

for (let k in nums) {
    // This prints the index (the key), not the number
    console.log(k);
}`,
        },
    ],
};
