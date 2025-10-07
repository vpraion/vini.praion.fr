/**
 * @file Immediately-applied theme initializer.
 * @description
 * Detects and applies the user's preferred theme before the page renders.
 * This ensures there is no visible flicker between light and dark modes.
 * Logic:
 * 1. Check if the user has a previously saved theme in localStorage.
 * 2. If not, detect the system preference using the prefers-color-scheme media query.
 * 3. Apply the resulting theme ('light' or 'dark') to the <html> element
 *    via the `data-theme` attribute, which should be used in CSS selectors.
 *
 * @author Vini Praion
 * @since 2025-10-07
 */

(function () {
    // Retrieve the user’s saved theme from localStorage, if any
    const storedTheme = localStorage.getItem('theme');

    // Detect the system’s dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Determine which theme to use
    const theme = storedTheme || (prefersDark ? 'dark' : 'light');

    // Apply the theme to the root <html> element immediately
    document.documentElement.setAttribute('data-theme', theme);
})();
