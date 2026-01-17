import { el } from '@/utils/el';

/**
 * @param  {Node[]} children
 */
export const PageContent = (children) => {
    return el({
        tagName: 'div',
        className: 'flex flex-col gap-10 flex-[3] my-7 mx-6 md:mx-24 overflow-hidden',
        children,
    });
};
