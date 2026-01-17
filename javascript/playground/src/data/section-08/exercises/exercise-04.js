/**
 * @type {import('@/types').ExerciseOutput}
 */
export default {
    instructions: `
Write a getCard() function which returns a random playing card object, like:

<pre>{
    value: 'K'
    suit: 'clubs'
}</pre>

Pick a random value from: A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K
Pick a random suit from: clubs, spades, hearts, diamonds

Return both in an object.
    `,
    solution: (console) => {
        /** @param {number} length */
        function randomNum(length) {
            return Math.floor(Math.random() * length);
        }

        function getCard() {
            const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
            const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

            return {
                value: values[randomNum(values.length)],
                suit: suits[randomNum(suits.length)],
            };
        }

        console.log(getCard());
        console.log(getCard());
        console.log(getCard());
        console.log(getCard());
        console.log(getCard());
    },
    snippet: `
function randomNum(length) {
    return Math.floor(Math.random() * length);
}

function getCard() {
    const values = [
        'A', '2', '3', '4', '5',
        '6', '7', '8', '9', '10',
        'J', 'Q', 'K',
    ];

    const suits = ['clubs', 'spades', 'hearts', 'diamonds'];

    return {
        value: values[randomNum(values.length)],
        suit: suits[randomNum(suits.length)],
    };
}
    `,
};
