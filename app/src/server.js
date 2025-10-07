/**
 * @file Entry point of the web service.
 * @description
 * Starts the Express server on the provided port.
 *
 * @author Vini Praion
 * @since 2025-10-07
 */

const app = require("./app");

const PORT = process.env.SERVICE_PORT_WEB;

/**
 * Launch HTTP server.
 */
app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});
