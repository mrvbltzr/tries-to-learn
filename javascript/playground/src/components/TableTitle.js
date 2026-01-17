import { el } from '@/utils/el';

/**
 * @param {string} title
 */
export const TableTitle = (title) => {
    return el({
        tagName: 'tr',
        children: [
            el({
                tagName: 'th',
                className: `text-slate-200 py-3 uppercase`,
                textContent: title,
            }),
        ],
    });
};
