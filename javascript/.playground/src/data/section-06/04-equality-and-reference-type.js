// @ts-nocheck
/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Equality and Reference Type',
    snippets: [
        {
            label: 'Comparing Identical Arrays',
            run: (console) => {
                let nums = [1, 2, 3];
                let mystery = [1, 2, 3];

                console.log(nums === mystery);
            },
            snippet: `
let nums = [1, 2, 3];
let mystery = [1, 2, 3];

// Returns false because they have different references in memory
console.log(nums === mystery);`,
        },
        {
            label: 'Comparing References',
            run: (console) => {
                let nums = [1, 2, 3];
                let moreNums = nums;

                console.log(nums === moreNums);

                moreNums.push(4);
                console.log(nums);
            },
            snippet: `
let nums = [1, 2, 3];
let moreNums = nums;

// Returns true because they point to the same memory address
console.log(nums === moreNums);

moreNums.push(4);
console.log(nums); // [1, 2, 3, 4]`,
        },
        {
            label: 'Checking for Empty Arrays',
            run: (console) => {
                const user = {
                    notifications: [],
                };

                if (user.notifications === []) {
                    console.log('This block will never run.');
                }

                if (user.notifications.length === 0) {
                    console.log('No new notifications.');
                }

                if (!user.notifications.length) {
                    console.log('No new notifications.');
                }
            },
            snippet: `
const user = {
    notifications: []
};

// This WILL NOT work
if (user.notifications === []) {
    console.log("This block will never run.");
}

// This IS the correct way
if (user.notifications.length === 0) {
    console.log("No new notifications.");
}

// Or using a "truthy/falsy" shorthand
if (!user.notifications.length) {
    console.log("No new notifications.");
}`,
        },
        {
            label: 'Object Equality',
            run: (console) => {
                console.log({ a: 1 } === { a: 1 });
                console.log({} === {});
            },
            snippet: `
// Returns false
console.log({ a: 1 } === { a: 1 });

// Returns false
console.log({} === {});`,
        },
        {
            label: 'Shared Object Reference',
            run: (console) => {
                let data1 = { a: 1 };
                let data2 = data1;

                console.log(data1 === data2);
            },
            snippet: `
let data1 = { a: 1 };
let data2 = data1;

// Returns true because they share the same reference
console.log(data1 === data2);`,
        },
    ],
};
