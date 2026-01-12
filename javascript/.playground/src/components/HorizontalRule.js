import { el } from '@/utils/el';

export const HorizontalRule = () => {
    const icon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-zap-icon lucide-zap"
><path
    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
/></svg>`;

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
                innerHTML: icon.trim().replace(/\s+/g, ' '),
            }),
        ],
    });
};
