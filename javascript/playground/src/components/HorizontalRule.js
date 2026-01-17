import { Zap, createElement } from 'lucide';

import { el } from '@/utils/el';

export const HorizontalRule = () => {
    return el({
        tagName: 'div',
        className: 'inline-flex items-center justify-center w-full',
        children: [
            el({
                tagName: 'hr',
                className: 'w-2/3 h-1 my-4 bg-slate-700 border-0 rounded-sm',
            }),
            el({
                tagName: 'div',
                className: 'absolute rounded-full px-4 -translate-x-1/2 bg-slate-950 text-slate-300 left-1/2',
                children: [createElement(Zap)],
            }),
        ],
    });
};
