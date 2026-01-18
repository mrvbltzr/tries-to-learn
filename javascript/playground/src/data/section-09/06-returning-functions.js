/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Returning Functions',
    snippets: [
        {
            label: 'Creating and using multiplication functions',
            output: (console) => {
                function multiplyBy(num) {
                    return function (x) {
                        return x * num;
                    };
                }

                const triple = multiplyBy(3);
                const double = multiplyBy(2);
                const halve = multiplyBy(0.5);

                console.log(triple(6));
                console.log(double(5));
                console.log(halve(9));
            },
            snippet: `
function multiplyBy(num) {
    return function(x) {
        return x * num;
    };
}

const triple = multiplyBy(3);
const double = multiplyBy(2);
const halve = multiplyBy(0.5);

console.log(triple(6)); // 18
console.log(double(5)); // 10
console.log(halve(9));  // 4.5`,
        },
        {
            label: 'Making functions to check number ranges',
            output: (console) => {
                function makeBetweenFunc(x, y) {
                    return function (num) {
                        return num >= x && num <= y;
                    };
                }

                const isChild = makeBetweenFunc(0, 18);
                const isNineties = makeBetweenFunc(1990, 1999);
                const isNiceWeather = makeBetweenFunc(60, 79);

                console.log(isChild(17));
                console.log(isNineties(1992));
                console.log(isNiceWeather(98));
            },
            snippet: `
function makeBetweenFunc(x, y) {
    return function(num) {
        return num >= x && num <= y;
    };
}

const isChild = makeBetweenFunc(0, 18);
const isNineties = makeBetweenFunc(1990, 1999);
const isNiceWeather = makeBetweenFunc(60, 79);

console.log(isChild(17));      // true
console.log(isNineties(1992)); // true
console.log(isNiceWeather(98)); // false`,
        },
    ],
};
