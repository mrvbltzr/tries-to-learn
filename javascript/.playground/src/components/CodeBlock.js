/* global hljs */
import { el } from '@/utils/el';

/**
 * @param {string} [snippet]
 */
export const CodeBlock = (snippet) => {
    const code = el({
        tagName: 'code',
        className: '!p-0 !bg-transparent whitespace-pre-wrap language-javascript',
        textContent: snippet.trim(),
    });

    hljs.highlightElement(code);

    return el({
        tagName: 'div',
        className: `flex-1 border-2 border-dashed border-slate-700 bg-slate-900 rounded-xl p-4`,
        tap: (el) => {
            el.setAttribute('data-aos', 'fade-right');
        },
        children: [
            el({
                tagName: 'pre',
                children: [code],
            }),
        ],
    });
};
