/**
 * @file Middleware for language localization using simple JSON dictionaries.
 * @description
 * Parses both ../../locales/fr.json and ../../locales/en.json and puts each
 * key/value in a dictionnary.
 *
 * @module middlewares/localization
 * @author Vini Praion
 * @since 2025-10-07
 */

const fs = require("fs");
const path = require("path");
const { deepGet } = require("../utils/deepGet");


/**
 * @type {Record<string, Record<string, string>>}
 * Holds the translation files for each supported locale.
 */
const locales = {
    fr: JSON.parse(fs.readFileSync(path.join(__dirname, "../../locales/fr.json"), "utf8")),
    en: JSON.parse(fs.readFileSync(path.join(__dirname, "../../locales/en.json"), "utf8")),
};

const defaultLocale = "fr";


/**
 * Express middleware injecting translation helper `t()` into response locals.
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
function localization(req, res, next) {
    const lang = req.cookies.lang || defaultLocale;
    res.locals.lang = lang;
    res.locals.t = (key) => deepGet(locales[lang], key) || key;
    next();
}

module.exports = { localization };
