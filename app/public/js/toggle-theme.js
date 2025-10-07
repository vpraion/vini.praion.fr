/**
 * @file Handles manual switchimg betweem dark and light themes.
 * @description
 * Behavior:
 * - Waits for the DOM to be fully loaded.
 * - Listens for a click on the toggle button (`#theme-toggle-btn`).
 * - Toggles the `data-theme` attribute on the <html> element.
 * - Persists the user’s choice in `localStorage` for future sessions.
 *
 * @author Vini Praion
 * @since 2025-10-07
 */

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the theme toggle button
    const btn = document.getElementById('theme-toggle-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        // Read the current theme from the <html> attribute
        const current = document.documentElement.getAttribute('data-theme');

        // Determine the next theme
        const next = current === 'dark' ? 'light' : 'dark';

        // Apply the new theme
        document.documentElement.setAttribute('data-theme', next);

        // Persist it in localStorage for the next visit
        localStorage.setItem('theme', next);
    });
});
