/**
 * @file Language switch route.
 * @description
 * Sets the /change-lang_fr | /change_lang_en routes.
 *
 * @module routes/langRoutes
 * @author Vini Praion
 * @since 2025-10-07
 */

const express = require("express");
const router = express.Router();

/**
 * Switch language and persist via cookie.
 * @route GET /change-lang_:locale
 */
router.get("/change-lang_:locale", (req, res) => {
    const newLang = req.params.locale;
    if (["fr", "en"].includes(newLang)) {
        res.cookie("lang", newLang, { maxAge: 90 * 24 * 3600 * 1000 });
    }
    res.redirect(req.get("Referer") || "/");
});

module.exports = router;
