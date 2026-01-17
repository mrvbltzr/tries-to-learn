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
 * @property {LogCallback} log Show result in the interface instead of browser console.
 */

/**
 * @typedef {Object} Snippet
 * @property {string} label The display name or description of the snippet.
 * @property {function(Logger): void} output A callback function that handles the output.
 * @property {string} snippet The actual string content of the code snippet.
 */

/**
 * @typedef {Object} SnippetCollection
 * @property {string} name The name of the collection.
 * @property {Snippet[]} snippets An array of snippet objects.
 */

/**
 * @typedef {Object} ExerciseOutput
 * @property {string} instructions The instruction on how to construct the logic.
 * @property {function(Logger): void} solution A callback function that shows the work/logic.
 * @property {string} [snippet] The actual string content of the code work.
 */

/**
 * @typedef {Object} SectionData
 * @property {number} id A unique section number.
 * @property {string} title The main heading of the module.
 * @property {SnippetCollection[]} collections A collection of example groups.
 * @property {ExerciseOutput[]} [exercises] A collection of completed exercise codes.
 */

export {};
