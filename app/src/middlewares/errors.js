/**
 * @file Global error handling middleware.
 * @description
 * Sets both the error 500 and error 404 rendering.
 *
 * @module middlewares/errors
 * @author Vini Praion
 * @since 2025-10-07
 */

/**
 * 500 Internal Server Error handler.
 *
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function serverErrorHandler(err, req, res, next) {
    console.error("❌ Global error:", err.stack || err);
    res.status(500).render("pages/500.html.njk", { error: err });
}

/**
 * 404 Not Found handler.
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */

function notFoundHandler(req, res) {
    res.status(404).render("pages/404.html.njk", { url: req.originalUrl });
}



module.exports = { notFoundHandler, serverErrorHandler };
