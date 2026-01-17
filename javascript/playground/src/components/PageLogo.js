import logo from '@/assets/logo.png';

import { el } from '@/utils/el';

/**
 * @param {string} [title]
 */
export const PageLogo = (title) => {
    return el({
        tagName: 'div',
        className: 'w-full hidden md:block px-24 my-3',
        children: [
            el({
                tagName: 'div',
                className: 'flex items-center justify-between',
                children: [
                    el({
                        tagName: 'a',
                        href: '.',
                        className: 'my-4',
                        children: [
                            el({
                                tagName: 'img',
                                src: logo,
                                className: 'h-30',
                                alt: document.title,
                                title: document.title,
                            }),
                        ],
                    }),
                    el({
                        tagName: 'h1',
                        id: 'page-title',
                        className: 'text-slate-200 text-2xl',
                        textContent: title ?? document.title,
                    }),
                ],
            }),
        ],
    });
};
