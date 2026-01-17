/**
 * @type {import('@/types').ExerciseOutput}
 */
export default {
    instructions: `
Write a isValidPassword function.
It accepts 2 arguments: password and username.

Password must:
 - be at least 8 characters
 - cannot contain spaces
 - cannot contain the username

If all requirements are met, return true. Otherwise false.

<pre>isValidPassword('89Fjj1nms', 'dogLuvr');  // true
isValidPassword('dogLuvr123!', 'dogLuvr') // false
isValidPassword('hello1', 'dogLuvr')      // false</pre>
    `,
    solution: (console) => {
        /**
         * @param {string} password
         * @param {string} username
         */
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
};
