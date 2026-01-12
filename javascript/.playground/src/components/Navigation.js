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
            href: `?section=${value.section}`,
            title: `Go to "${value.title}" section`,
            textContent: `[#${value.section}] ${value.title}`,
            className: `flex items-center justify-center py-2 px-4 rounded-xl font-bold text-center border border-slate-${borderIntensity} text-slate-300 bg-slate-${bgintensity}`,
        });
    });

    return el({
        tagName: 'div',
        className: 'flex flex-col sm:flex-row gap-5 lg:gap-3 text-sm',
        children: links,
    });
};
