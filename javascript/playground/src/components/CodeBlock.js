import hljs from 'highlight.js/lib/core';

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
        className: `flex-1 border-2 border-dashed border-slate-700 rounded-xl p-4`,
        children: [
            el({
                tagName: 'pre',
                children: [code],
            }),
        ],
    });
};
