import { el } from '@/utils/el';

export const NoSectionSelected = () => {
    const icon = `<svg
    class="w-5 h-5 me-2 shrink-0 mt-0.5 sm:mt-0"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-badge-info-icon lucide-badge-info"
>
    <path
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
    />
    <line x1="12" x2="12" y1="16" y2="12" />
    <line x1="12" x2="12.01" y1="8" y2="8" />
</svg>`;

    return el({
        tagName: 'div',
        className:
            'flex items-start sm:items-center p-4 mb-4 text-blue-400 rounded-lg bg-blue-950 border border-blue-900',
        role: 'alert',
        innerHTML: icon.trim().replace(/\s+/g, ' '),
        children: [
            el({
                tagName: 'p',
                children: [
                    el({
                        tagName: 'span',
                        className: 'font-semibold me-1',
                        textContent: 'No section selected...',
                    }),
                    'Please select one from the navigation bar.',
                ],
            }),
        ],
    });
};
