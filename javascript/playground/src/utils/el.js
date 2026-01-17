/**
 * @typedef {(() => Node | string) | Node | string | null | undefined} ElNode
 */

/**
 * @template {keyof HTMLElementTagNameMap} K
 * @typedef {Partial<Omit<HTMLElementTagNameMap[K], 'style' | 'children'>> & {
 * tagName: K,
 * styles?: import('csstype').Properties,
 * tap?: (el: HTMLElementTagNameMap[K]) => void,
 * children?: ElNode[]
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

        element.append(typeof child === 'function' ? child() : child);
    });

    return element;
};

/**
 * Creates a DocumentFragment to group multiple elements without adding extra nodes to the DOM.
 * Acts as the vanilla JavaScript equivalent of React's `<>...</>` syntax.
 *
 * @param {...ElNode} children An array of nodes, strings, or functions that return nodes.
 */
export const Fragment = (...children) => {
    const fragment = document.createDocumentFragment();

    children.forEach((child) => {
        if (child) {
            fragment.append(typeof child === 'function' ? child() : child);
        }
    });

    return fragment;
};
