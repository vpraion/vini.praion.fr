/**
 * @file Express application setup.
 * @description
 * Initializes the Express app with:
 * - Middleware stack
 * - Static asset serving
 * - Nunjucks templating
 * - Route mounting
 * - Global error handling
 *
 * @module ./app
 * @author Vini Praion
 * @since 2025-10-07
 */

const express = require("express");
const nunjucks = require("nunjucks");
const path = require("path");
const cookieParser = require("cookie-parser");
const { localization } = require("./middlewares/localization");
const { notFoundHandler, serverErrorHandler } = require("./middlewares/errors");

const pageRoutes = require("./routes/pageRoutes");
const langRoutes = require("./routes/langRoutes");

/**
 * @type {express.Application}
 */
const app = express();

// --- Core middleware ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(localization);

// --- Static assets ---
app.use("/public", express.static(path.join(__dirname, "../public"), {
    maxAge: "4h",
    immutable: true,
    etag: true,
    lastModified: true,
}));

// --- Nunjucks setup ---

/**
 * Configure Nunjucks templating engine.
 * Adds a date formatting filter.
 */
nunjucks.configure("views", { autoescape: true, express: app })
    .addFilter("date", (str, format = "YYYY-MM-DD") => {
        const d = new Date(str);
        if (isNaN(d)) return str;
        if (format === "DD/MM/YYYY") return d.toLocaleDateString("fr-FR");
        if (format === "MM/DD/YYYY") return d.toLocaleDateString("en-US");
        return d.toISOString().split("T")[0];
    });

// --- Routes ---
app.use("/", pageRoutes);
app.use("/", langRoutes);

// --- Errors ---
app.use(serverErrorHandler);
app.use(notFoundHandler);

module.exports = app;
