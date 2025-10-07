/**
 * @file Language switcher script.
 * @description
 * Handles client-side language toggling between English and French.
 * When the user clicks the language button, this script:
 * 1. Detects the current language from the <html lang> attribute.
 * 2. Determines the new language (toggles between 'en' and 'fr').
 * 3. Calls the corresponding backend route `/change-lang_{locale}` to update the cookie.
 * 4. Reloads the page to apply the new locale.
 *
 * This script gracefully handles cases where the button is missing or
 * the network request fails.
 *
 * @author Vini Praion
 * @since 2025-10-07
 */

(function () {
    // Retrieve the language switch button
    const btn = document.getElementById("change-lang-btn");
    if (!btn) return; // Exit if button not present

    btn.addEventListener("click", async () => {
        // Determine current and next language
        const currentLang = document.documentElement.lang || "en";
        const newLang = currentLang === "en" ? "fr" : "en";

        try {
            // Request the backend route to update the language cookie
            await fetch(`/change-lang_${newLang}`, { method: "GET" });

            // Reload to apply new translations
            window.location.reload();
        } catch (err) {
            console.error("Error while changing language:", err);
        }
    });
})();
