/**
 * @callback LogCallback
 * @param {any} logic
 * @returns {void}
 *
 * @callback LogComment
 * @param {string} comment
 * @returns {void}
 *
 * @typedef {Object} Logger
 * @property {LogCallback} log - Show result in the interface instead of browser console.
 */

/**
 * @typedef {Object} Snippet
 * @property {string} label - The display name or description of the snippet.
 * @property {function(Logger): void} run - A callback function that handles the output.
 * @property {string} snippet - The actual string content of the code snippet.
 */

/**
 * @typedef {Object} ExampleCollection
 * @property {string} name - The name of the collection.
 * @property {Snippet[]} snippets - An array of snippet objects.
 */

/**
 * @typedef {Object} Data
 * @property {number} section - The section number.
 * @property {string} title - The main heading of the module.
 * @property {ExampleCollection[]} examples - A collection of example groups.
 */

export {};
