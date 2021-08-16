/// <reference types="node" />
import * as express from 'express';
import * as http from 'http';
import { HttpFunction, EventFunction, EventFunctionWithCallback, CloudEventFunction, CloudEventFunctionWithCallback } from './functions';
declare global {
    namespace Express {
        interface Request {
            rawBody?: Buffer;
        }
    }
}
export declare const setLatestRes: (res: express.Response) => void;
/**
 * Wraps the provided function into an Express handler function with additional
 * instrumentation logic.
 * @param execute Runs user's function.
 * @return An Express handler function.
 */
export declare function makeHttpHandler(execute: HttpFunction): express.RequestHandler;
/**
 * Wraps cloudevent function (or cloudevent function with callback) in HTTP
 * function signature.
 * @param userFunction User's function.
 * @return HTTP function which wraps the provided event function.
 */
export declare function wrapCloudEventFunction(userFunction: CloudEventFunction | CloudEventFunctionWithCallback): HttpFunction;
/**
 * Wraps event function (or event function with callback) in HTTP function
 * signature.
 * @param userFunction User's function.
 * @return HTTP function which wraps the provided event function.
 */
export declare function wrapEventFunction(userFunction: EventFunction | EventFunctionWithCallback): HttpFunction;
/**
 * Enables registration of error handlers.
 * @param server HTTP server which invokes user's function.
 * @constructor
 */
export declare class ErrorHandler {
    private readonly server;
    constructor(server: http.Server);
    /**
     * Registers handlers for uncaught exceptions and other unhandled errors.
     */
    register(): void;
}
