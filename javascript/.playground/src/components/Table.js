import { el } from '@/utils/el';

/**
 * @param {HTMLTableRowElement[]} children
 */
export const Table = (children) => {
    return el({
        tagName: 'div',
        className: `rounded-2xl shadow-md bg-slate-800 border border-slate-700 overflow-hidden`,
        children: [
            el({
                tagName: 'table',
                className: 'w-full h-full table-fixed',
                children: [
                    el({
                        tagName: 'tbody',
                        children,
                    }),
                ],
            }),
        ],
    });
};
