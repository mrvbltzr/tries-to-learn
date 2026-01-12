/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Manipulating Object',
    snippets: [
        {
            label: 'Adding and Updating Properties',
            run: (console) => {
                const userReviews = {};

                // Adding properties
                userReviews['Queen b 49'] = 4.0;
                userReviews.MrSmith78 = 3.5;
                console.log(userReviews);

                // Initializing a property that was undefined
                userReviews['Colt'] = 5;
                console.log(userReviews);

                // Updating a property value
                userReviews['Colt'] = 15;
                console.log(userReviews);
            },
            snippet: `
const userReviews = {};

// Adding properties
userReviews['Queen b 49'] = 4.0;
userReviews.MrSmith78 = 3.5;
console.log(userReviews);

// Initializing a property that was undefined
userReviews['Colt'] = 5;
console.log(userReviews);

// Updating a property value
userReviews['Colt'] = 15;
console.log(userReviews);`,
        },
        {
            label: 'Using Operators on Properties',
            run: (console) => {
                const userReviews = {
                    'Queen b 49': 10,
                    'MrSmith78': 5,
                };

                userReviews['Queen b 49'] += 2;
                userReviews.MrSmith78++;

                console.log(userReviews);
            },
            snippet: `
const userReviews = {
    'Queen b 49': 10,
    'MrSmith78': 5
};

// Using += to add to a value
userReviews['Queen b 49'] += 2;

// Using ++ to increment a value
userReviews.MrSmith78++;
console.log(userReviews);`,
        },
    ],
};
