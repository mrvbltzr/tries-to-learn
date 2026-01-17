import { CheckCheck, createElement } from 'lucide';

import { el } from '@/utils/el';

/**
 * @param {string} label
 */
const LabelBadge = (label) => {
    return el({
        tagName: 'div',
        className: 'flex items-center text-sm font-medium',
        children: [
            el({
                tagName: 'span',
                className: 'bg-gray-500 text-white px-2 py-1 rounded-md uppercase',
                textContent: label.trim(),
            }),
        ],
    });
};

/**
 * @param {string} label - The text to show on top of the example code
 */
export const TableRowLabel = (label) => {
    const prefix = label.match(/^\[([^\]]+)\]\s*(.*)/);

    return el({
        tagName: 'tr',
        className: 'text-slate-200 bg-slate-700',
        children: [
            el({
                tagName: 'td',
                className: 'px-5 py-4 h-[inherit] font-semibold',
                children: [
                    el({
                        tagName: 'div',
                        className: 'flex gap-3 items-center',
                        children: [
                            createElement(CheckCheck),
                            prefix && LabelBadge(prefix.at(1).trim()),
                            el({
                                tagName: 'span',
                                className: 'uppercase',
                                textContent: (prefix ? prefix.at(2) : label).trim(),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
