/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Variables',
    snippets: [
        {
            label: 'Adding hens and roosters using let keyword',
            run: (console) => {
                let hens = 4;
                let roosters = 2;
                let totalChickens = hens + roosters;

                console.log(totalChickens);
            },
            snippet: `
let hens = 4;
let roosters = 2;
let totalChickens = hens + roosters;

console.log(totalChickens);`,
        },
        {
            label: 'Using let to declare and update a variable',
            run: (console) => {
                let age = 72;

                age + 1;
                console.log(age);

                age = age + 1;
                console.log(age);

                age = 18;
                console.log(age);
            },
            snippet: `
let age = 72;

// This doesn't change age
age + 1;
console.log(age);

// This updates age to 73
age = age + 1;
console.log(age);

// This completely changes the value to 18
age = 18;
console.log(age);`,
        },
        {
            label: 'Using the addition assignment operator',
            run: (console) => {
                let score = 0;

                score += 10;
                console.log(score);

                score += 1;
                console.log(score);

                score += 10;
                console.log(score);
            },
            snippet: `
let score = 0;

score += 10;
console.log(score);

score += 1;
console.log(score);

score += 10;
console.log(score);`,
        },
        {
            label: 'Subtract and assign a value to a variable',
            run: (console) => {
                let score = 0;
                score -= 100;
                console.log(score);
            },
            snippet: `
let score = 0;
score -= 100;
console.log(score);`,
        },
        {
            label: 'Multiply a variable by a number',
            run: (console) => {
                let score = 150;
                score *= 3;
                console.log(score);
            },
            snippet: `
let score = 150;
score *= 3;
console.log(score);`,
        },
        {
            label: 'Divide and assign a number',
            run: (console) => {
                let score = 150;
                score /= 3;
                console.log(score);
            },
            snippet: `
let score = 150;
score /= 3;
console.log(score);`,
        },
        {
            label: 'Incrementing and decrementing a variable using unary operators',
            run: (console) => {
                let counter = 0;
                counter++;
                console.log(counter);

                counter++;
                counter++;
                counter++;
                console.log(counter);

                counter--;
                console.log(counter);
            },
            snippet: `
let counter = 0;

counter++;
console.log(counter);

counter++;
counter++;
counter++;
console.log(counter);

counter--;
console.log(counter);`,
        },
        {
            label: 'Declaring constants',
            run: (console) => {
                const PY = 3.14159;
                console.log(PY);

                const daysInAWeek = 7;
                console.log(daysInAWeek);
            },
            snippet: `
const PY = 3.14159;
console.log(PY);

const daysInAWeek = 7;
console.log(daysInAWeek);`,
        },
        {
            label: 'Incrementing a var',
            run: (console) => {
                var eggs = 12;
                eggs += 1;
                console.log(eggs);
                eggs = 0;
                console.log(eggs);
            },
            snippet: `
var eggs = 12;

eggs += 1;
console.log(eggs);

eggs = 0;
console.log(eggs);`,
        },
    ],
};
