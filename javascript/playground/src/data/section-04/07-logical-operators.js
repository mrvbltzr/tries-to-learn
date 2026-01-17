// @ts-nocheck
/** @type {import('@/types').SnippetCollection} */
export default {
    name: 'Logical Operators',
    snippets: [
        {
            label: '[Logical "AND" Operator (&&)] Validating password length and spaces',
            output: (console) => {
                const password = 'chicken gal';

                if (password.length >= 8 && password.indexOf(' ') === -1) {
                    console.log('Valid password');
                } else {
                    console.log('Invalid password');
                }
            },
            snippet: `
const password = 'chicken gal';

if (password.length >= 8 && password.indexOf(' ') === -1) {
    console.log("Valid password");
} else {
    console.log("Invalid password");
}
`,
        },
        {
            label: '[Logical "AND" Operator (&&)] Checking if a number is between 1 and 10',
            output: (console) => {
                let num = 3;

                if (num >= 1 && num <= 10) {
                    console.log('Number is between 1 and 10');
                } else {
                    console.log('Number is out of range');
                }
            },
            snippet: `
let num = 3;

if (num >= 1 && num <= 10) {
    console.log("Number is between 1 and 10");
} else {
    console.log("Number is out of range");
}
        `,
        },
        {
            label: '[Logical "OR" Operator (||)] Theater Ticket Pricing',
            output: (console) => {
                let age = 78;

                if (age < 6 || age >= 65) {
                    console.log('You get in for free');
                } else {
                    console.log('You must pay');
                }
            },
            snippet: `
let age = 78;

if (age < 6 || age >= 65) {
    console.log("You get in for free");
} else {
    console.log("You must pay");
}
        `,
        },
        {
            label: '[Logical "OR" Operator (||)] Chaining Multiple OR Conditions',
            output: (console) => {
                let color = 'violet';

                if (color === 'purple' || color === 'lilac' || color === 'violet') {
                    console.log('Great choice');
                }
            },
            snippet: `
let color = "violet";

if (color === "purple" || color === "lilac" || color === "violet") {
    console.log("Great choice");
}`,
        },
        {
            label: '[Logical NOT Operator (!)] Simple Negation',
            output: (console) => {
                console.log(!null); // true
                console.log(!0); // true
                console.log(!''); // true
                console.log(!45); // false
                console.log(!'hello'); // false
                console.log(!(0 === 0)); // false
            },
            snippet: `
console.log(!null);      // true
console.log(!0);         // true
console.log(!"");        // true
console.log(!45);        // false
console.log(!"hello");   // false
console.log(!(0 === 0)); // false`,
        },
        {
            label: '[Logical NOT Operator (!)] Checking for the absence of a user',
            output: (console) => {
                let loggedInUser;

                if (!loggedInUser) {
                    console.log('Get out of here!');
                }
            },
            snippet: `
let loggedInUser; // currently undefined (falsy)

if (!loggedInUser) {
    console.log("Get out of here!");
}`,
        },
        {
            label: '[Logical NOT Operator (!)] Validating flavor options',
            output: (console) => {
                const flavor = 'watermelon';

                if (flavor !== 'grape' && flavor !== 'cherry') {
                    console.log("We don't have that flavor.");
                }

                if (!(flavor === 'grape' || flavor === 'cherry')) {
                    console.log('We only have grape and cherry.');
                }
            },
            snippet: `
const flavor = 'watermelon';

// Checking if the flavor is NOT grape AND NOT cherry
if (flavor !== 'grape' && flavor !== 'cherry') {
    console.log("We don't have that flavor.");
}

// Alternative way: Negating an OR expression
if (!(flavor === 'grape' || flavor === 'cherry')) {
    console.log("We only have grape and cherry.");
}`,
        },
        {
            label: 'Precedence of && over ||',
            output: (console) => {
                let x = 7;
                console.log(x || (x === 3 && x > 10));
            },
            snippet: `
let x = 7;

// Even though we might read this left-to-right, the AND (&&) runs first
// x === 3 (false) && x > 10 (false) evaluates to false
// Then we are left with: x (7, which is truthy) || false
// The final result is 7
console.log(x || (x === 3 && x > 10));`,
        },
        {
            label: 'Using parentheses to change evaluation order',
            output: (console) => {
                let x = 7;

                // By wrapping the OR expression, we force it to run first
                // (x || x === 3) evaluates to true
                // Then we check: true && x > 10 (false)
                // The final result becomes false
                console.log((x || x === 3) && x > 10);
            },
            snippet: `
let x = 7;

// By wrapping the OR expression, we force it to run first
// (x || x === 3) evaluates to true
// Then we check: true && x > 10 (false)
// The final result becomes false
console.log((x || x === 3) && x > 10);`,
        },
    ],
};
