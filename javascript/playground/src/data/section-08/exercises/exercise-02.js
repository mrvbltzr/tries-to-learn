/**
 * @type {import('@/types').ExerciseOutput}
 */
export default {
    instructions: `
Write a function to find the average value in an array of numbers.

<pre>avg([0,50])            // 25
avg([75,76,80,95,100]) // 85</pre>
    `,
    solution: (console) => {
        /** @param {number[]} numbers */
        function avg(numbers) {
            let total = 0;

            for (const number of numbers) {
                total += number;
            }

            return total / numbers.length;
        }

        console.log(avg([0, 50]));
        console.log(avg([75, 76, 80, 95, 100]));
    },
    snippet: `
function avg(numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total / numbers.length;
}
    `,
};
