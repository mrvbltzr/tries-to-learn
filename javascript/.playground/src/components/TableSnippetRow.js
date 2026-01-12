import { CodeBlock } from '@/components/CodeBlock';
import { OutputBlock } from '@/components/OutputBlock';
import { el } from '@/utils/el';

const IconBlock = () => {
    return el({
        tagName: 'div',
        className: `flex flex-none items-center text-slate-200 text-center`,
        children: [
            el({
                tagName: 'i',
                className: 'icon-chevrons-right inline',
            }),
        ],
    });
};

/**
 * @param {string} snippet
 * @param {import('../types').Snippet['run']} run
 */
export const TableSnippetRow = (snippet, run) => {
    return el({
        tagName: 'tr',
        className: `bg-gray-800`,
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
