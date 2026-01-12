/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Array Methods',
    snippets: [
        {
            label: '[Push] Pushing elements to an array',
            run: (console) => {
                const topSongs = ['First Song', 'Second Song', 'Third Song', 'Fourth Song'];
                topSongs.push('Fortunate Son');
                console.log(topSongs);
            },
            snippet: `
const topSongs = [
  'First Song',
  'Second Song',
  'Third Song',
  'Fourth Song'
];

topSongs.push('Fortunate Son');
// The array now has 5 items. Returns: 5`,
        },
        {
            label: '[Pop] Removing the last element',
            run: (console) => {
                const topSongs = ['First Song', 'Second Song', 'Third Song', 'Fourth Song', 'Fortunate Son'];
                const nextSong = topSongs.pop();

                console.log(nextSong);
                console.log(topSongs);
            },
            snippet: `
const topSongs = ['First Song', 'Second Song', 'Third Song', 'Fourth Song', 'Fortunate Son'];
const nextSong = topSongs.pop();

console.log(nextSong); // nextSong is now 'Fortunate Son'
console.log(topSongs); // topSongs no longer contains 'Fortunate Son'`,
        },
        {
            label: '[Unshift] Adding dishes to the start of an array',
            run: (console) => {
                const dishesToDo = ['big platter'];

                dishesToDo.unshift('large plate');
                dishesToDo.unshift('small plate');

                console.log(dishesToDo);
            },
            snippet: `
const dishesToDo = ['big platter'];

// Adding one item
dishesToDo.unshift('large plate');

// Adding another item
dishesToDo.unshift('small plate');

// dishesToDo is now ['small plate', 'large plate', 'big platter']
console.log(dishesToDo);`,
        },
        {
            label: '[Unshift] Adding multiple at once preserves the chunk order',
            run: (console) => {
                let items = ['middle'];
                items.unshift('fork', 'knife');
                console.log(items);
            },
            snippet: `
let items = ['middle'];

items.unshift('fork', 'knife');
console.log(items);`,
        },
        {
            label: '[Shift] Removing the top dish from the stack',
            run: (console) => {
                const dishesToDo = ['dirty spoon', 'mug', 'cereal bowl'];
                const nextDish = dishesToDo.shift();

                console.log(nextDish); // 'dirty spoon'
                console.log(dishesToDo); // ['mug', 'cereal bowl']
            },
            snippet: `
const dishesToDo = ['dirty spoon', 'mug', 'cereal bowl'];
const nextDish = dishesToDo.shift();

console.log(nextDish); // 'dirty spoon'
console.log(dishesToDo); // ['mug', 'cereal bowl']`,
        },
        {
            label: '[Concat] Merging two arrays',
            run: (console) => {
                const fruits = ['apple', 'banana'];
                const veggies = ['asparagus', 'brussel sprouts'];

                const mix1 = fruits.concat(veggies);
                const mix2 = veggies.concat(fruits);

                console.log(mix1);
                console.log(mix2);
            },
            snippet: `
const fruits = ['apple', 'banana'];
const veggies = ['asparagus', 'brussel sprouts'];

// The order of the arrays in the result changes based on which one is called first
const mix1 = fruits.concat(veggies); // Result: ['apple', 'banana', 'asparagus', 'brussel sprouts']
const mix2 = veggies.concat(fruits); // Result: ['asparagus', 'brussel sprouts', 'apple', 'banana']`,
        },
        {
            label: '[Concat] Merging multiple arrays',
            run: (console) => {
                const fruits = ['apple', 'banana'];
                const veggies = ['asparagus', 'brussel sprouts'];
                const meats = ['steak', 'chicken breast'];

                const allFoods = fruits.concat(veggies, meats);
                console.log(allFoods);
            },
            snippet: `
const fruits = ['apple', 'banana'];
const veggies = ['asparagus', 'brussel sprouts'];
const meats = ['steak', 'chicken breast'];

// We can pass multiple arrays as arguments to merge them all at once
const allFoods = fruits.concat(veggies, meats);

console.log(allFoods);
// Output: ['apple', 'banana', 'asparagus', 'brussel sprouts', 'steak', 'chicken breast']`,
        },
        {
            label: '[Includes] Basic usage of includes',
            run: (console) => {
                const ingredients = [
                    'water',
                    'corn starch',
                    'flour',
                    'cheese',
                    'brown sugar',
                    'shrimp',
                    'eel',
                    'butter',
                ];

                console.log(ingredients.includes('fish'));
                console.log(ingredients.includes('shrimp'));
            },
            snippet: `/* Example: Basic usage of includes */
const ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp', // << Target item
    'eel',
    'butter',
];

console.log(ingredients.includes('fish'));
console.log(ingredients.includes('shrimp'));`,
        },
        {
            label: '[Includes] Using the fromIndex parameter',
            run: (console) => {
                const ingredients = [
                    'water',
                    'corn starch',
                    'flour',
                    'cheese',
                    'brown sugar',
                    'shrimp',
                    'eel',
                    'butter',
                ];

                console.log(ingredients.includes('water', 3));
            },
            snippet: `
 const ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];

// Searching for 'water' starting from index 3
console.log(ingredients.includes('water', 3)); // false`,
        },
        {
            label: '[Includes] Using includes in a conditional',
            run: (console) => {
                const ingredients = [
                    'water',
                    'corn starch',
                    'flour',
                    'cheese',
                    'brown sugar',
                    'shrimp',
                    'eel',
                    'butter',
                ];

                if (ingredients.includes('flour')) {
                    console.log("I'm gluten free. I cannot eat that.");
                }
            },
            snippet: `
const ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];

if (ingredients.includes('flour')) {
    console.log("I'm gluten free. I cannot eat that.");
}`,
        },
        {
            label: '[IndexOf] Finding the index of an element',
            run: (console) => {
                const ingredients = [
                    'water',
                    'corn starch',
                    'flour',
                    'cheese',
                    'brown sugar',
                    'shrimp',
                    'eel',
                    'butter',
                ];

                console.log(ingredients.indexOf('eel'));
                console.log(ingredients.indexOf('maple syrup'));
            },
            snippet: `
const ingredients = ['water', 'corn starch', 'flour', 'cheese', 'brown sugar', 'shrimp', 'eel', 'butter'];

ingredients.indexOf('eel'); // 6
ingredients.indexOf('maple syrup'); // -1`,
        },
        {
            label: '[IndexOf] Searching with fromIndex',
            run: (console) => {
                const ingredients = [
                    'water',
                    'corn starch',
                    'flour',
                    'cheese',
                    'brown sugar',
                    'shrimp',
                    'eel',
                    'butter',
                ];

                console.log(ingredients.indexOf('cheese', 2)); // 3
            },
            snippet: `
const ingredients = [
    'water',
    'corn starch',
    'flour',
    'cheese',
    'brown sugar',
    'shrimp',
    'eel',
    'butter',
];

ingredients.indexOf('cheese', 2); // 3`,
        },
        {
            label: '[Reverse] Reversing an array of strings',
            run: (console) => {
                const letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
                letters.reverse();

                console.log(letters);
            },
            snippet: `
const letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse();

console.log(letters); // ["R", "E", "S", "P", "E", "C", "T"]`,
        },
        {
            label: '[Join] Using join with different separators',
            run: (console) => {
                const letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
                console.log(letters.join());
                console.log(letters.join(' & '));
            },
            snippet: `
const letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];

console.log(letters.join());
console.log(letters.join(' & '));`,
        },
        {
            label: '[Join] Joining non-string values',
            run: (console) => {
                const mixed = [12.3, 60, false];
                console.log(mixed.join(' # -> '));
            },
            snippet: `
const mixed = [12.3, 60, false];
console.log(mixed.join(' # -> '));`,
        },
        {
            label: '[Join] Chaining reverse and join',
            run: (console) => {
                const word = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
                const result = word.reverse().join('-');
                console.log(result);
            },
            snippet: `
const word = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
const result = word.reverse().join('-');
console.log(result);`,
        },
        {
            label: '[Slice] Slicing to the end and using negative indices',
            run: (console) => {
                const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
                const reptiles = animals.slice(4);
                console.log(reptiles);
            },
            snippet: `
const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
const reptiles = animals.slice(4);

console.log(reptiles); // ['lizard', 'tortoise']`,
        },
        {
            label: '[Slice] Selecting specific ranges',
            run: (console) => {
                const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

                const swimmers = animals.slice(0, 3);
                console.log(swimmers);

                const mammals = animals.slice(2, 4);
                console.log(mammals);

                const quadrupeds = animals.slice(-3);
                console.log(quadrupeds);

                const middle = animals.slice(-3, -1);
                console.log(middle);
            },
            snippet: `
const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

const swimmers = animals.slice(0, 3);
console.log(swimmers); // ['shark', 'salmon', 'whale']

const mammals = animals.slice(2, 4);
console.log(mammals); // ['whale', 'bear']

const quadrupeds = animals.slice(-3);
console.log(quadrupeds); // ['bear', 'lizard', 'tortoise']

const middle = animals.slice(-3, -1);
console.log(middle); // ['bear', 'lizard']`,
        },
        {
            label: '[Slice] Making a copy of an array',
            run: (console) => {
                const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
                const copy = animals.slice();
                console.log(copy);
            },
            snippet: `
const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
const copy = animals.slice();

console.log(copy); // ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']`,
        },

        {
            label: '[Splice] Deleting elements',
            run: (console) => {
                const animals = ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
                const deleted = animals.splice(3, 2);

                console.log(deleted);
                console.log(animals);
            },
            snippet: `
const animals = ['shark', 'octopus', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
const deleted = animals.splice(3, 2);

console.log(deleted); // ["whale", "bear"]
console.log(animals); // ["shark", "octopus", "salmon", "lizard", "tortoise"]`,
        },
        {
            label: '[Splice] Inserting an element without deleting',
            run: (console) => {
                const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
                animals.splice(1, 0, 'octopus');

                console.log(animals);
            },
            snippet: `
const animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];
animals.splice(1, 0, 'octopus');

console.log(animals);
// ["shark", "octopus", "salmon", "whale", "bear", "lizard", "tortoise"]`,
        },
        {
            label: 'Inserting multiple values',
            run: (console) => {
                const animals = ['shark', 'octopus', 'salmon', 'lizard', 'tortoise'];
                animals.splice(3, 0, 'snake', 'frog');

                console.log(animals);
            },
            snippet: `
const animals = ['shark', 'octopus', 'salmon', 'lizard', 'tortoise'];
animals.splice(3, 0, 'snake', 'frog');

console.log(animals);
// ["shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise"]`,
        },
        {
            label: '[Splice] Inserting multiple values',
            run: (console) => {
                const animals = ['shark', 'octopus', 'salmon', 'lizard', 'tortoise'];
                animals.splice(3, 0, 'snake', 'frog');

                console.log(animals);
            },
            snippet: `
const animals = ['shark', 'octopus', 'salmon', 'lizard', 'tortoise'];
animals.splice(3, 0, 'snake', 'frog');

console.log(animals);
// ["shark", "octopus", "salmon", "snake", "frog", "lizard", "tortoise"]`,
        },
        {
            label: '[Splice] Replacing elements',
            run: (console) => {
                const animals = ['shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise'];
                animals.splice(0, 2, 'SHARK', 'OCTOPUS');

                console.log(animals);
            },
            snippet: `
const animals = ['shark', 'octopus', 'salmon', 'snake', 'frog', 'lizard', 'tortoise'];
animals.splice(0, 2, 'SHARK', 'OCTOPUS');

console.log(animals);
// ["SHARK", "OCTOPUS", "salmon", "snake", "frog", "lizard", "tortoise"]`,
        },
        {
            label: '[Sort] Sorting Strings Alphabetically',
            run: (console) => {
                const people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Roxanne', 'Maggie Mae'];
                people.sort();

                console.log(people);
            },
            snippet: `
const people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Roxanne', 'Maggie Mae'];
people.sort();

console.log(people); // ["Angie", "Jolene", "Maggie Mae", "Mrs. Robinson", "Roxanne"]`,
        },
        {
            label: '[Sort] Unexpected Numeric Sorting',
            run: (console) => {
                const nums = [34, 10, 100000, 67, 99];
                nums.sort();

                console.log(nums);
            },
            snippet: `
const nums = [34, 10, 100000, 67, 99];
nums.sort();

console.log(nums); // [10, 100000, 34, 67, 99]`,
        },
    ],
};
