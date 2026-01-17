import { ChevronsRight, createElement } from 'lucide';

import { CodeBlock } from '@/components/CodeBlock';
import { OutputBlock } from '@/components/OutputBlock';
import { el } from '@/utils/el';

const IconBlock = () => {
    return el({
        tagName: 'div',
        className: `flex flex-none items-center text-slate-200 text-center`,
        children: [createElement(ChevronsRight, { 'stroke-width': 3 })],
    });
};

/**
 * @param {string} snippet
 * @param {import('@/types').Snippet['output']} run
 */
export const TableRow = (snippet, run) => {
    return el({
        tagName: 'tr',
        className: `bg-slate-900`,
        children: [
            el({
                tagName: 'td',
                className: 'p-4 h-[inherit]',
                children: [
                    el({
                        tagName: 'div',
                        className: 'flex items-stretch gap-4 w-full',
                        children: [CodeBlock(snippet), IconBlock(), OutputBlock(run)],
                    }),
                ],
            }),
        ],
    });
};
