/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Mutability',
    snippets: [
        {
            label: 'Modifying an existing element',
            output: (console) => {
                let shoppingList = ['cheddar cheese', '2% milk'];
                shoppingList[1] = 'whole milk';
                console.log(shoppingList);
            },
            snippet: `
let shoppingList = ['cheddar cheese', '2% milk'];

// Changing '2% milk' to 'whole milk' at index 1
shoppingList[1] = 'whole milk';

console.log(shoppingList); // ['cheddar cheese', 'whole milk']`,
        },
        {
            label: 'Adding elements to the end of an array (not practical)',
            output: (console) => {
                let shoppingList = ['cheddar cheese', 'whole milk'];
                shoppingList[2] = 'ice cream';
                shoppingList[shoppingList.length] = 'tomatoes';
                shoppingList[shoppingList.length] = 'potatoes';
                console.log(shoppingList);
            },
            snippet: `
let shoppingList = ['cheddar cheese', 'whole milk'];

// Adding an item at a specific index
shoppingList[2] = 'ice cream';

// Adding an item dynamically using the length property
shoppingList[shoppingList.length] = 'tomatoes';
shoppingList[shoppingList.length] = 'potatoes';

console.log(shoppingList); // ['cheddar cheese', 'whole milk', 'ice cream', 'tomatoes', 'potatoes']`,
        },
        {
            label: 'Overwriting the first element',
            output: (console) => {
                let shoppingList = ['cheddar cheese', 'whole milk', 'ice cream'];
                shoppingList[0] = 'bread';
                console.log(shoppingList);
            },
            snippet: `
let shoppingList = ['cheddar cheese', 'whole milk', 'ice cream'];

// This replaces the first item instead of shifting the list
shoppingList[0] = 'bread';

console.log(shoppingList); // ['bread', 'whole milk', 'ice cream']`,
        },
    ],
};
