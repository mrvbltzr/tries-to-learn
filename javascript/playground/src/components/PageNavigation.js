import { el } from '@/utils/el';

/**
 * @param {string} href
 * @param {string} label
 * @returns {HTMLAnchorElement}
 */
const PageNavigationLink = (href, label) => {
    return el({
        tagName: 'a',
        href,
        className: 'p-4 text-white bg-slate-700',
        title: `Go to ${label} page`,
        textContent: label,
    });
};

/**
 * @param {Record<string, { name: string, component: (() => import('@/utils/el').ElNode) }>} routes
 * @returns {HTMLElement}
 */
export const PageNavigation = (routes) => {
    return el({
        tagName: 'div',
        className: 'flex justify-center items-center gap-4 bg-slate-900',
        children: [
            el({
                tagName: 'div',
                className: 'flex justify-center items-center gap-4 bg-slate-900',
                children: Object.entries(routes).map(([page, opts]) => {
                    return PageNavigationLink(`?page=${page}`, opts.name);
                }),
            }),
        ],
    });
};
