import { TypeBadge } from '@/components/TypeBadge';
import { el } from '@/utils/el';
import { stringify } from '@/utils/stringify';

/**
 * @param {any | Error} result
 */
const Content = (result) => {
    const containerClass =
        'flex justify-between items-center border-2 border-dotted border-slate-700 bg-slate-800 rounded-lg px-4 py-2 whitespace-pre-wrap w-full';

    const defaultTextColor = 'text-slate-200';

    if (result instanceof Error) {
        return el({
            tagName: 'pre',
            className: `${containerClass} text-red-200`,
            children: [String(result), TypeBadge(result.name)],
        });
    }

    if (typeof result === 'object') {
        return el({
            tagName: 'div',
            className: `${containerClass} ${defaultTextColor}`,
            children: [
                el({
                    tagName: 'pre',
                    children: [stringify(result)],
                }),
                TypeBadge(Array.isArray(result) ? 'array' : 'object'),
            ],
        });
    }

    return el({
        tagName: 'pre',
        className: `${containerClass} ${defaultTextColor} font-(family-name:--default-font-family)`,
        children: [String(result), TypeBadge(typeof result)],
    });
};

/**
 * @param {import('../types').Snippet['run']} callback
 */
export const OutputBlock = (callback) => {
    /** @type {HTMLElement[]} */
    const _cache = [];

    const className =
        'flex flex-1 flex-col justify-center items-center gap-3 border-2 border-dashed border-slate-700 bg-slate-900 rounded-xl p-3';

    try {
        callback({
            log: (result) => {
                _cache.push(Content(result));
            },
        });

        return el({
            tagName: 'div',
            className,
            tap: (el) => {
                el.setAttribute('data-aos', 'fade-left');
            },
            children: _cache,
        });
    } catch (error) {
        return el({
            tagName: 'div',
            className,
            tap: (el) => {
                el.setAttribute('data-aos', 'fade-left');
                el.setAttribute('data-aos-offset', '400');
            },
            children: [Content(error)],
        });
    }
};
