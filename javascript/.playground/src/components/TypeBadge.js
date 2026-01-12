import { el } from '@/utils/el';

/**
 * @param {string} type
 */
export const TypeBadge = (type) => {
    return el({
        tagName: 'span',
        className: 'text-sm text-slate-500',
        textContent: type,
    });
};
