"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerFunctionRoutes = void 0;
const onFinished = require("on-finished");
const types_1 = require("./types");
const invoker_1 = require("./invoker");
/**
 * Registers handler functions for route paths.
 * @param app Express application object.
 * @param userFunction User's function.
 * @param functionSignatureType Type of user's function signature.
 */
function registerFunctionRoutes(app, userFunction, functionSignatureType) {
    if (functionSignatureType === types_1.SignatureType.HTTP) {
        app.use('/favicon.ico|/robots.txt', (req, res) => {
            // Neither crawlers nor browsers attempting to pull the icon find the body
            // contents particularly useful, so we send nothing in the response body.
            res.status(404).send(null);
        });
        app.use('/*', (req, res, next) => {
            onFinished(res, (err, res) => {
                res.locals.functionExecutionFinished = true;
            });
            next();
        });
        app.all('/*', (req, res, next) => {
            const handler = invoker_1.makeHttpHandler(userFunction);
            handler(req, res, next);
        });
    }
    else if (functionSignatureType === types_1.SignatureType.EVENT) {
        app.post('/*', (req, res, next) => {
            const wrappedUserFunction = invoker_1.wrapEventFunction(userFunction);
            const handler = invoker_1.makeHttpHandler(wrappedUserFunction);
            handler(req, res, next);
        });
    }
    else {
        app.post('/*', (req, res, next) => {
            const wrappedUserFunction = invoker_1.wrapCloudEventFunction(userFunction);
            const handler = invoker_1.makeHttpHandler(wrappedUserFunction);
            handler(req, res, next);
        });
    }
}
exports.registerFunctionRoutes = registerFunctionRoutes;
//# sourceMappingURL=router.js.map