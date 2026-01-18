// @ts-nocheck
/* eslint-disable */

/**
 * @type {import('@/types').SnippetCollection}
 */
export default {
    name: 'Lexical Scope',
    snippets: [
        {
            label: 'Inner function has access to variables defined in its parent function',
            output: (console) => {
                function outer() {
                    let movie = 'Amadeus';

                    function inner() {
                        console.log(movie.toUpperCase());
                    }

                    inner();
                }

                outer();
            },
            snippet: `
function outer() {
    let movie = 'Amadeus';

    function inner() {
        // We can access 'movie' from the parent function
        console.log(movie.toUpperCase());
    }

    inner();
}

outer(); // Result: AMADEUS
            `,
        },
        {
            label: 'The variable lookup process',
            output: (console) => {
                function outer() {
                    let movie = 'Amadeus';

                    function inner() {
                        let movie = 'The Shining';

                        function extraInner() {
                            console.log(movie.toUpperCase());
                        }

                        extraInner();
                    }

                    inner();
                }

                outer();
            },
            snippet: `
function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';

        function extraInner() {
            // It looks at 'inner' first, finds 'The Shining', and stops searching
            console.log(movie.toUpperCase());
        }

        extraInner();
    }

    inner();
}

outer(); /* Result: THE SHINING */`,
        },
    ],
};
