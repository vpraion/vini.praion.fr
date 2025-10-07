/**
 * @file Core page routes (/, /cv-full, /blog, ...).
 * @description
 * Sets the core routes.
 *
 * @module routes/pageRoutes
 * @author Vini Praion
 * @since 2025-10-07
 */

const express = require("express");
const router = express.Router();

/**
 * Render short CV home page.
 * @route GET /
 */
router.get("/", (req, res) => {
    res.render("pages/home.html.njk", { cv_full: false });
});

/**
 * Render full CV page.
 * @route GET /cv-full
 */
router.get("/cv-full", (req, res) => {
    res.render("pages/home.html.njk", { cv_full: true });
});

module.exports = router;
