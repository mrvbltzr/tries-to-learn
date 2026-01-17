// @ts-nocheck
/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Array Reference Type',
    snippets: [
        {
            label: 'Arrays sharing a reference',
            output: (console) => {
                let nums = [5, 6, 7, 8];
                let otherNums = nums;

                nums.push(9);

                console.log(nums);
                console.log(otherNums);

                otherNums.pop();
                otherNums.pop();

                console.log(nums);
            },
            snippet: `
let nums = [5, 6, 7, 8];
let otherNums = nums;

nums.push(9);

console.log(nums);      // [5, 6, 7, 8, 9]
console.log(otherNums); // [5, 6, 7, 8, 9]

otherNums.pop();
otherNums.pop();

console.log(nums);      // [5, 6, 7]`,
        },
        {
            label: 'Mutating a const array',
            output: (console) => {
                const myEggs = ['brown', 'brown'];
                myEggs.push('white');
                myEggs[0] = 'green';

                console.log(myEggs);
            },
            snippet: `
const myEggs = ['brown', 'brown'];
myEggs.push('white');
myEggs[0] = 'green';

console.log(myEggs); // ["green", "brown", "white"]`,
        },
        {
            label: 'Animal Pairs Access and Update',
            output: (console) => {
                const animalPairs = [
                    ['doe', 'buck'],
                    ['ewe', 'ram'],
                    ['peahen', 'peacock'],
                ];

                console.log(animalPairs[2][0]);

                animalPairs[0][1] = 'stag';
                console.log(animalPairs);
            },
            snippet: `
const animalPairs = [
  ['doe', 'buck'],
  ['ewe', 'ram'],
  ['peahen', 'peacock']
];

console.log(animalPairs[2][0]); // "peahen"

animalPairs[0][1] = 'stag';
console.log(animalPairs); // [["doe", "stag"], ["ewe", "ram"], ["peahen", "peacock"]]`,
        },
        {
            label: 'Deeply Nested Array Access',
            output: (console) => {
                const animalPairs = [
                    ['doe', ['buck', 'stag']],
                    ['ewe', 'ram'],
                ];

                console.log(animalPairs[0][1][1]);

                animalPairs[0][1][1] = 'STAG';
                console.log(animalPairs);
            },
            snippet: `
const animalPairs = [
  ['doe', ['buck', 'stag']],
  ['ewe', 'ram']
];

console.log(animalPairs[0][1][1]); // "stag"

animalPairs[0][1][1] = 'STAG';
console.log(animalPairs);`,
        },
    ],
};
