// @ts-nocheck
/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Accessing Data',
    snippets: [
        {
            label: 'Accessing object properties using dot syntax',
            output: (console) => {
                const fitbitData = {
                    totalMiles: 211.7,
                    avgCalorieBurn: 5755,
                };

                console.log(fitbitData.totalMiles);
                console.log(fitbitData.avgCalorieBurn);
            },
            snippet: `
const fitbitData = {
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
};

// Accessing the totalMiles property
console.log(fitbitData.totalMiles); // Returns 211.7

// Accessing the avgCalorieBurn property
console.log(fitbitData.avgCalorieBurn); // Returns 5755`,
        },
        {
            label: 'Accessing object properties using square brackets',
            output: (console) => {
                const numbers = {
                    100: 'one hundred',
                    16: 'sixteen',
                };

                console.log(numbers[100]); // 'one hundred'
                console.log(numbers['100']); // 'one hundred'
            },
            snippet: `
const numbers = {
    100: 'one hundred',
    16: 'sixteen'
};

// console.log(numbers.100); // Error: Unexpected number
console.log(numbers[100]); // 'one hundred'
console.log(numbers['100']); // 'one hundred'`,
        },
        {
            label: 'Keys with Spaces and Numbers',
            output: (console) => {
                const occupations = {
                    '76 trombones': 'great song',
                    'favorite food': 'pizza',
                };

                // console.log(occupations.76 trombones); // Syntax Error
                console.log(occupations['76 trombones']); // 'great song'
            },
            snippet: `
const occupations = {
    '76 trombones': 'great song',
    'favorite food': 'pizza'
};

// console.log(occupations.76 trombones); // Syntax Error
console.log(occupations['76 trombones']); // 'great song'`,
        },
        {
            label: '[Dynamic Data Access] Using Variables and Expressions',
            output: (console) => {
                const palette = {
                    red: '#eb4d4b',
                    yellow: '#f9ca24',
                    blue: '#30336b',
                };

                const mysteryColor = 'yellow';

                console.log(palette.mysteryColor);
                console.log(palette[mysteryColor]);
                console.log(palette['bl' + 'ue']);
            },
            snippet: `
const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};

const mysteryColor = 'yellow';

// This looks for a property literally named 'mysteryColor'
console.log(palette.mysteryColor); // undefined

// This evaluates 'mysteryColor' to 'yellow' and finds the value
console.log(palette[mysteryColor]); // '#f9ca24'

// We can even use expressions inside brackets
console.log(palette['bl' + 'ue']); // '#30336b'`,
        },
        {
            label: 'Accessing and Calculating Nested Values',
            output: (console) => {
                const student = {
                    firstName: 'David',
                    lastName: 'Jones',
                    strengths: ['Music', 'Art'],
                    exams: {
                        midterm: 92,
                        final: 88,
                    },
                };

                const average = (student.exams.midterm + student.exams.final) / 2;
                const favoriteArt = student.strengths[1];

                console.log(average);
                console.log(favoriteArt);
            },
            snippet: `
const student = {
    firstName: 'David',
    lastName: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
};

// Calculating an average from nested object properties
const average = (student.exams.midterm + student.exams.final) / 2;

// Accessing an element from a nested array
const favoriteArt = student.strengths[1];

console.log(average); // 90
console.log(favoriteArt); // "Art"`,
        },
    ],
};
