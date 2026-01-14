/**
 * @type {import('@/types').ExampleCollection}
 */
export default {
    name: 'Function Challenges',
    snippets: [
        {
            label: 'Challenge #1',
            run: (console) => {
                function isValidPassword(password, username) {
                    if (password.length < 8) {
                        return false;
                    }

                    if (password.includes(' ')) {
                        return false;
                    }

                    if (password.indexOf(username) !== -1) {
                        return false;
                    }

                    return true;
                }

                console.log(isValidPassword('89Fjj1nms', 'dogLuvr'));
                console.log(isValidPassword('dogLuvr123!', 'dogLuvr'));
                console.log(isValidPassword('hello1', 'dogLuvr'));
            },
            snippet: `
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//  - be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true. Otherwise false.

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes(' ')) {
        return false;
    }

    if (password.indexOf(username) !== -1) {
        return false;
    }

    return true;
}
`,
        },
        {
            label: 'Challenge #2',
            run: (console) => {
                function avg(numbers) {
                    // let total = 0;

                    // for (const number of numbers) {
                    //     total += number;
                    // }

                    return numbers.reduce((p, c) => (p += c), 0) / numbers.length;
                }

                console.log(avg([0, 50])); //25
                console.log(avg([75, 76, 80, 95, 100])); //85.2
            },
            snippet: `
// Write a function to find the average value in an array of numbers

// avg([0,50]) //25
// avg([75,76,80,95,100]) //85.

function avg(numbers) {
    // let total = 0;

    // for (const number of numbers) {
    //     total += number;
    // }

    return numbers.reduce((p, c) => (p += c), 0) / numbers.length;
}`,
        },
        {
            label: 'Challenge #3',
            run: (console) => {
                function isPangram(sentence) {
                    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
                    const loweredSentence = sentence.toLowerCase();

                    for (const letter of alphabets) {
                        if (!loweredSentence.includes(letter)) {
                            return false;
                        }
                    }

                    return true;
                }

                console.log(isPangram('The five boxing wizards jump quickly'));
                console.log(isPangram('The five boxing wizards jump quick'));
            },
            snippet: `
// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    const loweredSentence = sentence.toLowerCase();

    for (const letter of alphabets) {
        if (!loweredSentence.includes(letter)) {
            return false;
        }
    }

    return true;
}`,
        },
        {
            label: 'Challenge #4',
            run: (console) => {
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
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

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
}`,
        },
    ],
};
