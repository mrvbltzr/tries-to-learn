/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Creating Arrays',
    snippets: [
        {
            label: 'Initializing an array with data',
            run: (console) => {
                let shoppingList = ['cereal', 'cheese', 'ice'];
                console.log(shoppingList);
            },
            snippet: `let shoppingList = ['cereal', 'cheese', 'ice'];`,
        },
        {
            label: 'Array with mixed data types',
            run: (console) => {
                let collection = ['dog', 12, true, null, NaN];
                console.log(collection);
            },
            snippet: `let collection = ['dog', 12, true, null, NaN];`,
        },
        {
            label: 'Creating an array using the Array constructor',
            run: (console) => {
                let numbersArray = new Array(1, 2, 3, 4, 5);
                console.log(numbersArray);
            },
            snippet: `let numbersArray = new Array(1, 2, 3, 4, 5);`,
        },
    ],
};
