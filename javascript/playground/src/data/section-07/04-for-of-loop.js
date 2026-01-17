/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'The for...of Loop',
    snippets: [
        {
            label: 'Using for...of with an array',
            output: (console) => {
                const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

                for (let sub of subreddits) {
                    console.log(sub);
                }
            },
            snippet: `
const subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for (let sub of subreddits) {
    console.log(sub);
}`,
        },
        {
            label: 'Using for...of with a string',
            output: (console) => {
                const sound = 'cock-a-doodle-do';

                for (let char of sound) {
                    console.log(char.toUpperCase());
                }
            },
            snippet: `
const sound = "cock-a-doodle-do";

for (let char of sound) {
    console.log(char.toUpperCase());
}`,
        },
        {
            label: 'Summing Rows in a Nested Array',
            output: (console) => {
                const magicSquare = [
                    [2, 7, 6],
                    [9, 5, 1],
                    [4, 3, 8],
                ];

                for (let row of magicSquare) {
                    let sum = 0;
                    for (let num of row) {
                        sum += num;
                    }
                    console.log(`Row summed to ${sum}`);
                }
            },
            snippet: `
const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(\`Row summed to \${sum}\`);
}`,
        },
        {
            label: 'Combining Two Arrays Using Indices',
            output: (console) => {
                const words1 = ['mail', 'milk', 'bath', 'black'];
                const words2 = ['box', 'shake', 'tub', 'berry'];

                for (let i = 0; i < words1.length; i++) {
                    console.log(`${words1[i]}${words2[i]}`);
                }
            },
            snippet: `
const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for (let i = 0; i < words1.length; i++) {
    console.log(\`\${words1[i]}\${words2[i]}\`);
}`,
        },
        {
            label: 'Looping over keys and values to find an average rating',
            output: (console) => {
                const movieReviews = {
                    'Arrival': 9.5,
                    'Alien': 9,
                    'Amelie': 8,
                    'In Bruges': 9,
                };

                for (let movie of Object.keys(movieReviews)) {
                    console.log(`${movie} = ${movieReviews[movie]}`);
                }

                const ratings = Object.values(movieReviews);
                let total = 0;
                for (let r of ratings) {
                    total += r;
                }

                let average = total / ratings.length;
                console.log(average);
            },
            snippet: `
const movieReviews = {
    Arrival: 9.5,
    Alien: 9,
    Amelie: 8,
    'In Bruges': 9
};

for (let movie of Object.keys(movieReviews)) {
    console.log(\`\${movie} = \${movieReviews[movie]}\`);
}

const ratings = Object.values(movieReviews);
let total = 0;

for (let r of ratings) {
    total += r;
}

let average = total / ratings.length;
console.log(average); // 8.875`,
        },
    ],
};
