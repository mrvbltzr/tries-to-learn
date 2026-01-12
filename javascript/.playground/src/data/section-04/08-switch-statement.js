/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Switch Statement',
    snippets: [
        {
            label: 'Day of the Week',
            run: (console) => {
                let day = 3;

                switch (day) {
                    case 1:
                        console.log('Monday');
                        break;
                    case 2:
                        console.log('Tuesday');
                        break;
                    case 3:
                        console.log('Wednesday');
                        break;
                    case 4:
                        console.log('Thursday');
                        break;
                    case 5:
                        console.log('Friday');
                        break;
                    case 6:
                        console.log('Saturday');
                        break;
                    case 7:
                        console.log('Sunday');
                        break;
                    default:
                        console.log('invalid day');
                }
            },
            snippet: `
let day = 3;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('invalid day');
}
`,
        },
        {
            label: 'Grouping Emojis by Color',
            run: (console) => {
                let emoji = 'sad face';

                switch (emoji) {
                    case 'sad face':
                    case 'happy face':
                        console.log('yellow');
                        break;
                    case 'eggplant':
                        console.log('purple');
                        break;
                    case 'heart':
                    case 'lips':
                        console.log('red');
                        break;
                }
            },
            snippet: `
let emoji = 'sad face';

switch (emoji) {
    case 'sad face':
    case 'happy face':
        console.log('yellow');
        break;
    case 'eggplant':
        console.log('purple');
        break;
    case 'heart':
    case 'lips':
        console.log('red');
        break;
}`,
        },
    ],
};
