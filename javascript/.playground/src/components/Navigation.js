import { el } from '@/utils/el';

/**
 * @param {import('../types').Data[]} data
 * @param {number} section
 */
export const Navigation = (data, section) => {
    const links = data.map((value) => {
        const bgintensity = value.section === section ? '600' : '800';
        const borderIntensity = value.section === section ? '600' : '700';

        return el({
            tagName: 'a',
            href: `?page=snippets&section=${value.section}`,
            title: `Go to "${value.title}" section`,
            textContent: `[#${value.section}] ${value.title}`,
            className: `flex items-center justify-center py-2 px-4 rounded-xl font-bold text-center border border-slate-${borderIntensity} text-slate-300 bg-slate-${bgintensity}`,
        });
    });

    return el({
        tagName: 'div',
        className: 'px-6 md:px-24 py-4 bg-slate-900',
        children: [
            el({
                tagName: 'div',
                className: 'flex flex-col justify-between sm:flex-row gap-5 lg:gap-3 text-sm',
                children: links,
            }),
        ],
    });
};
