import { BadgeInfo, createElement } from 'lucide';

import { el } from '@/utils/el';

/**
 * @param {string} instructions - The text to show on top of the example code
 */
export const ExerciseTableInstruction = (instructions) => {
    return el({
        tagName: 'tr',
        className: 'text-emerald-200 bg-emerald-950',
        children: [
            el({
                tagName: 'td',
                className: 'px-5 py-4 h-[inherit] font-semibold',
                children: [
                    el({
                        tagName: 'div',
                        className: 'flex gap-6 items-center',
                        children: [
                            createElement(BadgeInfo),
                            el({
                                tagName: 'span',
                                innerHTML: instructions.trim().replace(/\n/g, '<br />'),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
