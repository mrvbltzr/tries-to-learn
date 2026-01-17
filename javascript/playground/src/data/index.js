/**
 * @returns {import('@/types').SectionData[]}
 */
export const getAllData = () => {
    /** @type {Record<string, { default: import('@/types').SnippetCollection }>} */
    const allFiles = import.meta.glob('./section-*/{*.js,exercises/*.js}', { eager: true });

    /** @type {Record<string, import('@/types').SnippetCollection[]>} */
    const snippets = Object.entries(allFiles).reduce((acc, [path, module]) => {
        const pathArray = path.split('/');
        const isExercise = pathArray.some((v) => v.startsWith('exercise'));
        const label = pathArray.find((p) => p.startsWith('section-'));

        if (label && !isExercise) {
            (acc[label] ??= []).push(module.default);
        }

        return acc;
    }, {});

    /** @type {Record<string, import('@/types').ExerciseOutput[]>} */
    const exercises = Object.entries(allFiles).reduce((acc, [path, module]) => {
        const pathArray = path.split('/');
        const isExercise = pathArray.some((v) => v.startsWith('exercise'));
        const label = pathArray.find((p) => p.startsWith('section-'));

        if (label && isExercise) {
            (acc[label] ??= []).push(module.default);
        }

        return acc;
    }, {});

    return [
        {
            id: 2,
            title: 'JS Values and Variables',
            collections: snippets['section-02'],
        },
        {
            id: 3,
            title: 'How to Model Data Efficiently',
            collections: snippets['section-03'],
        },
        {
            id: 4,
            title: 'Controlling Program Logic and Flow',
            collections: snippets['section-04'],
        },
        {
            id: 5,
            title: 'Capture Collections of Data with Arrays',
            collections: snippets['section-05'],
        },
        {
            id: 6,
            title: 'Objects: The Core of JavaScript',
            collections: snippets['section-06'],
        },
        {
            id: 7,
            title: 'The World of Loop',
            collections: snippets['section-07'],
        },
        {
            id: 8,
            title: 'Writing Reusable Code With Functions',
            collections: snippets['section-08'],
            exercises: exercises['section-08'],
        },
    ];
};
