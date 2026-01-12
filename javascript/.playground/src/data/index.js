/** @type {Record<string, { default: import('@/types').ExampleCollection }>} */
const allFiles = import.meta.glob('@/data/**/!(index.js)', { eager: true });

/** @type {Record<string, import('@/types').ExampleCollection[]>} */
const mappedSections = Object.entries(allFiles).reduce((acc, [path, module]) => {
    const pathParts = path.split('/');
    const section = pathParts.find((part) => part.startsWith('section-'));

    if (section) {
        if (!acc[section]) {
            acc[section] = [];
        }

        acc[section].push(module.default);
    }

    return acc;
}, {});

/** @type {import('@/types').Data[]} */
export const sections = [
    {
        section: 2,
        title: 'JS Values and Variables',
        examples: mappedSections['section-02'],
    },
    {
        section: 3,
        title: 'How to Model Data Efficiently',
        examples: mappedSections['section-03'],
    },
    {
        section: 4,
        title: 'Controlling Program Logic and Flow',
        examples: mappedSections['section-04'],
    },
    {
        section: 5,
        title: 'Capture Collections of Data with Arrays',
        examples: mappedSections['section-05'],
    },
    {
        section: 6,
        title: 'Objects: The Core of JavaScript',
        examples: mappedSections['section-06'],
    },
    {
        section: 7,
        title: 'The World of Loop',
        examples: mappedSections['section-07'],
    },
];
