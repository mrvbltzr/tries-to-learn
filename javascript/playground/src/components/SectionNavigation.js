import { el } from '@/utils/el';

/**
 * @param {import('@/types').SectionData[]} data
 * @param {number} [section]
 */
export const SectionNavigation = (data, section) => {
    const links = data.map((value) => {
        const bg = value.id === section ? 'bg-slate-600' : 'bg-slate-800';
        const border = value.id === section ? 'border-slate-600' : 'border-slate-700';

        return el({
            tagName: 'a',
            href: `?section=${value.id}`,
            title: `Go to "${value.title}" section`,
            textContent: `[#${value.id}] ${value.title}`,
            className: `flex items-center justify-center py-2 px-4 rounded-xl font-bold text-center text-slate-300 border ${border} ${bg}`,
        });
    });

    return el({
        tagName: 'div',
        className: 'px-8 py-4 bg-slate-900',
        children: [
            el({
                tagName: 'div',
                className: 'flex flex-wrap w-full justify-center gap-3 text-sm',
                children: links,
            }),
        ],
    });
};
