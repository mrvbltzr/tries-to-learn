/** @type {import('@/types').ExampleCollection} */
export default {
    name: 'Defining Object',
    snippets: [
        {
            label: 'Creating a Fitbit Data Object',
            run: (console) => {
                const fitbitData = {
                    totalSteps: 308000,
                    totalMiles: 211.7,
                    avgCalorieBurn: 5755,
                    workoutsThisWeek: '5 of 7',
                    avgGoodSleep: '2 hours 13 minutes',
                };

                console.log(fitbitData);
            },
            snippet: `
const fitbitData = {
    totalSteps: 308000,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutsThisWeek: '5 of 7',
    avgGoodSleep: '2 hours 13 minutes'
};

console.log(fitbitData)`,
        },
    ],
};
