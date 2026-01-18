/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Higher Order Functions',
    snippets: [
        {
            label: 'Passing functions as arguments',
            output: (console) => {
                function callThreeTimes(f) {
                    f();
                    f();
                    f();
                }

                function cry() {
                    console.log("Boo hoo! I'm so sad.");
                }

                callThreeTimes(cry);
            },
            snippet: `
function callThreeTimes(f) {
    f();
    f();
    f();
}

function cry() {
    console.log("Boo hoo! I'm so sad.");
}

callThreeTimes(cry);`,
        },
        {
            label: 'Repeating a function N times',
            output: (console) => {
                function rage() {
                    console.log('I hate everything.');
                }

                function repeatNTimes(action, num) {
                    for (let i = 0; i < num; i++) {
                        action();
                    }
                }

                repeatNTimes(rage, 5);
            },
            snippet: `
function repeatNTimes(action, num) {
    for (let i = 0; i < num; i++) {
        action();
    }
}

function rage() {
    console.log('I hate everything.');
}

repeatNTimes(rage, 5); // Calls rage 5 times`,
        },
        {
            label: 'Randomly picking a function to call',
            output: (console) => {
                function cry() {
                    console.log("Boo hoo! I'm so sad.");
                }

                function rage() {
                    console.log('I hate everything.');
                }

                function pickOne(f1, f2) {
                    if (Math.random() < 0.5) {
                        f1();
                    } else {
                        f2();
                    }
                }

                pickOne(cry, rage);
            },
            snippet: `
function pickOne(f1, f2) {
    let rand = Math.random();
    if (rand < 0.5) {
        f1();
    } else {
        f2();
    }
}

function cry() {
    console.log("Boo hoo! I'm so sad.");
}

function rage() {
    console.log('I hate everything.');
}

pickOne(cry, rage);`,
        },
    ],
};
