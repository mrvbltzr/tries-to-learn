import { ChevronsRight, createElement } from 'lucide';

import { ExerciseCodeBlock } from '@/components/ExerciseCodeBlock';
import { ExerciseSolutionBlock } from '@/components/ExerciseSolutionBlock';
import { el } from '@/utils/el';

const IconBlock = () => {
    return el({
        tagName: 'div',
        className: `flex flex-none items-center text-emerald-200 text-center`,
        children: [createElement(ChevronsRight, { 'stroke-width': 3 })],
    });
};

/**
 * @param {string} snippet
 * @param {import('@/types').ExerciseOutput['solution']} solution
 */
export const ExerciseTableRow = (snippet, solution) => {
    return el({
        tagName: 'tr',
        className: `bg-emerald-950`,
        children: [
            el({
                tagName: 'td',
                className: 'p-4 h-[inherit]',
                children: [
                    el({
                        tagName: 'div',
                        className: 'flex items-stretch gap-4 w-full',
                        children: [ExerciseCodeBlock(snippet), IconBlock(), ExerciseSolutionBlock(solution)],
                    }),
                ],
            }),
        ],
    });
};
