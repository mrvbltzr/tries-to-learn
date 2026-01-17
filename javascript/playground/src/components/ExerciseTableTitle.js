import { el } from '@/utils/el';

/**
 * @param {string} title
 */
export const ExerciseTableTitle = (title) => {
    return el({
        tagName: 'tr',
        children: [
            el({
                tagName: 'th',
                className: `text-emerald-200 py-3 uppercase`,
                textContent: title,
            }),
        ],
    });
};
