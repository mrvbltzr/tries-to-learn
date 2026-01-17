/**
 * @type {import('@/types').ExerciseOutput}
 */
export default {
    instructions: `
A pangram is a sentence that contains every letter of the alphabet, like: "The quick brown fox jumps over the lazy dog"

Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. Make sure you ignore string casing!

<pre>isPangram('The five boxing wizards jump quickly') // true
isPangram('The five boxing wizards jump quick')   // false</pre>
    `,
    solution: (console) => {
        /** @param {string} sentence */
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
    `,
};
