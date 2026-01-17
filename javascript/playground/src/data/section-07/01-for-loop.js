/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'For Loop',
    snippets: [
        {
            label: 'Standard loop to print "Hello" and the counter 10 times',
            output: (console) => {
                for (let i = 1; i <= 10; i++) {
                    console.log(`Hello: ${i}`);
                }
            },
            snippet: `
for (let i = 1; i <= 10; i++) {
    console.log(\`Hello: \${i}\`);
}`,
        },
        {
            label: 'Generating the first 20 perfect squares',
            output: (console) => {
                for (let num = 1; num <= 20; num++) {
                    console.log(`${num} x ${num} = ${num * num}`);
                }
            },
            snippet: `
for (let num = 1; num <= 20; num++) {
    console.log(\`\${num} x \${num} = \${num * num}\`);
}`,
        },
        {
            label: 'Counting down from 200 in intervals of 25',
            output: (console) => {
                for (let i = 200; i >= 0; i -= 25) {
                    console.log(i);
                }
            },
            snippet: `
for (let i = 200; i >= 0; i -= 25) {
    console.log(i);
}`,
        },
        {
            label: 'Iterating over an array of scores',
            output: (console) => {
                const examScores = [98, 77, 84, 91, 85, 77];

                for (let i = 0; i < examScores.length; i++) {
                    console.log(`${i} - ${examScores[i]}`);
                }
            },
            snippet: `
const examScores = [98, 77, 84, 91, 85, 77];

for (let i = 0; i < examScores.length; i++) {
    console.log(\`\${i} - \${examScores[i]}\`);
}`,
        },
        {
            label: 'Printing names and grades from an array of objects',
            output: (console) => {
                const myStudents = [
                    { firstName: 'Zeus', grade: 86 },
                    { firstName: 'Artemis', grade: 97 },
                    { firstName: 'Hera', grade: 72 },
                    { firstName: 'Apollo', grade: 90 },
                ];

                for (let i = 0; i < myStudents.length; i++) {
                    let student = myStudents[i];
                    console.log(`${student.firstName} scored ${student.grade}`);
                }
            },
            snippet: `
const myStudents = [
    { firstName: 'Zeus', grade: 86 },
    { firstName: 'Artemis', grade: 97 },
    { firstName: 'Hera', grade: 72 },
    { firstName: 'Apollo', grade: 90 }
];

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    console.log(\`\${student.firstName} scored \${student.grade}\`);
}`,
        },
        {
            label: 'Reversing a word using a backwards loop',
            output: (console) => {
                const word = 'stressed';
                let reversedWord = '';

                for (let i = word.length - 1; i >= 0; i--) {
                    reversedWord += word[i];
                }

                console.log(reversedWord);
            },
            snippet: `
const word = 'stressed';
let reversedWord = '';

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

console.log(reversedWord); // "desserts"`,
        },
        {
            label: 'Averaging student grades',
            output: (console) => {
                const myStudents = [
                    { firstName: 'Zeus', grade: 86 },
                    { firstName: 'Artemis', grade: 97 },
                    { firstName: 'Hera', grade: 72 },
                    { firstName: 'Apollo', grade: 90 },
                ];
                let total = 0;

                for (let i = 0; i < myStudents.length; i++) {
                    let student = myStudents[i];
                    total += student.grade;
                }

                const average = total / myStudents.length;
                console.log(average);
            },
            snippet: `
const myStudents = [
    { firstName: 'Zeus', grade: 86 },
    { firstName: 'Artemis', grade: 97 },
    { firstName: 'Hera', grade: 72 },
    { firstName: 'Apollo', grade: 90 }
];
let total = 0;

for (let i = 0; i < myStudents.length; i++) {
    let student = myStudents[i];
    total += student.grade;
}

const average = total / myStudents.length;
console.log(average); // 86.25`,
        },
        {
            label: 'Basic Nested Loop Logic',
            output: (console) => {
                for (let i = 1; i <= 3; i++) {
                    console.log(`outer loop ${i}`);
                    for (let j = 10; j >= 0; j -= 2) {
                        console.log(`---- inner loop ${j}`);
                    }
                }
            },
            snippet: `
for (let i = 1; i <= 3; i++) {
    console.log(\`outer loop \${i}\`);
    for (let j = 10; j >= 0; j -= 2) {
        console.log(\`---- inner loop \${j}\`);
    }
}`,
        },
    ],
};
