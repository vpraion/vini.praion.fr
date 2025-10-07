/**
 * @file Utility to safely access nested properties in an object using dot notation.
 * @module utils/deepGet
 * @author Vini Praion
 * @since 2025-10-07
 */

/**
 * Retrieve a nested property from an object using a dotted path.
 * @param {Record<string, any>} obj - The object to traverse.
 * @param {string} dottedKey - The key path, e.g. `"user.profile.name"`.
 * @returns {any} The value at the given path, or undefined if not found.
 */
function deepGet(obj, dottedKey) {
    return dottedKey.split(".").reduce((acc, k) => acc && acc[k], obj);
}

module.exports = { deepGet };
