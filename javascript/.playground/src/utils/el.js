/**
 * @typedef {Node | string | null | undefined} ChildElement
 */

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @typedef {Partial<Omit<HTMLElementTagNameMap[K], 'style' | 'children'>> & {
 * tagName: K,
 * styles?: import('csstype').Properties,
 * tap?: (el: HTMLElementTagNameMap[K]) => void,
 * children?: ChildElement[]
 * }} ElementOptions
 */

/**
 * Creates an HTML element with typed properties, styles, and children.
 *
 * @template {keyof HTMLElementTagNameMap} K
 * @param {ElementOptions<K>} options - Configuration including tagName, CSS properties, and child nodes.
 * @returns {HTMLElementTagNameMap[K]} The constructed HTMLElement.
 */
export const el = (options) => {
    const { tagName, styles, tap, children = [], ...rest } = options;

    const element = document.createElement(tagName);

    Object.assign(element, rest);

    if (styles) {
        Object.assign(element.style, styles);
    }

    if (tap) {
        tap(element);
    }

    children.forEach((child) => {
        if (!child) {
            return;
        }

        element.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    });

    return element;
};
