import { ChevronRight, CircleX, createElement } from 'lucide';

import { el } from '@/utils/el';
import { stringify } from '@/utils/stringify';

/**
 * @param {any | Error} result
 * @param {string} type
 */
const ResultContainer = (result, type) => {
    return el({
        tagName: 'div',
        className: `flex justify-between items-center border-2 border-dotted border-slate-700 bg-slate-800 rounded-lg whitespace-pre-wrap w-full`,
        children: [
            el({
                tagName: 'div',
                className: 'flex items-center gap-1.5',
                children: [
                    createElement(type.includes('Error') ? CircleX : ChevronRight, {
                        width: '14',
                        height: '14',
                        class: `h-full ml-2 ${type.includes('Error') ? 'text-red-100' : 'text-slate-500'}`,
                    }),
                    el({
                        tagName: ['object', 'array'].includes(type) ? 'pre' : 'span',
                        className: `h-full p-2 ${type.includes('Error') ? 'text-red-200' : 'text-slate-200'}`,
                        children: [result],
                    }),
                ],
            }),
            el({
                tagName: 'span',
                className: 'h-full text-sm text-slate-500 p-2',
                textContent: type,
            }),
        ],
    });
};

/**
 * @param {any | Function | Error} logic
 */
const Content = (logic) => {
    const [data, error] = (() => {
        if (logic instanceof Error) {
            return [null, logic];
        }

        if (typeof logic !== 'function') {
            return [logic, null];
        }

        try {
            return [logic(), null];
        } catch (e) {
            return [null, e];
        }
    })();

    if (error instanceof Error) {
        return ResultContainer(String(error), error.name);
    }

    if (typeof data === 'object') {
        return ResultContainer(stringify(data), Array.isArray(data) ? 'array' : 'object');
    }

    return ResultContainer(String(data), typeof data);
};

/**
 * @param {import('@/types').Snippet['output']} callback
 */
export const OutputBlock = (callback) => {
    /** @type {HTMLElement[]} */
    const _cache = [];

    const className = `flex flex-1 flex-col items-center gap-3 border-2 border-dashed border-slate-700 rounded-xl p-3`;

    try {
        callback({
            log: (result) => {
                _cache.push(Content(result));
            },
        });

        return el({
            tagName: 'div',
            className,
            children: _cache,
        });
    } catch (error) {
        return el({
            tagName: 'div',
            className,
            children: [Content(error)],
        });
    }
};
